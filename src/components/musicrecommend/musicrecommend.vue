<template>
    <div class="musicrecommend">
        <img src="../../../static/images/swiper/alan walker.jpg" alt=""/>
        <!-- 中间-->
        <div class="middlePart">
            <div :style="getColor">
                <!-- :style="background-color: getColor"-->
                <i class="icon-diantai"></i>
            </div>
            <div :style="getColor">
                <i class="icon-erji"></i>
            </div>
            <div :style="getColor">
                <i class="icon-fm"></i>
            </div>
        </div>
    </div>
</template>
<style scoped>
    /*在这里写css样式*/
    .musicrecommend img {
        width: 100%;
    }
    .middlePart {
        display: flex;
        justify-content: space-around;
        font-size: 30px;
    }
    .middlePart div {
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-radius: 50%;
    }
</style>
<script type="text/javascript-6">
import store from '../../store'
// 这里写逻辑代码

export default {
    data() {
        return {
            getColor: {
		        color:  this.$store.getters.getAllInfo.user.bg,
		        border: '3px solid '+this.$store.getters.getAllInfo.user.bg,
		         //return this.$store.getters.getAllInfo.user.bg
		    }
        }
    }
}
</script>