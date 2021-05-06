import axios from 'axios';

export default class TwitterAPI{
    getRequestToken(){
        return axios.get('http://127.0.0.1:8081/auth/request_token')
        .then(({data}) => data);
    }
    getAccessToken(request_key, request_secret, verifier) {
        return axios.post('http://127.0.0.1:8081/auth/access_token', {
            request_key,
            request_secret,
            verifier
        
        })
        .then(({data}) => data);
    }
  }
