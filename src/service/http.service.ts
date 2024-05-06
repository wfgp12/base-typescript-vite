import axios, { AxiosError } from 'axios';

type HttpMethod = 'get' | 'post' | 'put' | 'delete';

const getToken = (): string | null => {
    return localStorage.getItem('token');
}

const post = async<T>(route: string, data: Record<string, unknown>) => {
    try {
        return await HttpRequest<T>('post', route, data);
    } catch (error) {
        console.error(error);
    }
}

const get = async<T>(route: string, queryParams?: Record<string, unknown>) => {
    try {
        const url = queryParams ? `${route}?${new URLSearchParams(JSON.stringify(queryParams))}` : route;
        return await HttpRequest<T>('get', url);
    } catch (error) {
        console.error(error);
    }
}

const put = async<T>(route: string, id: string, data?: Record<string, unknown>) => {
    try {
        const url = `${route}?id=${id}`;
        return await HttpRequest<T>('put', url, data);
    } catch (error) {
        console.error(error);
    }
};

const destroy = async<T>(route: string, id: string) => {
    try {
        const url = `${route}?id=${id}`;
        return await HttpRequest<T>('delete', url);
    } catch (error) {
        console.error(error);
    }
};

const HttpRequest = async<T>(method: HttpMethod, route: string, data?: Record<string, unknown>): Promise<T> => {
    const token = getToken(); // Obtener el token de sesión
    const headers: Record<string, string> = {
        'Content-Type': 'application/json'
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`; // Incluir el token en el encabezado de autorización
    }

    const config = {
        method: method,
        maxBodyLength: Infinity,
        url: `http://localhost:3000/${route}`,
        headers,
        data: data,
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
    get,
    put,
    delete: destroy
}
export default http;