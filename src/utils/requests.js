import axios from 'axios';

// axios.defaults.baseURL='http://101.200.56.93:8020';

// get请求
const get = (url,params = {}) =>{
    return new Promise((resolve,reject) =>{
        axios({url,method:'get',params}).then(res =>{
            resolve(res);
        }).then(err =>{
            reject(err);
        })
    })
}
// post请求
const post = (url,data = {}) =>{
    return new Promise((resolve,reject) =>{
        axios({url,method:'post',data}).then(res =>{
            resolve(res);
        }).then(err =>{
            reject(err);
        })
    })
}
// 拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

  axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
export {get,post}