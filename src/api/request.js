import axios from "axios";

// const baseURL = 'http://www.iwenwiki.com/api/livable/banner'
export const createAxiosByInterceptors = (config) => {
    const instance = axios.create({
        // baseURL,
        timeout: 1000,    //超时配置
        withCredentials: true,  //跨域携带cookie
        ...config,   // 自定义配置覆盖基本配置
    });

    // 添加请求拦截器
    instance.interceptors.request.use(
        function (config) {
            // 在发送请求之前做些什么
            // console.log("config:", config);
            return config;
        },
        function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        }
    );

    // 添加响应拦截器
    instance.interceptors.response.use(
        function (response) {
            // 对响应数据做点什么
            // console.log("response:", response);
            // const { code, data, message } = response.data;
            const { status, data } = response
            if (status === 200) {
                return data
            }
            else {
                return Promise.reject(response);
            }

        },
        function (error) {
            // 对响应错误做点什么
            // console.log('error', error)
            return Promise.reject(error);
        }
    );
    return instance;
};
