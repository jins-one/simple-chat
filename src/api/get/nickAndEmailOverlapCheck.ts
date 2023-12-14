import config from "../../config/config";
import { fetchResult } from "../../functions/util";
import { ErrorResponse } from "../types";

export default function nickAndEmailOverlapCheck(nick:string='',email:string=''){
    return fetchResult<ErrorResponse>(`${config.apiUrl.nickAndEmailOverlapCheck}?nickname=${nick}&email=${email}`)
}