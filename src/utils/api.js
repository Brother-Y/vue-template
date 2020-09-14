import {get,post} from './requests';

class Api{
    // 请求音频资源
    static getVideo(params){
        const url ='/micro/video/scanVideo';
        return get(url,params)
    }
    // post请求测试
    static getPost(data){
        const url = 'http://jsonplaceholder.typicode.com/posts'
        return post(url,data);
    }
}
export default Api