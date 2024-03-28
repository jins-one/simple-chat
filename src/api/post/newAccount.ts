import config from "../../config/config";
import { callApi} from "../../functions/util";
import { ErrorResponse } from "../types";

export default async function newAccount(nickname='',email='',password='',language='kr',code=''){
    // console.log('...')
    return await callApi(`${config.apiUrl.newAccount}`,'POST',{
        nickname,
        email,
        password,
        language,
        code
    })
    // return await (await fetchResult<ErrorResponse>(`${config.apiUrl.newAccount}`,'POST',{
    //     nickname,
    //     email,
    //     password,
    //     language,
    //     code
    // })).json()
}