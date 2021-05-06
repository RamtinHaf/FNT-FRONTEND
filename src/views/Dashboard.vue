<template>
  <div class="container">

    <!-- Top of the view, included for both the single view and the comparison view -->
    <SearchList/>
    <div>
        <MediaSelector v-if="Display1.query || Display2.query" class="media"/>
    </div>
    <div class="header">
        <div>
            <Trackerheader class="dashboard-comp" :listdata='Display1.query' :listdata2='Display2.query'/>
        </div>
        
    </div>

   
    <Engagement class="dashboard-comp" :listdata1='Display1' :listdata2='Display2' />

    
    <!-- Displayed when the user has not selected any query -->
    <transition name="slide-down">
        <div  class="container_for_no_query" v-if="Display1.query == '' && Display2.query == ''">
            <h1>Activate of the queries you have chosen above or go to "Your Trackers" to add a search</h1>
        </div>
    </transition>

        <div data-aos="fade-up" class="container_for_linechart dashboard-comp">
            <LineChart id="linechart" :listdata1='Display1' :listdata2='Display2' v-if="Display1.query && Display2.query !== {}"/>
        </div>
     

    <!-- Single view, when the user has only selected one query -->
    <div data-aos="fade-right" data-aos-duration="200" class="container_for_single_query" v-if="Display1.query != '' &&  Display2.query == ''">
        <div class="row dashboard-comp">
            <div class="col-sm">
            <BarChartBig  class="dashboard-comp" id="Barchart" :listdata='Display1.barchart'/>
            </div>
        </div>
        
        <div class="row dashboard-comp" >
            <div v-if="Display1.geochart" class="col-6" data-aos="flip-right" data-aos-duration="2000">
                <GeoChart  id="Geochart" :listdata='Display1.geochart'/>  
            </div>
            <div class="col-md-6" v-if="Display1.sentiment" data-aos="flip-left" data-aos-duration="2000">
                <Sentiment  :listdata='Display1.sentiment'/>
            </div>
        </div>
        <div  class="row dashboard-comp" v-if="Display1.query != ''" >
            <div class="col-sm"  v-if="Display1.query != ''" data-aos="zoom-in" data-aos-duration="2000">
                <Sigmagraph :listdata='Display1'/>
            </div>      
        </div>
        <div class="row dashboard-comp" >
            <div v-if="Display1.topposts" class="col-6" data-aos="fade-right" data-aos-duration="2000">
                <topPosts class="dashboard-comp insight" :listdata='Display1.topposts'/>
            </div>
            <div v-if="Display1.topusers" class="col-6" data-aos="fade-left" data-aos-duration="2000">
                <mostinfluentialusers class="dashboard-comp insight" :listdata='Display1.topusers' />
            </div>
        </div>
    </div>
     

    <!-- Comparison view, when the user has selected two query -->
    <div  class="container_for_comparison" v-show="Display1.query && Display2.query !== ''">
        
        <div class="row dashboard-comp" >
            <div class="col-sm-6" data-aos="flip-left" data-aos-duration="2000">
                <BarChart  id="Barchart" :listdata='Display1.barchart'/>
            </div>
            <div class="col-sm-6" data-aos="flip-right"  data-aos-duration="2000">
                <BarChart  id="Barchart" :listdata='Display2.barchart'/>
            </div>
        </div>

         <div class="row dashboard-comp">
            <div class="col-sm-6"  data-aos="zoom-in-up" data-aos-duration="2000">
                <GeoChart  id="Geochart" :listdata='Display1.geochart'/>
            </div>
            <div class="col-sm-6" data-aos="zoom-in-down" data-aos-duration="2000">
                <GeoChart  id="Geochart" :listdata='Display2.geochart'/>
            </div>
        </div>

         <div class="row dashboard-comp">
            <div class="col-sm-6" v-if="Display1.sentiment" data-aos="flip-left" data-aos-duration="2000">
                <Sentiment  :listdata='Display1.sentiment'/>
            </div>
            <div class="col-sm-6" v-if="Display2.sentiment" data-aos="flip-right" data-aos-duration="2000">
                <Sentiment  :listdata='Display2.sentiment'/>
            </div>
        </div>

         <div    class="row dashboard-comp" v-if="Display1.query != '' && Display2.query != ''">
            <div class="col-sm-6" v-if="Display1" data-aos="fade-up-left" data-aos-duration="2000">
                <Sigmagraph :listdata='Display1'/>
            </div>
            <div class="col-sm-6" v-if="Display2" data-aos="fade-up-right" data-aos-duration="2000">
                <Sigmagraph :listdata='Display2'/>
            </div>
        </div>

        <div   class="row dashboard-comp"  v-if="Display1.query != '' && Display2.query != ''">
            <div v-if="Display1.topposts" class="col-sm-6" data-aos="zoom-in-left" data-aos-duration="2000">
                <topPosts class=" insight" :listdata='Display1.topposts'/>
            </div>
            <div class="col-sm-6" v-if="Display2.topposts" data-aos="zoom-in-right" data-aos-duration="2000">
                <topPosts class=" insight" :listdata='Display2.topposts'/> 
            </div>
        </div>

        <div class="row dashboard-comp" v-if="Display1.topusers && Display2.topusers">
            <div v-if="Display1.topusers" class="col-sm-6" data-aos="flip-right" data-aos-duration="2000">
                <mostinfluentialusers  :listdata='Display1.topusers' />
            </div>
            <div v-if="Display2.topusers" class="col-sm-6" data-aos="flip-left" data-aos-duration="2000">
                 <mostinfluentialusers :listdata='Display2.topusers' />
            </div>
        </div>

    </div>

  </div>
