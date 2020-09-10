import {get,post} from './../utils/requests';

class Api{
    // 请求音频资源
    static getVideo(params){
        const url ='http://101.200.56.93:8020/micro/video/scanVideo';
        return get(url,params)
    }
    // post请求测试
    static getPost(params){
        const url = 'http://jsonplaceholder.typicode.com/posts'
        return post(url,params);
    }
}
export default Api