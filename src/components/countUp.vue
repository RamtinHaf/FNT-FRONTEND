<template>
  <h1>{{ formatter(number,1) }}</h1>
</template>

<script>
export default {
  name: "countUp",
  props: ["number"],
  data(){
    return {
      countDown : 0
    }
  },
  watch:{
     
  },
  created(){
    //this.countDownTimer();
  },
  methods: {
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
  },
        
};
</script>

<style></style>
