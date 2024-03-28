export interface ErrorResponse {
    statusCode: number;
    message: string;
}
export interface nickNameCheckArg {
    nickName?: string;
    email?: string;
}

export interface sendEmailArg {
    email: string;
}

export interface emailCodeVerifyArg {
    email: string;
    code: string;
}

export interface newAccountArg {
    nickname: string;
    email: string;
    password: string;
    language: string;
    code: string;
}

export interface loginArg{
    email:string;
    password:string;
}