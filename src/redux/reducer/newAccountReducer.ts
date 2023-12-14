import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import nickAndEmailOverlapCheck from "../../api/get/nickAndEmailOverlapCheck";
import { ErrorResponse, newAccountArg, nickNameCheckArg, sendEmailArg } from "../../api/types";
import sendEmail from "../../api/post/sendEmail";
import newAccount from "../../api/post/newAccount";

/**
 * 일반 유저 회원가입
 */
// createAsyncThunk 생성하기
export const newAccountBucket = createAsyncThunk(
    // action 이름
    "api/account/join",
    // 처리할 비동기 함수
    async ({code,email,language,nickname,password}:newAccountArg,{ rejectWithValue }) => {
        try {
            // 서버에서 데이터를 불러옴
            const res = await newAccount(nickname,email,password,language,code)
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
    isLoading: boolean;
    complete:boolean;
}
export const initialState: responseWrapper = {
    res: null,

    isLoading: false,
    complete:false
};
const newAccountSlice = createSlice({
    name: "account/join",
    initialState,
    reducers: {
    },
    // extraReducer에 비동기 함수의 pending, fulfilled, rejected를 처리할 내용을 넣어준다!
    extraReducers: (builder) => {
        builder.addCase(newAccountBucket.pending, (state, action) => {
            console.log('next pending');
            state.isLoading = true;
            return state;
        })
            .addCase(newAccountBucket.fulfilled, (state, action:PayloadAction<ErrorResponse|null>) => {
                console.log('fulfilled');
                state.res = action.payload;
                state.isLoading = false;
                state.complete=true;
                return state;
            })
            .addCase(newAccountBucket.rejected, (state, action) => {
                console.log('rejected');
                state.isLoading = false;
                return state;
            })
    }

})
export default newAccountSlice.reducer;

