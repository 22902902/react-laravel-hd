import axios from "axios";

/**
 * HTTP客户端配置Hook
 * 创建并配置axios实例，提供统一的HTTP请求功能
 * 包含请求和响应拦截器，用于处理通用的请求逻辑
 * 
 * @returns {Object} 包含配置好的axios实例的对象
 */
export const useAxios = () => {
    /**
     * 创建axios实例
     * 配置基础URL、超时时间等全局设置
     */
    const axiosInstance = axios.create({
        baseURL: '/hd', // API基础请求地址
        timeout: 1000,   // 请求超时时间（毫秒）
        // headers: {'X-Custom-Header': 'foobar'} // 可以添加自定义请求头
    });

    /**
     * 请求拦截器
     * 在请求发送前进行统一处理，如添加认证token、请求日志等
     */
    axiosInstance.interceptors.request.use(
        function (config) {
            // 在发送请求之前做些什么
            // 例如：添加认证token、设置请求头、打印请求日志等
            return config;
        }, 
        function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        }
    );

    /**
     * 响应拦截器
     * 在响应返回后进行统一处理，如数据格式化、错误处理等
     */
    axiosInstance.interceptors.response.use(
        function (response) {
            // 2xx 范围内的状态码都会触发该函数
            // 对响应数据做点什么，例如：数据格式化、成功日志等
            return response;
        }, 
        function (error) {
            // 超出 2xx 范围的状态码都会触发该函数
            // 对响应错误做些什么，例如：错误提示、登录跳转等
            return Promise.reject(error);
        }
    );

    // 返回配置好的axios实例
    return { axios: axiosInstance };
}


