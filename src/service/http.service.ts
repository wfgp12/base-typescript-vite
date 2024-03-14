import axios, { AxiosError } from 'axios';

type HttpMethod = 'get' | 'post' | 'put' | 'delete';

const post = async<T>(route: string, data: Record<string, unknown>) => {
    try {
        const body  =  JSON.stringify(data);
        return  await HttpRequest<T>('post', route, body );
    } catch (error) {
        console.error(error);
    }
}

// const get = async(route: string, data: Record<string, any>) => {
//     try {
//         console.log('GET');
//     } catch (error) {
//         console.error(error);
//     }
// }

// const put = async(route: string, data: Record<string, any>) => {
//     try {
//         console.log('PUT');
//     } catch (error) {
//         console.error(error);
//     }
// }

// const _delete = async(route: string, data: Record<string, any>) => {
//     try {
//         console.log('Delete');
//     } catch (error) {
//         console.error(error);
//     }
// }


const HttpRequest = async<T>(method: HttpMethod, route: string, data: string): Promise<T> => {

    const config = {
        method: method,
        maxBodyLength: Infinity,
        url: `https://jlc1xnil1i.execute-api.us-west-2.amazonaws.com${route}`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    try {
        const response = await axios.request<T>(config)
        return response.data;
    } catch (error) {
        throw (error as AxiosError).response?.data || (error as Error).message;
    }
}

const http = {
    post,
    // get,
    // put,
    // delete: _delete
}
export default http;




