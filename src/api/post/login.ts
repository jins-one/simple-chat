import config from "../../config/config";
import { callApi} from "../../functions/util";
import { ErrorResponse } from "../types";
export interface loginResponse{
    accessToken:string;
    refreshToken:string;
}
export default async function login(email='',password=''):Promise<loginResponse >{
    return await callApi(`${config.apiUrl.login}`,"POST",{
        email,
        password
    })
    // return await (await fetchResult<loginResponse>(`${config.apiUrl.login}`,"POST",{
    //     email,
    //     password
    // })).json()
}