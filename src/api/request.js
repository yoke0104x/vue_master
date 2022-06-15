/*
 *@description:
 * @author wayne
 * @date 2022-06-15 10:11
*/

import axios from 'axios';
// import SessionStorage from '@/utils/sessionStorage';
const service = axios.create({
    // withCredentials: true, // 跨域请求时发送 cookies
    timeout: 10000000 // request timeout
});

// 添加请求拦截器
service.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/json';
        config.headers['X-Authenticated-token'] = "";
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

// 添加响应拦截器
service.interceptors.response.use(
    function (response) {
        const code = Number(response?.data?.code);
        let codeArr = [40101, 4412, 0, 4429];
        if (!codeArr.includes(code)) {
            return;
        }
        return response.data;
    },
    (error) => {
        if (error && error.response) {
            let errorMessage = '请求错误错误原因未知';
            switch (error.response.status) {
                case 400:
                    errorMessage = '客户端请求的语法错误，服务器无法理解';
                    break;
                case 401:
                    errorMessage = '用户没有权限（令牌、用户名、密码错误）。';
                    break;
                case 500:
                    errorMessage = '服务器内部错误，无法完成请求';
                    break;
                case 503:
                    errorMessage = '由于超载或系统维护，服务器暂时的无法处理客户端的请求。';
                    break;
            }
            //   notification.error({
            //     message: `请求错误 ${error.response.status}: ${error.response.config.url}`,
            //     description: errorMessage,
            //   });

            return null;
        }
    },
);

export default service;
