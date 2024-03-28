import config from "../../config/config";
import { callApi } from "../../functions/util";
import { ErrorResponse } from "../types";

export default async function emailCodeVerify(email='',code=''){
    return await callApi(`${config.apiUrl.codeVerify}`,"POST",{
        email,
        code
    })
    // return await (await fetchResult<ErrorResponse>(`${config.apiUrl.codeVerify}`,"POST",{
    //     email,
    //     code
    // })).json()
}