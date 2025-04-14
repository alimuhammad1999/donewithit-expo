import cache from '@/utility/cache';
import { create } from 'apisauce';
import { ApiResponse, } from 'apisauce';

const apiClient = create({
    baseURL: 'http://192.168.100.117:4000/api',
});

//<unknown, unknown>(url: string, params?: {}, axiosConfig?: AxiosRequestConfig) => Promise<ApiResponse<unknown, unknown>>
//<T, U = T>(url: string, params: {} | undefined, axiosConfig: AxiosRequestConfig<any> | undefined) => Promise<ApiOkResponse<unknown> | { ok: true; data: any; }>

const get = apiClient.get;
apiClient.get = async <T, U = T>(url: string, params?: {}, axiosConfig?: any): Promise<ApiResponse<T, U>> => {
    const response = await get(url, params, axiosConfig);
    if (response.ok) {
        cache.storeData(url, response.data);
        return response as ApiResponse<T, U>;
    }
    const data = await cache.getData(url);
    return { ok: true, data: data } as ApiResponse<T, U>;
};

// apiClient.addRequestTransform((request) => {
//     if (request.data instanceof FormData) {
//         if (request.headers) request.headers["Content-Type"] = "multipart/form-data";
//     }
// });


export default apiClient;