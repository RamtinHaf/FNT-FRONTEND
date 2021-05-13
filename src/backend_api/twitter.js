import axios from 'axios';

export default class TwitterAPI{
    getRequestToken(){
        return axios.get('https://fnt-backend.herokuapp.com/auth/request_token')
        .then(({data}) => data);
    }
    getAccessToken(request_key, request_secret, verifier) {
        return axios.post('https://fnt-backend.herokuapp.com/auth/access_token', {
            request_key,
            request_secret,
            verifier
        
        })
        .then(({data}) => data);
    }
  }
