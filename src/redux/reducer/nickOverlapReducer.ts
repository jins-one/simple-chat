import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import nickAndEmailOverlapCheck from "../../api/get/nickAndEmailOverlapCheck";
import { ErrorResponse, nickNameCheckArg } from "../../api/types";

/**
 * 닉네임 중복확인
 */
// createAsyncThunk 생성하기
export const nickOverlapCheckBucket = createAsyncThunk(
    // action 이름
    "api/account/nick",
    // 처리할 비동기 함수
    async ({ nickName }: nickNameCheckArg, { rejectWithValue }) => {
        // 서버에서 데이터를 불러옴
        const res = await nickAndEmailOverlapCheck(nickName)
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
const nickOverlapCheckSlice = createSlice({
    name: "account/nick",
    initialState,
    reducers: {
    },
    // extraReducer에 비동기 함수의 pending, fulfilled, rejected를 처리할 내용을 넣어준다!
    extraReducers: (builder) => {
        builder.addCase(nickOverlapCheckBucket.pending, (state, action) => {
            console.log('next pending');
            state.isLoading = true;
            return state;
        })
            .addCase(nickOverlapCheckBucket.fulfilled, (state, action: PayloadAction<ErrorResponse | null>) => {
                console.log('fulfilled');
                state.res = action.payload;
                state.isLoading = false;
                state.complete = true;
                return state;
            })
            .addCase(nickOverlapCheckBucket.rejected, (state, action) => {
                console.log('rejected');
                state.isLoading = false;
                return state;
            })
    }

})
export default nickOverlapCheckSlice.reducer;

