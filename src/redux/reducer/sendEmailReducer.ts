import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import nickAndEmailOverlapCheck from "../../api/get/nickAndEmailOverlapCheck";
import { ErrorResponse, nickNameCheckArg, sendEmailArg } from "../../api/types";
import sendEmail from "../../api/post/sendEmail";

/**
 * 이메일로 인증코드 전송
 */
// createAsyncThunk 생성하기
export const sendEmailBucket = createAsyncThunk(
    // action 이름
    "api/account/email/code",
    // 처리할 비동기 함수
    async ({ email }: sendEmailArg, { rejectWithValue }) => {
        // 서버에서 데이터를 불러옴
        const res = await sendEmail(email)
        // action의 payload 리턴
        return res;

    }
);
interface responseWrapper {
    res: ErrorResponse | null,
    isLoading: boolean;
    complete: boolean;
}
export const initialState: responseWrapper = {
    res: null,

    isLoading: false,
    complete: false
};
const emailSendSlice = createSlice({
    name: "account/email/code",
    initialState,
    reducers: {
    },
    // extraReducer에 비동기 함수의 pending, fulfilled, rejected를 처리할 내용을 넣어준다!
    extraReducers: (builder) => {
        builder.addCase(sendEmailBucket.pending, (state, action) => {
            console.log('next pending');
            state.isLoading = true;
            return state;
        })
            .addCase(sendEmailBucket.fulfilled, (state, action: PayloadAction<ErrorResponse | null>) => {
                console.log('fulfilled');
                state.res = action.payload;
                state.isLoading = false;
                state.complete = true;
                return state;
            })
            .addCase(sendEmailBucket.rejected, (state, action) => {
                console.log('rejected');
                state.isLoading = false;
                return state;
            })
    }

})
export default emailSendSlice.reducer;

