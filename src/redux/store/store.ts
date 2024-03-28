/**
 * 전체 저장소의 상태가 작성된다
 */

import { configureStore } from "@reduxjs/toolkit";
import emailOverlap from '../reducer/emailOverlapReducer'
import nickOverlap from '../reducer/nickOverlapReducer'
import emailSend from '../reducer/sendEmailReducer'
import codeVerify from '../reducer/codeVerifyReducer'
import newAccount from '../reducer/newAccountReducer'
import login from '../reducer/loginReducer'
export const store = configureStore({
  reducer: {
    //이메일 중복
    emailOverlap,
    
    //닉네임 중복
    nickOverlap,

    //인증코드 전송
    emailSend,

    //코드 검증
    codeVerify,

    //일반유저 회원가입
    newAccount,

    //로그인
    login
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;