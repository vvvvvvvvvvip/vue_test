<template>
    <div id="headerComponent">
        <div class="header-warpper" :style="{ backgroundColor: info.bg}">
            <i class="menu icon-menu" @click="showMueu()"></i>
            <div class="centerMenu">
                <router-link tag="i" to="/mymusic">
                    <i class="music icon-music" ></i>
                </router-link>
                <router-link tag="i" to="/findmusic">
                    <i class="find icon-wangyi"></i>
                </router-link>
                <router-link tag="i" to="/community">
                    <i class="community icon-community"></i>
                </router-link>
            </div>
            <router-link tag="i" to="/setColor">
                <i class="icon-theme"></i>
            </router-link>
            <router-view></router-view>
            <!-- <Counter class="counter"></Counter> -->
        </div>
        <!--当前页弹出内容 -->
        <!-- 設置顏色 -->
        <!--<set-color :chang-color="changColor" ref="colorPanel"></set-color>-->
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
    #headerComponent .header-warpper .icon-menu, #headerComponent .header-warpper .icon-search {
        color: #fff;
        font-size: 26px;
        padding: 10px 15px;
    }
    #headerComponent .header-warpper .centerMenu {
        font-size: 24px;
    }
    #headerComponent .header-warpper .centerMenu i {
        margin: 0 5px;
        color: #eee;
    }
    .header .header-warpper .centermenu i.router-link-active i {
        color: #ccafaf;
    }
    #headerComponent .header-warpper .centerMenu i.music,
    #headerComponent .header-warpper .centerMenu i.find,
    #headerComponent .header-warpper .centerMenu i.community {
        font-size: 22px;
    }
    .icon-theme{
        font-size: 26px;
        color: #fff;
        margin-right: 15px;
        display: inherit;
    }
</style>
<script type="text/javascript-6">
import store from '../store'
import { mapState, mapMutations, mapActions } from 'vuex'
import setColor from './setColor.vue'
// 这里写逻辑代码
const Counter = {
		template: `<div><p>{{ getdone }}</p><p>{{countAlias}}</p><p>{{countPlusLocalState}}</p></div>`,
		// computed: mapState({
		// 	count: state => state.count,
		// 	countAlias: () => 'count',
		// 	countPlusLocalState (state) {
		// 		return state.count + 11
		// 	}
		// })
		computed: {
			localComputed () {
				return this.$store.state.count
			},
			getdone () {
				return this.$store.getters.doneTodos
			},
			...mapState({
				count: state => state.count,
				countAlias: () => 'count',
				countPlusLocalState (state) {
					return state.count + 11
				}
			})
		}
	}
export default {
		props: {
            userinfo: {
            	type: Object
            },
		    info: {
				type: Object
			},
			index: {
				type: Number,
				default: 0
			},
			showMenu: {
				type: Boolean,
				default: false
			}
		},
		data () {
			return {
				selectIndex: this.index,
				isShowMenu: this.showMenu
			}
		},
        watch: {
            // 设置颜色页面就在该view下, 因而改变颜色这里也需要监听
            'userinfo.color' () {
               this.setTheme()
            }
        },
		methods: {
			showMueu () {
				store.dispatch({
					type: 'showSideBar'
				})
			},
			hideMenu () {
				store.dispatch({
					type: 'hideSideBar'
				})
			},

			...mapMutations({
				adds: 'increment'
			}),

			...mapActions({}),
			add () {
				this.$store.dispatch({
					type: 'myactionAsync',
					count: 10
				})
			},
			// 设置颜色页面就在该view下, 因而改变颜色这里需要监听, 故设置主题的方法要封装复用
            setTheme () {
                this.$el.querySelector('.header-warpper').style.color = this.userinfo.color
            },
            // 打开设置颜色上升框
            changColor () {
                this.$refs.colorPanel.changColor = true
            },

			// sideBar () {
			// 	alert(store.state.sideBar.isShow)
			// }
			// add () {
			// 	try {
			// 		store.dispatch({
			// 			type: 'myactionAsync',
			// 			count: 10
			// 		})
			// 	} catch (error) {
			// 		alert(error)
			// 	}
			// }
		},

		components: {
			Counter,setColor
		}
	}
</script>