<template>
    <div id="headerComponent">
        <div class="header-warpper" :style="{ backgroundColor: info.bg}">
           1111111111111111111111111111111111111
        </div>
    </div>
</template>
<style scoped>
    @import "../../static/font-icon/style.css";
    /*在这里写css样式*/
    /*头部*/
    #headerComponent {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 50px;
        z-index: 10;
        /*background: #c62f2f;*/
    }
    .header-warpper {
        height: 100%;
        /*background: #c62f2f;*/
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }
</style>
<script type="text/javascript-6">

</script>