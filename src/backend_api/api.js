import axios from 'axios';

export default class Backendapi {
    getMessages_twitt(query){
        console.log(query);
        //for reddit
        
        // create connection with the resultws we get via Heroku´
      
        const path = 'https://fnt-backend.herokuapp.com/twitter/search';
            

        return axios.post(path, {query}).then((res1) => {
           return res1.data

        })
        .catch((error) => {
            console.error(error);
        });
    }
    getMessages_redd(query){
        console.log(query);
        //for reddit
        
        // create connection with the resultws we get via Heroku            
        const path = 'https://fnt-backend.herokuapp.com/reddit/search';
        
        return axios.post(path, {query}).then((res) => {
           return res.data

        })
        .catch((error) => {
            console.error(error);
        });
    }
} 