<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
 created() {},
 mounted(){},
 methods:{
 }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  width: 100%;
  background: #eee;
  font-size: 12px;
}
.title {
  text-align: left;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
}
input{
  font-size: 14px;
}
a {
  text-decoration: none;
}
.lt{float: left;}
.rt{float:right;}
.dis_flex{display:flex;}
</style>
