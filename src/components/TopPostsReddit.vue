<template>

<div class="entire_container">
  <div class="chartheader">
      <h3>Top Posts</h3>
      <div class="help-tip-container">
                <div class="help-tip">
                    <p>The top posts is the 3 posts on Reddit. It is sorted by the number of upvotes.</p>
                </div>
            </div>
    </div>
  <div class="toppostsbox">
        <div class="toppostswrapper">
          <div class="postrow" v-for="(post, index) in listdata" v-bind:key="index" @click="gotopost(listdata[index]['url'])">
            
            <div class="postrow_wrapper">
              
              <div class="postinfo_wrapper">
                
                <div class="postinfo_container">
                  
                  <p class="postinfo">
                    <img class="profilepicture" v-bind:src="listdata[index].icon_img">
                    <strong>{{listdata[index]["author"]}}</strong>
                  </p>
  
                  <p class="date">{{listdata[index]["created_at"]}}</p>
                </div>

                <div class="post_engagement">
                    <p>{{formatter(listdata[index]["upvotes"],1)}} upvotes</p>
                    <p >{{formatter(listdata[index]["number_of_comments"],1)}} comments</p>
                </div>

              </div>

              <p class="post_texts">
                {{listdata[index]["title"]}}
              </p>
            
            </div>

            
          </div>
    </div>
  </div>

  </div>
    

       
</template>

<script>
export default {
    name: "topPosts",
    props:['listdata'],
    methods:{
      gotopost(url){
        window.open(`https://www.reddit.com${url}`)
      },
      formatter(num, digits){
        var si = [
          { value: 1, symbol: "" },
          { value: 1E3, symbol: "k" },
          { value: 1E6, symbol: "M" },
          { value: 1E9, symbol: "G" },
          { value: 1E12, symbol: "T" },
          { value: 1E15, symbol: "P" },
          { value: 1E18, symbol: "E" }
        ];
        var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var i;
        for (i = si.length - 1; i > 0; i--) {
          if (num >= si[i].value) {
            break;
          }
        }
        return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
      }
    } 
   

}
</script>

<style scoped>

.entire_container{
  display: flex;
  flex-direction: column;
}

.toppostsbox{
  display: flex;
  justify-content:space-evenly;
  flex-wrap: wrap;
  border: 1px solid #dddfea;
  padding: 20px;
  margin-right: 10px;
}


.postrow{
  border: 1px solid grey;
  width: 600px;
  height: 150px;
  margin-bottom: 10px;
  display: flex;
  padding: 20px;
  transition: all 0.3s;
  
}

.postrow:hover{
  background-color: whitesmoke;
}
.profilepicture{
  width: 45px;
  height: 50px;
  border-radius: 5px;
}

.profilepicture_container{
  margin: auto;
  font-size: 1.25em;
  margin-right: .75em;
  margin-top: .25em;
  
}
.postrow_wrapper{
  margin: auto;
}

.postinfo_wrapper{
  display: flex;
}

.post_engagement{
  display: flex;
  font-size: .9em;
  display: inline-flex;
 
}


.postinfo_container{
  display: flex;
  margin-right: 150px;
  font-size: .85em;
  color: #828282;
  
}
.postinfo{
  font-weight: 600;
  font-size: 1.1em;
  white-space: nowrap;
  max-width: -webkit-calc(100% - .1em);
  max-width: calc(100% - .1em);
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  font-weight: 700;
  color: #44496b;
  margin-right: 10px;

}
.date{
  padding-top: 1px;
}

.post_engagement p{
  margin-left: 5px;
  margin-right: 10px;
}

.post_texts{
  margin-top: .2em;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: .9em;
  line-height: 1.5;
  overflow: hidden;
  font-weight: 500;
  color: #8086ae;
  padding-right: 50px;
}

.chartheader{
    height: 45px;
    display: flex;
}
.chartheader h3{
    font-weight: 900;
    font-size: 1.25em;
    line-height: 1.5;
}
.chart-container{
    border: 1px solid #dddfea;
    padding: 3em;
    padding-top: 4em;
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

</style>