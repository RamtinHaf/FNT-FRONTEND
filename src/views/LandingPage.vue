<template>
<div class="container">
<div class="">
  hello
</div>
  <transition name="slide-fade">
        <p class="hello-t" v-if="show">Sign in with Twitter to make the experience better</p>
      </transition>

    <!-- this how u put images in site -->
    <!-- <img src="..assets/Forgery_News_tracker_NEW.png" width="500px" height="500px"><br> -->
    <!-- <div id="users_list"> 
      <ul>        
        <li v-for="u of users" :key="u.name">
          {{ u.name }}
        </li>   
      </ul>
    </div> -->

      <!-- sign in with twitter transition -->
      <transition name="slide-fade">
        <p v-if="show">Sign in with Twitter to make the experience better</p>
      </transition>
      <template v-if="code === undefined">
    

      <button class="btn bg-transparent" @click="login()"><img class="twt-pic" :src="require('../assets/twitter_button.png')"></button>
    </template>
    <template v-else>
      <label>Code</label>
      <input placeholder="Code from twitter login page" v-model="code">
      <button style="margin-top:20px" class="btn btn-primary" @click="submitVerifierCode()">Submit code</button>
    </template>
    <button style="margin-top:20px" class="btn btn-primary" @click="gotoPage()">Redirect to Your Trackers</button><br><br>
  </div>


</template>



<script>
// import Sidebar from '../components/Sidebar.vue';
import TwitterAPI from '../backend_api/twitter.js';



export default {
    name: 'LandingPage',
    components:{
        // Sidebar,
    },
    data(){
        return{
          code: undefined,
          codeResolver: undefined,
          users: [
              // {
              //   name: "Ram"
              // },
            ],
          show: false,
          
        }
    },
    methods: {
    showTut(){
      this.show = true
        },
    gotoPage(){
      this.$router.push('/yourtrackers');
    },
    async login() {
      let tc = new TwitterAPI();
      await tc.getRequestToken()
        .then(({request_key, request_secret}) => {
          console.log("redirecting user to twitter signin page");

          // 2nd step of authentication, opens a new window for twitter auth..
          window.open(`https://api.twitter.com/oauth/authorize?oauth_token=${request_key}`, "_blank");
          // setting to `""` will change the view so to accept a code.
          this.code = "";
          return {request_key, request_secret};
        })
        .then(token => Promise.all([token, new Promise((resolve) => this.codeResolver = resolve)]))

        // 3rd step of authentication. 
        .then(([{request_key, request_secret}, verifier_code]) => tc.getAccessToken(request_key, request_secret, verifier_code))
        .then(({access_key, access_secret}) => {
          // now the login is completed, store the values in a localstorage.
          console.log(access_key);
          console.log(access_secret);
          console.log("yaaay");
        });
    },
    submitVerifierCode() {
      this.codeResolver(this.code);
      this.code = undefined;
    }
  }

}
</script>

<style scoped>
  .sign-in{
    width: 50px;
  }
  .twt-btn{
    width: 50%;
    height: auto;
  }
  img{
    width: 45%;
    height: auto;
  }
  .fade-enter-active,
.fade-leave-active {
  transition: opacity 2.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 2.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 2.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(40px);
  opacity: 0;
}
.hello-t{
  color: black;
}

</style>