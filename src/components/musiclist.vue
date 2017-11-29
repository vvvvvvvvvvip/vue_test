<template>
    <div class="musiclist">
        <transition name="sideUp">
            <div class="content" v-show="isShowMusicList">
                <div class="title">
                    <div class="play-type" @click.stop="setPlayType">
                        <i :class="musicPlayType"></i>
                        <span>{{typeName}}</span>
                        <span>({{musiclist.length}})</span>
                    </div>
                    <div class="right">
                        <!--<div class="collect">-->
                            <!--<i class="icon-add-project"></i>-->
                            <!--<span>收藏</span>-->
                        <!--</div>-->
                        <!--<div class="delete">-->
                            <!--<i class="icon-delete"></i>-->
                            <!--<span>清空</span>-->
                        <!--</div>-->
                    </div>
                    <div class="border-1px"></div>
                </div>
                <ul class="container" ref="musiclistContent">
                    <li class="list" v-for="(item, index) in musiclist" :data-index="index" :class="index === getCurrentIndex ? 'active' : ''" @click.stop="playIndex(index)">
                        <div class="border-1px"></div>
                        <i v-show="index === getCurrentIndex" class="playingicon icon-volume-medium"></i>
                        <span class="name">{{item.name}}</span>
                        <span class="singer"> - {{item.singer}}</span>
                        <i class="close"></i>
                    </li>
                </ul>
            </div>
        </transition>
        <transition name="fade">
            <div class="mask" v-show="isShowMusicList" @click.stop="hideMusicList" @touchmove.prevent>
            </div>
        </transition>
    </div>
</template>
<style scoped>
    /*在这里写css样式*/
    .musiclist .content {
        padding: 15px;
        position: fixed;
        height: 314px;
        background: #fff;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9999;
    }
    .musiclist .content .title {
        font-size: 16px;
    }
    .musiclist .content .title .play-type,
    .musiclist .content .title .right,
    .musiclist .content .title .right .collect,
    .musiclist .content .title .right .delete{
        display: inline-block;
    }
    .musiclist .content .title .right .collect {
        margin-right: 15px;
    }
    .musiclist .content .container {
        font-size: 14px;
        padding: 0;
        list-style: none;
        color: #666;
        overflow: auto;
        height: 100%;
    }
    .musiclist .content .container li {
        height: 36px;
        line-height: 36px;
    }
    .musiclist .content .title .right {
        float: right;
    }
    .musiclist .mask {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 9998;
        opacity: 1;
        background: rgba(0,0,0,.5);
    }

</style>
<script type="text/javascript-6">
    import store from '../store'
    export default {
        data () {
        return {
            typeName: ''
        }
    },
    methods: {
        hideMusicList () {
            store.dispatch({
                type: 'hideMusicList'
            })
        },
        playIndex (index) {
            store.dispatch({
                type: 'play_Index',
                index: index
            })
            store.dispatch({
                type: 'hideMusicList'
            })
        },
        setPlayType () {
            store.dispatch('set_PlayType')
        }
    },
    computed: {
        isShowMusicList () {
            return this.$store.getters.getIsShowMusicList
        },
        musiclist () {
            return this.$store.getters.getMusicList
        },
        getCurrentIndex () {
            return this.$store.getters.getCurrentIndex
        },
        getScrollTop () {
            return this.$store.getters.getScrollTop
        },
        musicPlayType () {
            let playType = this.$store.getters.getMusicPlayType ? this.$store.getters.getMusicPlayType : -1
            let className = ''
            switch (playType) {
                case 1:
                    className = 'icon-music-shunxu'
                    this.typeName = '列表循环'
                    break
                case 2:
                    className = 'icon-music-danqu1'
                    this.typeName = '单曲循环'
                    break
                case 3:
                    className = 'icon-music-random'
                    this.typeName = '随机播放'
                    break
                default:
                    className = ''
            }
            return className
        }
    },
    mounted () {
        store.dispatch({
            type: 'set_RefScrollMusicList',
            refs: this.$refs.musiclistContent
        })
    }
    }
</script>