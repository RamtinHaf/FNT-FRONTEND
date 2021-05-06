<template>
    <div>
    <transition name="scale">
        <div class="engagement-wrapper" v-if="listdata1.query != '' && listdata2.query == ''">
            <div class="engagement-container">
                <div class="topstats" data-bs-toggle="tooltip" data-bs-placement="top" title="The number of posts made with your tracked hashtag, keyword, URL and/or @mention." >
                    <fa icon="comments" size="2x"/>
                    <countUp :number="listdata1.activity.posts"/>
                    <p>Posts</p>
                </div>
                <div class="topstats" data-bs-toggle="tooltip" data-bs-placement="top" title="The number of users who have posted with your tracked hashtag, keyword, URL and/or @mention.">
                    <fa icon="user" size="2x"/>
                    <countUp :number="listdata1.activity.users"/>
                    <p>Users</p>
                </div>
                <div class="topstats" data-bs-toggle="tooltip" data-bs-placement="top" title="When someone intentionally interacts with your post, that is considered an engagement. We factor in the following kinds of engagement:Twitter: Retweets + Likes" >
                    <fa icon="heart" size="2x"/>
                    <countUp :number="listdata1.activity.engagement"/>
                    <p>Engagement</p>
                </div>
            </div>
        </div>
    </transition>

    <transition name="door">
        <div class="engagement-wrapper" v-if="listdata1.query != '' && listdata2.query != ''">
            <div class="engagement-container">

                <div class="topstats" data-bs-toggle="tooltip" data-bs-placement="top" title="The number of posts made with your tracked hashtag, keyword, URL and/or @mention." >
                    <fa icon="comments" size="2x"/>
                        <div class="stats">
                                <countUp :number="listdata1.activity.posts"/>
                                <h5>&nbsp;vs&nbsp;</h5> 
                                <countUp :number="listdata2.activity.posts"/>
                        </div>
                    <p>Posts</p>
                </div>
                
                <div class="topstats" data-bs-toggle="tooltip" data-bs-placement="top" title="The number of users who have posted with your tracked hashtag, keyword, URL and/or @mention.">
                    <fa icon="user" size="2x"/>
                    <div class="stats">
                        <countUp :number="listdata1.activity.users"/>
                        <h5>&nbsp;vs&nbsp;</h5> 
                        <countUp :number="listdata2.activity.users"/>
                    </div>
                    <p>Users</p>
                </div>

                <div class="topstats" data-bs-toggle="tooltip" data-bs-placement="top" title="When someone intentionally interacts with your post, that is considered an engagement. We factor in the following kinds of engagement:Twitter: Retweets + Likes" >
                    <fa icon="heart" size="2x"/>
                    <div class="stats">
                        <countUp :number="listdata1.activity.engagement"/>
                        <h5>&nbsp;vs&nbsp;</h5> 
                        <countUp :number="listdata2.activity.engagement"/>
                    </div>
                    <p>Engagement</p>
                </div>
            </div>
        </div>
    </transition>
    </div>
</template>

<script>
import countUp from '../countUp';

export default {
    name: "activity",
    props:['listdata1', 'listdata2'],
    components:{ countUp }
}
</script>

<style scoped>
.engagement-wrapper{
    
    height: 150px;
    background-color: #ffd443;
    display: flex;
    justify-content: center;
    align-items: center;
 
}

.engagement-container{
    justify-content: space-evenly;
    margin: auto;
    display: flex;
    width: 100%;
    min-width: none;

}



.topstats{
    width: 100px;
    height: 70px;
    display: grid;
    grid-template-columns: 3em auto;
    grid-template-rows: 1fr 1em;
    margin-right: 120px;

}
.stats{ 
    width: 100px;
    display: inline-flex;
    align-items: center;
    line-height: 10px;  
}



.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>