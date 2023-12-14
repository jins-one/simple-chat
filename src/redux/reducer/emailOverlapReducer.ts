import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import nickAndEmailOverlapCheck from "../../api/get/nickAndEmailOverlapCheck";
import { ErrorResponse, nickNameCheckArg } from "../../api/types";

/**
 * 이메일 중복확인
 */
// createAsyncThunk 생성하기
export const emailOverlapCheckBucket = createAsyncThunk(
    // action 이름
    "api/account/email",
    // 처리할 비동기 함수
    async ({email}:nickNameCheckArg,{ rejectWithValue }) => {
        try {
            // 서버에서 데이터를 불러옴
            const res = await nickAndEmailOverlapCheck('',email)
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
    email:string;
    isLoading: boolean;
    complete:boolean;
}
export const initialState: responseWrapper = {
    res: null,
    email:'',
    isLoading: false,
    complete:false
};
const emailOverlapCheckSlice = createSlice({
    name: "account/email",
    initialState,
    reducers: {
        setEmail:function(state,action:PayloadAction<string>){
            state.email = action.payload;
            return state;
        },
        resetEmail:function(state){
            return initialState;
        }
    },
    // extraReducer에 비동기 함수의 pending, fulfilled, rejected를 처리할 내용을 넣어준다!
    extraReducers: (builder) => {
        builder.addCase(emailOverlapCheckBucket.pending, (state, action) => {
            console.log('next pending');
            state.isLoading = true;
            return state;
        })
            .addCase(emailOverlapCheckBucket.fulfilled, (state, action:PayloadAction<ErrorResponse|null>) => {
                console.log('fulfilled');
                state.res = action.payload;
                state.isLoading = false;
                state.complete=true;
                return state;
            })
            .addCase(emailOverlapCheckBucket.rejected, (state, action) => {
                console.log('rejected');
                state.isLoading = false;
                return state;
            })
    }

})
export const {setEmail,resetEmail} = emailOverlapCheckSlice.actions;
export default emailOverlapCheckSlice.reducer;