</template>

<script>
//here we import other components
import Trackerheader from "../components/Trackerheader"
import BarChart from '../components/Twitter/BarChart'
import BarChartBig from '../components/Twitter/BarChartBig'
import LineChart from '../components/Twitter/LineChartComponent'
import SearchList from '../components/SearchList.vue';
import topPosts from '../components/Twitter/Topposts'
import mostinfluentialusers from '../components/Twitter/MostInfluentialUsers'
import Engagement from "../components/Twitter/Engagement"
import GeoChart from "../components/Twitter/GeoChartComponent"
import MediaSelector from "../components/MediaSelectorTwitter"
import Sigmagraph from "../components/Twitter/Sigmagraph"
import Sentiment from "../components/Twitter/Sentiment"


export default {
  name: 'Dashboard',
  components: {
    BarChart,
    BarChartBig,
    LineChart,
    SearchList,
    topPosts,
    mostinfluentialusers,
    Trackerheader,
    Engagement,
    GeoChart,
    MediaSelector,
    Sigmagraph,
    Sentiment
    
    },
    
    computed:{
    Display1(){
        if(this.$store.getters.GetTweets[0] === undefined){
            return {"barchart": [], "topposts": {}, "topusers": {}, "geochart": {}, "query": '', "activity": {"posts":null,"users":null,"engagement":null,}, "linechart": {}}
        }else{
            return this.$store.getters.GetTweets[0];
        }   
    },
    Display2(){
        if(this.$store.getters.GetTweets[1] === undefined){
            return {"barchart": [], "topposts": {}, "topusers": {}, "geochart": {}, "query": '', "activity": {"posts":null,"users":null,"engagement":null,}, "linechart": {}}
        }else{
            return this.$store.getters.GetTweets[1];
        }
    },
    yourTrackers(){
      return this.$store.state.searches -1;
    },
  },

};
</script>


<style scoped>

    .geochart{
        width: 50%;
    }
    .sentiment{
        width: 50%;
    }

    .dashboard-comp{
      margin-bottom: 20px;
    }
    .media{
        float: right;
    }
    .container{
      margin: auto;
      display: grid;
      min-height: 100vh;
      grid-column-gap: 1.5em;
      grid-row-gap: 1.5em;
      grid-auto-rows: min-content;
      font-family: Quicksand,Helvetica,Arial,sans-serif;
      font-weight: 500;
      font-size: 16px;
      color: #26293c;
      
    }

    .container_for_barchart{
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 50px;

    }


    .Post_user_container{
      display: flex;
      justify-content: space-between;
    }
    .Post_container{
        display: flex;
        justify-content: space-between;
        width: 100%;

    }



    .container_for_geochart{
        display: flex;
        justify-content: space-between;
    
    }
    .container_for_sentiment{
        display: flex;
        justify-content: space-between;

    }

    .container_for_nodenetwork{
        display: flex;
        justify-content: space-between;
        padding-bottom: 25px;
    }
    .nodenetwork_double_comp{
        width: 50%;
    }


    .container_for_geochart_single{
        padding-bottom: 50px;
        width: 50%;

    }
    .container_for_sentiment{
        width: 100%
    }
    .container_for_sentiment_single{
        width: 100%;
    }

    .container_for_nodegraph_single{
        width: 100%;
        padding-bottom: 50px;

    }

   
   .container_for_geochart_and_sentiment{
       display: flex;
       justify-content: space-between;
   }


.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>