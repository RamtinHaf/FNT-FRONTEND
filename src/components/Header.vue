


<template>
    <header id="absolute-main-header" style="margin-bottom:50px">
        <div id="inner">
            <div id="header-container">
                <nav class="navbar navbar-expand-lg navbar-dark sticky" style="z-index:999999999">
                    <div class="container-fluid">
                        <div class="logo" @click="gotoHOME()"> <img :src="'' + require('@/assets/logo-header2.png') + ''" alt=""></div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr">
                                <li class="nav-item">
                                <a class="nav-link active nav-link-light" aria-current="page" @click="gotoTrackers()">Your Trackers</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active nav-link-light" aria-current="page" @click="gotoTwitter()">Twitter</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link active nav-link-light" aria-current="page" @click="gotoReddit()">Reddit</a>
                                </li>
                        
                                <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="https://docs.google.com/forms/d/e/1FAIpQLScsot9B308hVwN_SwIyFVLkFeqculQMSefC0VeoTAvavH1eAA/viewform" target="popup" onclick="window.open('https://docs.google.com/forms/d/e/1FAIpQLScsot9B308hVwN_SwIyFVLkFeqculQMSefC0VeoTAvavH1eAA/viewform','name','width=800,height=500')">Feedback survey</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" @click="gotoFAQ()">FAQ</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" @click="gotoHOME()">Tutorial</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" @click="gotoABOUTus()">About Us</a></li>
                                </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    methods:{
      gotoHOME(){
        this.$router.push('/')
      },
      gotoABOUTus(){
        this.$router.push('/about')
      },
      gotoFAQ(){
        this.$router.push('/faq')
      },
       gotoTrackers(){
        this.$router.push('/yourtrackers')
      },
       gotoTwitter(){
        this.$router.push('/dashboard')
      },
       gotoReddit(){
        this.$router.push('/dashboardreddit')
      },
    }
    
}
</script>

<style scoped>
.navbar{
    min-height: 50px;
    font-size: 21px;
    background-color: #26293C;
    color: #FFFFFFBF;
}
.container-fluid{
    color: #FFFFFFBF;

}
.navbar-brand{
    padding-left: 100px;
    font-size: 40px;
}
.nav.navbar-nav.navbar-right li a {
    color: white;
}
.nav-item{
    padding-right: 25px;

}

.collapse{
    padding-left: 130px;
}

.logo{
    width: 200px;  
}

.logo>img{
    width: 200px;
    height: 40px;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

.nav-item > a {
    cursor: pointer;
}
</style>