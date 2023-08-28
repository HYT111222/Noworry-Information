import axios from 'axios'

import store from '@/router'

//添加请求拦截器
axios.interceptors.request.use(
  config => {
    // if(store.state.token){
    //   config.headers.common['token'] = store.state.token.token
    // }
    return config;
  },
  error => {
    //请求错误
    return Promise.reject(error);
  }
);
// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    if (response.status === 200 || response.status === 201) {
      console.log('请求成功');
    }
    return response;
  },
  (error) => {
    // 处理错误响应
    alert(error)
    return Promise.reject(error);
  }
)

export default axios
