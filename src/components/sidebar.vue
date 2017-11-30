<template>
    <div class="sidebar">
        <transition name="fade">
            <div class="menu-mask" v-show="isReallShow" @click="hideMenu"></div>
        </transition>

        <transition name="side">
            <div class="menu-content" v-show="isReallShow">
                <div class="menu-detail">
                    <div class="menu-userInfo" :style="{ backgroundColor: info.bg}">
                        <router-link tag="i" to="/info">
                            <img class="avatar" :src="info.avatar" width="56" height="56" v-show="isReallShow" @click="hideMenu">
                        </router-link>
                        <div class="user-detail">
                            <router-link tag="span" to="/editname">
                                <span class="name" v-show="isReallShow" @click="hideMenu">{{info.name}}</span>
                            </router-link>
                        <img class="isvip" src="../assets/images/vip.png" alt="">
                            <span class="progress">Lv.{{info.grade}}</span>
                        </div>
                        <span class="sign" @click="signClick"><i v-show="showIcon" class="icon-coin"></i>{{sign}}</span>
                    </div>
                </div>
                <div class="content">
                    <sidelist iconclass="icon-message" sidetitle="我的消息" disc=""></sidelist>
                    <sidelist iconclass="icon-vip" sidetitle="我的会员" disc="2018.05.10到期"></sidelist>
                    <sidelist iconclass="icon-market" sidetitle="商城" ></sidelist>
                    <split background="#f0f0f0" height="5" border="#eee"></split>
                    <sidelist iconclass="icon-friend" sidetitle="我的好友" ></sidelist>
                    <sidelist iconclass="icon-place" sidetitle="附近的人"></sidelist>
                    <split background="#f0f0f0" height="5" border="#eee"></split>
                    <router-link tag="div" to="./setColor">
                        <div v-show="isReallShow" @click="hideMenu">
                            <sidelist iconclass="icon-theme" sidetitle="个性换肤" disc="官方蓝">
                                <router-view></router-view>
                            </sidelist>
                        </div>
                    </router-link>
                    <sidelist iconclass="icon-set-time" sidetitle="定时播放"></sidelist>
                    <sidelist iconclass="icon-lock" sidetitle="音乐闹钟"></sidelist>
                    <sidelist iconclass="icon-car" sidetitle="驾驶模式"></sidelist>
                    <sidelist iconclass="icon-cloud" sidetitle="音乐云盘"></sidelist>
                </div>
                <div class="footer">
                    <!--<div class="nightmode" @click="showNightBg">-->
                        <!--<i class="icon-night"></i>-->
                        <!--<span>{{mode}}</span>-->
                    <!--</div>-->

                    <div class="setting">
                        <i class="icon-setting"></i>
                        <span>设置</span>
                    </div>

                    <div class="exit">
                        <i class="icon-exit"></i>
                        <span>退出</span>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<style scoped>
    /*在这里写css样式*/
    .sidebar .menu-mask {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        opacity: 1;
        z-index: 10;
        background: rgba(0,0,0,.5);
        transfrom: translateZ(0);
    }
    .sidebar .menu-content {
        position: fixed;
        width: 286px;
        height: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: 11;
        overflow-y: auto;
        background: #fff;
        -webkit-overflow-scrolling: touch;
    }
    .sidebar .menu-content .menu-userInfo {
        box-sizing: border-box;
        width: 100%;
        height: 168px;
        position: relative;
        padding: 50px 15px 15px;
    }
    .sidebar .menu-content .menu-userInfo .user-detail {
        position: absolute;
        bottom: 20px;
        left: 15px;
        font-size: 0;
    }
    .sidebar .menu-content .menu-userInfo .user-detail img {
        width: 14px;
        height: 14px;
        vertical-align: middle;
        margin-left: 6px;
    }
    .sidebar .menu-content .menu-userInfo .avatar {
        position: absolute;
        bottom: 50px;
        left: 15px;
        border-radius: 50%;
    }
    .sidebar .menu-content .menu-userInfo .user-detail .name {
        display: inline-block;
        font-size: 16px;
        font-weight: 500;
        color: #fff;
        vertical-align: middle;
        max-width: 130px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .sidebar .menu-content .menu-userInfo .user-detail .progress {
        font-size: 8px;
        padding: 1px 4px;
        border-radius: 8px;
        color: #fff;
        font-weight: 400;
        border: 1px solid #fff;
        margin-left: 6px;
        vertical-align: middle;
    }
    .sidebar .menu-content .menu-userInfo .sign {
        display: inline-block;
        height: 14px;
        line-height: 14px;
        position: absolute;
        bottom: 15px;
        font-size: 12px;
        right: 15px;
        padding: 4px 8px;
        border: 1px solid #e1e1e1;
        border-radius: 12px;
        color: #fff;
    }
    .sidebar .menu-content .menu-userInfo .sign i {
        margin-right: 6px;
    }
    .sidebar .menu-content .content {
        background: #fff;
        display: block;
        padding-bottom: 40px;
    }
    .footer {
        position: fixed;
        bottom: 0;
        padding: 0 15px;
        font-size: 16px;
        height: 40px;
        line-height: 40px;
        background-color: #fff;
    }
    .footer .nightmode,.footer .setting,.footer .exit {
        display: inline-block;
    }
    .footer .setting {
        padding: 0 20px 0 0;
    }
</style>
<script type="text/javascript-6">
// 这里写逻辑代码
    import store from './../store'
	import split from './split'
	import sidelist from './sidelist'
	export default {
		props: {
			info: {
				type: Object
			}
		},
		data () {
			return {
				sign: '签到',
				showIcon: true,
				userInfo: ''
			}
		},
		methods: {
			// 显示菜单
			hideMenu () {
				store.dispatch({
					type: 'hideSideBar'
				})
			},
			//夜间模式
			//showNightBg () {
			//this.info.bg = "#000",
			//this.mode = "常用模式"
			//},
			// 点击签到
			signClick () {
				this.sign = '已签到'
				this.showIcon = false
			}
		},
		computed: {
			// 显示
			isReallShow () {
				return store.state.sideBar.isShow
			}
		},
		components: {
			split: split,
			sidelist: sidelist
		}
	}
</script>