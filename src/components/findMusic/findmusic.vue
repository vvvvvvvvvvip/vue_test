<template>
    <div class="findmusic">
        <div class="music_menu">
            <router-link class="menu-list" tag="span" to="/findmusic/musicrecommend">
                <span>个性推荐</span>
            </router-link>
            <router-link class="menu-list" tag="span" to="">
                <span>歌单</span>
            </router-link>
            <router-link class="menu-list" tag="span" to="">
                <span>排行榜</span>
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<style scoped>
    /*在这里写css样式*/
    .findmusic {
        position: fixed;
        background: #fff;
        overflow: auto;
        top: 50px;
        bottom: 46px;
        left: 0;
        right: 0;
        z-index: -1;
    }
    .music_menu {
        display: flex;
        justify-content: space-between;
        height: 36px;
    }
    .music_menu span {
        font-size: 16px;
        width: 100%;
        text-align: center;
        line-height: 36px;
    }
    .findmusic .music_menu .menu-list.router-link-active {
        color: #c62f2f;
    }
</style>
<script type="text/javascript-6"> 
// 这里写逻辑代码

</script>