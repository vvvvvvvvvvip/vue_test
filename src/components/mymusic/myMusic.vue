<template>
    <div class="mymusic">
        <type-list name="我的音乐" iconinfo="icon-music" count="28" :playing="true"></type-list>
        <type-list name="最近播放" iconinfo="icon-zuijinplay" count="18"></type-list>
        <type-list name="我的电台" iconinfo="icon-diantai" count="1"></type-list>
        <type-list name="我的收藏" iconinfo="icon-collect" count="33"></type-list>
        <musicsheet v-for="(item,index) in items" :item="item" :index="index" :key="item.id"></musicsheet>
        <!--<setcolor></setcolor>-->
        <!-- 底部显示的菜单列表 -->
        <menu-list></menu-list>
    </div>
</template>
<style scoped>
    /*在这里写css样式*/
    .mymusic {
        overflow: auto;
        position: fixed;
        top: 50px;
        bottom: 46px;
        left: 0;
        right: 0;
    }
</style>
<script type="text/javascript-6">
import typelist from '../typelist.vue'
import musicsheet from '../musicsheet.vue'
import menulist from '../menulist.vue'
// 这里写逻辑代码
export default {
    computed: {
		items () {
			return this.$store.getters.getMusicAllList.sheets
		}
	},
    components: {
        'type-list': typelist,
        musicsheet,
        'menu-list': menulist
    }
}
</script>