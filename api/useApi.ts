import { useState } from "react";
import { AxiosResponse } from "axios";

interface ApiResponse<T> {
    data: T;
    ok: boolean;
}

interface UseApiReturn<T> {
    data: T[];
    error: boolean;
    loading: boolean;
    request: (...args: any[]) => Promise<AxiosResponse<T>>;
}

const useApi = <T>(apiFunc: (...args: any[]) => Promise<AxiosResponse<T>>): UseApiReturn<T> => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const request = async (...args: any[]): Promise<AxiosResponse<T>> => {
        setLoading(true);
        const response = await apiFunc(...args);
        setLoading(false);

        setError(response.status !== 200);
        setData([response.data]);
        return response;
    }

    return { data, error, loading, request };
}

export default useApi;
export type { ApiResponse, UseApiReturn };