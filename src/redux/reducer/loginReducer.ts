import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import nickAndEmailOverlapCheck from "../../api/get/nickAndEmailOverlapCheck";
import { ErrorResponse, loginArg, nickNameCheckArg, sendEmailArg } from "../../api/types";
import sendEmail from "../../api/post/sendEmail";
import login, { loginResponse } from "../../api/post/login";

/**
 * 로그인
 */
// createAsyncThunk 생성하기
export const loginBucket = createAsyncThunk(
    // action 이름
    "api/login",
    // 처리할 비동기 함수
    async ({ email, password }: loginArg, { rejectWithValue }) => {
        const a = await login(email, password);
        console.log(a);
        return a

    }
);
interface responseWrapper {
    res: null | loginResponse,
    isLoading: boolean;
    complete: boolean;
}
export const initialState: responseWrapper = {
    res: null,

    isLoading: false,
    complete: false
};
const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
    },
    // extraReducer에 비동기 함수의 pending, fulfilled, rejected를 처리할 내용을 넣어준다!
    extraReducers: (builder) => {
        builder.addCase(loginBucket.pending, (state, action) => {
            console.log('next pending');
            state.isLoading = true;
            return state;
        })
            .addCase(loginBucket.fulfilled, (state, action: PayloadAction<loginResponse | null>) => {
                console.log('fulfilled');
                if (action.payload?.accessToken) {
                    localStorage.setItem('access', "token="+action.payload.accessToken+";" ?? '')
                }
                state.res = action.payload;
                state.isLoading = false;
                state.complete = true;
                return state;
            })
            .addCase(loginBucket.rejected, (state, action) => {
                console.log('rejected');
                state.isLoading = false;
                return state;
            })
    }

})
export default loginSlice.reducer;

