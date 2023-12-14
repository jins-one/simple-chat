import { ErrorResponse } from '../api/types';

function fetchApi<T>(url = '', method = 'GET', body: T | object = {}): Promise<Response> {
    try{
        let headers = {};
        let bodyCp = {};
        //Formdata가 아닌 경우
        if (!(body instanceof FormData)) {
            console.log('??')
            headers = { ...headers, 'Content-Type': 'application/json',mode: 'no-cors' };
            bodyCp = { body: JSON.stringify(body) };
    
            const init =
                method === 'GET'
                    ? {
                        method,
                        headers,
                    }
                    : {
                        method,
                        headers,
                        ...bodyCp,
                    };
    
            return fetch(url, init);
        }
        return fetch(url, {
            method,
            headers,
            body,
        });
    }catch(err){
        throw err;
    }
    
}
export async function fetchResult<T>(url = '', method = 'GET', body: object = {}): Promise<T|null> {
    console.log(url);
    console.log(body)

    //JsonResponse가 아니라 httpResponse 이다??
    const jr = await fetchApi(`${url}`, method, body);
    if(jr.status === 200 || jr.status === 201){
        console.log(jr);
        return null;
    }else{
        console.log(jr.body)
        throw new Error(url)
    }
    // const jr = await res.json();
    // if (jr.code === 2) {
    //     // accese token 만료
    //     return fetchResult(url, method, body);
    // }
    // if (jr.code === 21 || jr.code === 22) {
    //     // refresh token 만료
    //     alert('재로그인을 해주세요');
    //     await fetchApi('/login/help/token', 'GET');
    //     return jr;
    // }
}