import config from "../../config/config";
import { fetchResult } from "../../functions/util";
import { ErrorResponse } from "../types";

export default function sendEmail(email=''){
    return fetchResult<ErrorResponse>(`${config.apiUrl.sendEmail}?email=${email}`)
}