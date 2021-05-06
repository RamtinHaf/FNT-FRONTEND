<template>
  <div class="container">
    <!-- this how u put images in site -->
    <!-- <img src="..assets/Forgery_News_tracker_NEW.png" width="500px" height="500px"><br> -->
    <carusel-home-page/>
    <!-- <div>
    </div>
    <div id="users_list"> 
      <ul>        
        <li v-for="u of users" :key="u.name">
          {{ u.name }}
        </li>   
      </ul>
    </div>
    <template v-if="code === undefined">
      <button style="margin-top:20px" class="btn btn-primary" @click="login()">Login</button>
    </template>
    <template v-else>
      <label>Code</label>
      <input placeholder="Code from twitter login page" v-model="code">
      <button style="margin-top:20px" class="btn btn-primary" @click="submitVerifierCode()">Submit code</button>
    </template> -->
    <div>
    <button style="margin-top:20px" class="btn btn-primary" @click="gotoPage()">Redirect to Your Trackers</button><br><br>
    </div>
  </div>
</template>

<script>

//here we import other components
// import SearchBox from '../components/SearchBox.vue';
import TwitterAPI from '../backend_api/twitter.js';
import CaruselHomePage from '../components/CaruselHomePage.vue';


export default {
  name: 'Home',
  data: () => ({
    code: undefined,
    codeResolver: undefined,
    users: [
      // {
      //   name: "Saman"
      // },
    ]
  }),
  components: {
    CaruselHomePage
  },
  methods: {
    gotoPage(){
      this.$router.push('/yourtrackers');
    },
    // CaruselHomePageotoPage() {
    //   this.$router.push('/yourtrackers');
    // },
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
};
</script>

<style scoped>

</style>