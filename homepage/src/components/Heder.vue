<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-ligth bg-light">
            <ul class="navbar-nav">
                <!-- <li><router-link tag="div" to="/" class="nav-link">首页</router-link></li> -->
                <!-- <li><router-link :to="homeLink" class="nav-link">首页</router-link></li> -->
                <!-- tag可以修改标签名 -->
                <!-- to可以绑定动态的地址 -->
                <!-- <li><router-link to="case" class="nav-link">案例</router-link></li> -->

                <!-- <li><router-link to="me" class="nav-link"></router-link></li> -->
            </ul>
        </nav>
    </header>
</template>

<script>
    export default{
        data(){
            return {
                homeLink: './'
            }
        }
    }
</script>

<style>
    .router-link-exact-active{
        color: #333
    }
</style>