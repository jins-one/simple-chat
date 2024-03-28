export async function callApi(url: string, method: string, body?: any): Promise<any> {
    const options: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json', // 이 부분은 API에서 요구하는 content-type에 맞게 변경해야 할 수 있습니다.
        },
        body: body ? JSON.stringify(body) : undefined,
    };
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            console.log()
            throw new Error((await response.json() as Error).message);
        }
        return await response.json();
    } catch (error) {
        // 예외 처리
        if(error instanceof Error){
            console.error('Error calling API:',error.message);
        }
        throw error; // 예외를 다시 throw하여 상위에서 처리할 수 있도록 합니다.
    }
}