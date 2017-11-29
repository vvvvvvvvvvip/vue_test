<template>
    <!--<songHeader> :style="{ backgroundColor: info.bg}"</songHeader>-->
    <div class="changeBg">
        <ul class="flex">
            <div class="bgKuai darkseagreen" @click="changeBg">
                <span>darkseagreen</span>
            </div>
            <div class="bgKuai lightcoral" @click="changeBg(lightcoral)">
                <span>lightcoral</span>
            </div>
            <div class="bgKuai limegreen" @click="changeBg(limegreen)">
                <span>limegreen</span>
            </div>
        </ul>
        <ul class="flex">
            <div class="bgKuai darksalmon" @click="changeBg(darksalmon)">
                <span>darksalmon</span>
            </div>
            <div class="bgKuai saddlebrown" @click="changeBg(saddlebrown)">
                <span>saddlebrown</span>
            </div>
            <div class="bgKuai lightsalmon" @click="changeBg(lightsalmon)">
                <span>lightsalmon</span>
            </div>
        </ul>
    </div>
</template>
<style scoped>
    /*在这里写css样式*/
    .changeBg {
        position: fixed;
        background: #fff;
        overflow: auto;
        top: 50px;
        bottom: 46px;
        left: 0;
        right: 0;
        z-index: -1;
    }
    ul {
        padding: 0;
    }
    .flex {
        display: flex;
        flex: 1;
        justify-content: space-around;
    }
    .bgKuai {
        width: 120px;
        height: 130px;
        position: relative;
    }
    .bgKuai span {
        position: absolute;
        bottom: 5px;
        right: 5px;
        font-size: 12px;
    }
    .limegreen {
        background-color: limegreen;
    }
    .lightcoral {
        background-color: lightcoral;
    }
    .darkseagreen {
        background-color: darkseagreen;
    }
    .darksalmon {
        background-color: darksalmon;
    }
    .lightsalmon {
        background-color: lightsalmon;
    }
    .saddlebrown {
        background-color: saddlebrown;
    }
</style>
<script type="text/javascript-6">
//import songHeader from './songHeader.vue'

import Vue from 'vue'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import store from './../store'
// 这里写逻辑代码
Vue.use(Vueaxios, axios)
export default {
	methods: {
	    changeBg (bgColor){
	        this.info.bg = ""
	    }
	}
}
</script>