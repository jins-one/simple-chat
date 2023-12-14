import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import nickAndEmailOverlapCheck from "../../api/get/nickAndEmailOverlapCheck";
import { ErrorResponse, emailCodeVerifyArg, nickNameCheckArg, sendEmailArg } from "../../api/types";
import sendEmail from "../../api/post/sendEmail";
import emailCodeVerify from "../../api/post/emailCodeVerify";
import { RootState } from '../store/store';

/**
 * 인증코드 검증
 */
// createAsyncThunk 생성하기
export const codeVerifyBucket = createAsyncThunk(
    // action 이름
    "api/account/email/code/verify",
    // 처리할 비동기 함수
    async ({email,code}:emailCodeVerifyArg,{ rejectWithValue }) => {
        try {
            // 서버에서 데이터를 불러옴
            const res = await emailCodeVerify(email,code)
            // action의 payload 리턴
            return res;
        } catch (err) {
            console.log(err)
            throw err;
        }

    }
);
interface responseWrapper {
    res: ErrorResponse|null,
    code:string;
    isLoading: boolean;
    complete:boolean;
}
export const initialState: responseWrapper = {
    res: null,
    code:'',
    isLoading: false,
    complete:false
};
const codeVerifySlice = createSlice({
    name: "account/email/code/verify",
    initialState,
    reducers: {
        setCode:function(state,action:PayloadAction<string>){
            state.code = action.payload;
            return state;
        },
        resetCode:function(RootState){
            return initialState;
        }
    },
    // extraReducer에 비동기 함수의 pending, fulfilled, rejected를 처리할 내용을 넣어준다!
    extraReducers: (builder) => {
        builder.addCase(codeVerifyBucket.pending, (state, action) => {
            console.log('next pending');
            state.isLoading = true;
            return state;
        })
            .addCase(codeVerifyBucket.fulfilled, (state, action:PayloadAction<ErrorResponse|null>) => {
                console.log('fulfilled');
                state.res = action.payload;
                state.isLoading = false;
                state.complete=true;
                return state;
            })
            .addCase(codeVerifyBucket.rejected, (state, action) => {
                console.log('rejected');
                state.isLoading = false;
                return state;
            })
    }

})
export const {setCode,resetCode} = codeVerifySlice.actions
export default codeVerifySlice.reducer;

