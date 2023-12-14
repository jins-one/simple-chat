const config = {
    apiUrl: {
        //닉네임, 이메일 중복체크
        nickAndEmailOverlapCheck: 'api/auth/duplication-check',

        //이메일로 인증 코드 전송
        sendEmail:'api/auth/send-code',

        //인증코드 검증
        codeVerify:'api/auth/verify-code',

        //일반회원 회원가입
        newAccount:'api/auth/signup',

        //login
        login:'api/auth/login'
    }
}

export default config;