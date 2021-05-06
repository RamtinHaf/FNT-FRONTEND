<template>
    <div class="trackerheader_wrapper">
        
        <div class="trackerheader_title">
          
        <h1 class="display-1" style="text-align:left">
            Real Time Tracker:
            <div class="row" style="text-align:left">
                <div class="col-md-12" >
                    <strong><span>{{listdata}}&nbsp;</span></strong>
                </div>
                <div class="col-md-12" style="text-align:left">
                    <span v-show="listdata2.length !== 0"> vs </span>
                </div>
                <div class="col-md-12" style="text-align:left">
                    <strong><span>&nbsp;{{listdata2}}</span></strong>
                </div>
            </div>
        </h1>
        </div>

    
    </div>
</template>

<script>


export default {
    name: "Trackerheader",
    props:['listdata', 'listdata2'],
}
</script>

<style scoped>

.display-1{
margin: 0;
max-width: 100%;
overflow: hidden;
-o-text-overflow: ellipsis;
text-overflow: ellipsis;
white-space: nowrap;
padding-right: .5em;
font-size: .8rem;
color: #bec1d6;
font-family: Quicksand,Helvetica,Arial,sans-serif;
font-weight: 700;
text-transform: uppercase;
line-height: 1.25;
margin-top: .35em;
}


.display-1 strong{
font-weight: 900;
display: block;
font-size: 2.75rem;
line-height: 1.25;
color: #26293c;
text-transform: none;
font-family: tiempos headline,Georgia,times new roman,Times,serif;
overflow: hidden;
-o-text-overflow: ellipsis;
text-overflow: ellipsis;
white-space: nowrap;
}

.trackerheader_title{
    float: left;
    
}

.trackerheader_filters{
    position: absolute;
    right: 0    
}

.checkboxpic{
    width: 10%;
}

</style>
