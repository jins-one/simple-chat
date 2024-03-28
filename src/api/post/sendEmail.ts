import config from "../../config/config";
import { callApi} from "../../functions/util";
import { ErrorResponse } from "../types";

export default async function sendEmail(email=''){
    return await callApi(`${config.apiUrl.sendEmail}?email=${email}`,'GET')
    // return await (await fetchResult<ErrorResponse>(`${config.apiUrl.sendEmail}?email=${email}`)).json()
}