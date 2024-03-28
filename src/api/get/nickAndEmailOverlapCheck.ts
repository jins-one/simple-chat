import config from "../../config/config";
import { callApi} from "../../functions/util";
import { ErrorResponse } from "../types";

export default async function nickAndEmailOverlapCheck(nick:string='',email:string=''):Promise<null>{
        const res = await callApi(`${config.apiUrl.nickAndEmailOverlapCheck}?nickname=${nick}&email=${email}`,'GET');
        console.log('????')
        return res;
}