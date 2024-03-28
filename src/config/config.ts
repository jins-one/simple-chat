const config = {
    apiUrl: {
        //닉네임, 이메일 중복체크
        nickAndEmailOverlapCheck: 'http://3.34.151.1:3000/auth/duplication-check',

        //이메일로 인증 코드 전송
        sendEmail:'http://3.34.151.1:3000/auth/send-code',

        //인증코드 검증
        codeVerify:'http://3.34.151.1:3000/auth/verify-code',

        //일반회원 회원가입
        newAccount:'http://3.34.151.1:3000/auth/signup',

        //login
        login:'http://3.34.151.1:3000/auth/login'
    }
}

export default config;