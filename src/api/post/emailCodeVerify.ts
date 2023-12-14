import config from "../../config/config";
import { fetchResult } from "../../functions/util";
import { ErrorResponse } from "../types";

export default function emailCodeVerify(email='',code=''){
    return fetchResult<ErrorResponse>(`${config.apiUrl.codeVerify}`,"POST",{
        email,
        code
    })
}