<template>
    <div class="menulist">
        <transition name="sideUp">
            <div class="content" ref="content" v-show="showMenu">
                <p class="title">
                    {{menuList.title}}
                </p>
                <type-list v-for="(item, index) in menuList.content" :item="item" :index="index" :key="item.id" :name="item.name" :iconinfo="item.iconinfo" :count="item.count" :bgcolor="item.bgcolor"></type-list>
            </div>
        </transition>
        <transition name="fade">
            <div class="mask" v-show="showMenu" @click="hideMenuList" @touchmove.stop.prevent="stopTouch($event)">
            </div>
        </transition>
    </div>
</template>
<style scoped>
    /*在这里写css样式*/
    .menulist {
        font-size: 12px;
    }
    .menulist .content {
        background: #fff;
        position: fixed;
        z-index: 16;
        height: auto;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 25px 0 46px;
    }
    .menulist .content .title {
        margin: 0;
        height: 20px;
        line-height: 20px;
        padding: 0 15px;
    }
    .typelist {
        height: 50px;
        /* background: #f7f7f7; */
        position: relative;
    }
    .typelist .info {
        font-size: 20px;
        position: absolute;
        top: 50%;
        color: #c62f2f;
        left: 15px;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    .typelist .typelist-detail {
        height: 100%;
        line-height: 50px;
        margin-left: 50px;
        box-sizing: border-box;
        font-size: 0;
    }
    .typelist .typelist-detail .name {
        color: #333;
        font-size: 14px;
        margin-right: 6px;
        vertical-align: middle;
    }
    .typelist .typelist-detail .count {
        color: #aaa;
        font-size: 10px;
        font-weight: 400;
        vertical-align: middle;
    }
    .typelist .typelist-detail .border-1px {
        position: relative;
    }
    .menulist .mask {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 15;
        opacity: 1;
        background: rgba(0,0,0,.5);
    }
</style>
<script type="text/javascript-6">
import store from '../store'
import typelist from './typelist.vue'
// 这里写逻辑代码
export default {
		data () {
			return {
				isShow: false
			}
		},
		methods: {
			stopTouch (event) {
				return
			},
			hideMenuList () {
				store.dispatch({
					type: 'hideMenuList'
				})
			}
		},
		computed: {
			showMenu () {
				this.isShow = this.$store.getters.getIsShow ? this.$store.getters.getIsShow : false
				return this.$store.getters.getIsShow ? this.$store.getters.getIsShow : false
			},
			menuList () {
				return this.$store.getters.getShowMenuInfo ? this.$store.getters.getShowMenuInfo : ''
			}
		},
		watch: {
			isShow: function (newisShow) {
				if (newisShow) {
					this.$refs.content.style.height = `${this.$store.getters.getShowMenuInfo.content.length * 50 + 20}px`
				}
			}
		},
		components: {
			'type-list': typelist
		}
	}
</script>