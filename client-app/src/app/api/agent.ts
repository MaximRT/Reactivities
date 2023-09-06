import axios, { AxiosResponse } from "axios";
import { Activity } from "../models/activity";

const sleep = (delay: number) => {
    return new Promise((resolse) => {
        setTimeout(resolse, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

const responceBody = <T> (responce: AxiosResponse<T>) => responce.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responceBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responceBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responceBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responceBody),
}

const Activities = {
    list: () => requests.get<Activity[]>('/activities'),
    details: (id: string) => requests.get<Activity>(`/activities/${id}`),
    create: (activity: Activity) => axios.post<void>('/activities', activity),
    update: (activity: Activity) => axios.put<void>(`/activities/${activity.id}`, activity),
    delete: (id: string) => axios.delete<void>(`/activities/${id}`)
}

const agent = {
    Activities
}

export default agent;