import config from "../../config/config";
import { fetchResult } from "../../functions/util";
import { ErrorResponse } from "../types";

export default function login(email='',password=''){
    return fetchResult<ErrorResponse>(`${config.apiUrl.login}`,"POST",{
        email,
        password
    })
}