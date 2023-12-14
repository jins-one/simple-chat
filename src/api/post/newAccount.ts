import config from "../../config/config";
import { fetchResult } from "../../functions/util";
import { ErrorResponse } from "../types";

export default function newAccount(nickname='',email='',password='',language='kr',code=''){
    console.log('...')
    return fetchResult<ErrorResponse>(`${config.apiUrl.newAccount}`,'POST',{
        nickname,
        email,
        password,
        language,
        code
    })
}