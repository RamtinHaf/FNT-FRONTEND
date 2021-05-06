<template>
  
  <Header/>
    <div class="d-flex" id="wrapper">
      <router-view/>
    </div>
  <Footer/>
  
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer
  },
  created(){
    AOS.init();
  }
  
}
</script>

<style>
@import './assets/css/theme.css';
@import './assets/css/custom.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

.d-flex{
  padding-bottom: 150px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#wrapper {
    overflow-x: auto;
 }


#page-content-wrapper {
  min-width: 100vw;
}

.help-tip-container{
    z-index: 100;
    padding: 2.5px 0px 0px 5px;
}
.help-tip{
    text-align: center;
    background-color: #BCDBEA;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    font-size: 14px;
    line-height: 25px;
    cursor: default;
}

.help-tip:before{
    content:'?';
    font-weight: bold;
    color:#fff;
}

.help-tip:hover p{
    display:block;
    transform-origin: 100% 0%;
    -webkit-animation: fadeIn 0.3s ease-in-out;
    animation: fadeIn 0.3s ease-in-out;

}

.help-tip p{    /* The tooltip */
    display: none;
    text-align: left;
    background-color: #1E2021;
    padding: 20px;
    width: 300px;
    border-radius: 3px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    right: -4px;
    color: #FFF;
    font-size: 13px;
    line-height: 1.4;
}

.help-tip p:before{ /* The pointer of the tooltip */
    content: '';
    width:0;
    height: 0;
    border:6px solid transparent;
    border-bottom-color:#1E2021;

}

.help-tip p:after{ /* Prevents the tooltip from being hidden */
    width:100%;
    height:40px;
    content:'';
   
}

/* CSS animation */

@-webkit-keyframes fadeIn {
    0% { 
        opacity:0; 
        transform: scale(0.6);
    }

    100% {
        opacity:100%;
        transform: scale(1);
    }
}

@keyframes fadeIn {
    0% { opacity:0; }
    100% { opacity:100%; }
}


.influencercontainer{
  cursor: pointer;
  border-radius: 13px;
  
  border: 1px solid rgb(3, 3, 3);
  width: 150px;
  height: 150px; 
  display: grid;
  flex-basis: 47%;
  margin-bottom: 10px;
  transition: all 0.3s;
}
.postrow{
  border-radius: 13px;
}



/** SLIDEDOWN **/
.slide-down-enter, .slide-down-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

.slide-down-enter-active, .slide-down-leave-active {
  transition: opacity 0.4s, transform 0.4s ease-in-out;
}


/** SCALE **/
.scale-enter, .scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.scale-enter-active, .scale-leave-active {
  transition: transform 0.2s, opacity 0.2s;
}

/** DOOR **/
.door-enter, .door-leave-to {
  width: 0;
  left: 50%;
  transform: translateX(-50%);
}
.door-enter nav, .door-enter .overlay-close, .door-leave-to nav, .door-leave-to .overlay-close {
  opacity: 0;
}
.door-enter nav, .door-leave-to nav {
  position: absolute;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}

.door-enter-to {
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}

.door-enter-active, .door-leave-active {
  transition: width 0.5s 0.3s;
}
.door-enter-active nav, .door-enter-active .overlay-close, .door-leave-active nav, .door-leave-active .overlay-close {
  transition: opacity 0.3s 0.5s;
}

.door-leave-active nav, .door-leave-active .overlay-close {
  transition-delay: 0s;
}

.effect-content-push .container {
  overflow-x: hidden;
  transition: transform 0.5s;
  height: 100%;
}
.effect-content-push .container:after {
  content: "";
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  transition: opacity 0.5s, visibility 0s 0.5s;
}
.effect-content-push .container.overlay-open {
  transform: translateX(50%);
}
.effect-content-push .container.overlay-open:after {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.5s;
}
.effect-content-push .overlay {
  background: #99cc33;
}

.content-push-enter, .content-push-leave-to {
  background: #99cc33;
  transform: translateX(-100%);
}

.content-push-enter-active, .content-push-leave-active {
  transition: transform 0.5s;
}

.effect-content-scale {
  background-color: #eee;
}
.effect-content-scale .container {
  background: #fff;
  transition: transform 0.5s;
  height: 100%;
}
.effect-content-scale .container.overlay-open {
  transform: scale(0.8);
}

.content-scale-enter, .content-scale-leave-to {
  transform: translateY(100%);
}

.content-scale-enter-active, .content-scale-leave-active {
  transition: transform 0.5s;
}

.corner-shape-enter svg, .corner-shape-leave-to svg {
  position: absolute;
  top: 0;
  left: 0;
}
.corner-shape-enter .overlay-path, .corner-shape-leave-to .overlay-path {
  fill: rgba(153, 204, 51, 0.9);
}
.corner-shape-enter nav,
.corner-shape-enter .overlay-close, .corner-shape-leave-to nav,
.corner-shape-leave-to .overlay-close {
  opacity: 0;
}

.corner-shape-enter-active nav,
.corner-shape-enter-active .overlay-close, .corner-shape-leave-active nav,
.corner-shape-leave-active .overlay-close {
  transition: opacity 0.4s 0.4s;
}
</style>
