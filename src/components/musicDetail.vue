<template>
    <transition name="sliderUpHideRight">
        <div class="musicdetail" v-show="isShowMusicDetail">
            <div class="filterbg" :style="{backgroundImage : 'url(' + this.getCurrentMusic.img_url + ')', backgroundSize : 'cover', backgroundPosition : 'center center'}">
            </div>
            <div class="detailcontent">
                <div class="content-header">
                    <i class="back icon-back" @click="hideMusicDetail"></i>
                    <div class="musicTopDetail">
                        <p class="name">{{getCurrentMusic.name}}</p>
                        <p class="singer">{{getCurrentMusic.singer}}</p>
                    </div>
                    <i class="share icon-share"></i>
                </div>
                <transition name="fade">
                    <div class="content-wrapper" v-show="showCD">
                        <div class="cd" @click.stop="isShowCD(false)">
                            <div class="swith-line">
                                <div class="triger" :class="isPlaying ? '' : 'pause'"></div>
                            </div>
                            <div class="cd-content" ref="cdcontent">
                                <div class="wrapper" ref="cd" :class="isPlaying ? 'animate ' : ''">
                                    <div class="cd-bg"></div>
                                    <img class="img" :src="getCurrentMusic.img_url" alt="">
                                </div>
                            </div>
                        </div>
                        <!-- <div class="lrc" v-if="getCurrentMusic">
                            {{musicCurrentLrc}}
                        </div> -->
                        <div class="musicDo">
                            <i class="icon icon-like"></i>
                            <i class="icon icon-download"></i>
                            <i class="icon icon-msg"></i>
                            <i class="icon icon-list-circle-small"></i>
                        </div>
                    </div>
                </transition>
                <transition name="fade">
                    <div class="lrc-wrapper" ref="lrcwrapper" v-show="!showCD" @click.stop="isShowCD(true)">
                        <div class="volume-range">
                            <range range-type="volume" ball-width="10" current-color="rgba(255,255,255,0.8)"></range>
                        </div>
                        <div class="lrc" ref="lrc" :scroll-top.prop="scrollTop">
                            <div class="div-lrc" ref="divlrc">
                                <p v-if="getCurrentMusic" v-for="(lrc, index) in getCurrentMusic.lyric" :data-index="index" :class="lrcIndex === index ? 'active musiclrc' : 'musiclrc'" :data-timeid="lrc.timeId">{{lrc === '' ? '暂无歌词' : lrc.text}} </p>
                            </div>
                        </div>
                    </div>
                </transition>
                <div class="content-footer">
                    <div class="div-range">
                        <range></range>
                    </div>
                    <div class="musicDetailCtrl">
                        <i class="playType" :class="musicPlayType" @click.stop="setPlayType"></i>
                        <i class="prev icon-prevdetail" @click.stop="playPrev"></i>
                        <i class="playPause" :class="isPlaying ? 'icon-pause-detail' : 'icon-playdetail' " @click.stop="playPause"></i>
                        <i class="next icon-nextdetail" @click.stop="playNext"></i>
                        <i class="menu icon-list-music" @click.stop="showMusicList"></i>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<style scoped>
    /*在这里写css样式*/
    @keyframes goRotate{
        0%{
            transform: rotate(0);
        }
        50%{
            transform: rotate(180deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    .musicdetail .detailcontent .content-wrapper .cd .cd-content .wrapper.animate {
        -webkit-animation: goRotate 16s linear infinite .1s;
        animation: goRotate 16s linear infinite .1s;
    }
    .musicdetail {
        position: absolute;
        z-index: 999;
        top: 0px;
        height: 100%;
        width: 100%;
        background-color: rgb(255, 255, 255);
        left: 0px;
    }

    .musicdetail .detailcontent, .musicdetail .filterbg {
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    .musicdetail .filterbg {
        filter: blur(30px);
    }

    .musicdetail .detailcontent .content-header {
        display: flex;
        height: 50px;
        justify-content: space-between;
        padding-top: 6px;
    }

    .musicdetail .detailcontent .content-header .back, .musicdetail .detailcontent .content-header .share {
        width: 50px;
        height: 50px;
        color: darkgray;
        font-size: 26px;
        line-height: 50px;
        text-align: center;
        font-weight: bold;
    }

    .musicdetail .detailcontent .content-header .musicTopDetail p {
        margin: 0;
        font-size: 16px;
        color: azure;
        text-align: center;
    }

    .musicdetail .detailcontent .content-header .musicTopDetail p:nth-child(1) {
        padding: 2px 0;
    }

    .musicdetail .detailcontent .content-wrapper .cd .cd-content .wrapper {
        text-align: center;
    }

    .musicdetail .detailcontent .content-wrapper .cd .cd-content .wrapper .img {
        position: absolute;
        display: block;
        width: 28vh;
        height: 28vh;
        top: 8vh;
        transition: all .3s;
        left: 50%;
        -webkit-transform: translate3d(-50%,0,0);
        transform: translate3d(-50%,0,0);
        z-index: 1;
    }
    .musicdetail .detailcontent .content-footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 18vh;
        color: #fff;
        background-image: linear-gradient(0deg,rgba(0,0,0,.8),rgba(0,0,0,.4),transparent,transparent);
    }
    .musicdetail .detailcontent .content-footer .div-range {
        height: 6vh;
    }

    .musicdetail .detailcontent .content-footer .musicDetailCtrl i.menu, .musicdetail .detailcontent .content-footer .musicDetailCtrl i.playType {
        font-size: 20px;
        color: #e1e1e1;
    }

    .musicdetail .detailcontent .content-footer .musicDetailCtrl i {
        display: inline-block;
        font-size: 28px;
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
    }

    .musicdetail .detailcontent .content-footer .musicDetailCtrl i.playPause {
        font-size: 46px;
    }

    .musicdetail .detailcontent .lrc-wrapper {
        position: absolute;
        top: 10vh;
        left: 0;
        bottom: 20vh;
        right: 0;
        overflow: visible;
    }

    .musicdetail .detailcontent .lrc-wrapper .lrc{
        position: relative;
        height: calc(100% - 30px);
        overflow-y: scroll;
        box-sizing: border-box;
        transition: all .3s;
    }

    .musicdetail .detailcontent .lrc-wrapper .lrc .div-lrc{
        padding: 50% 0;
        position: relative;
        overflow: auto;
        font-size: 0.2rem;
        text-align: center;
        color: azure;
    }

    .musicdetail .detailcontent .content-wrapper .musicDo{
        width: 70vw;
        position: absolute;
        height: 40px;
        left: 50%;
        bottom: 0;
        -webkit-transform: translate3d(-50%,0,0);
        transform: translate3d(-50%,0,0);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        justify-content: space-around;
    }
    .musicdetail .detailcontent .content-wrapper .musicDo i {
        display: inline-block;
        width: 40px;
        line-height: 40px;
        text-align: center;
        color: hsla(0,0%,100%,.8);
        font-size: 20px;
    }
    .musicdetail .detailcontent .content-footer .musicDetailCtrl{
        height: 12vh;
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        font-size: 0;
    }

    .musicdetail .detailcontent .content-wrapper .cd .cd-content .wrapper .cd-bg {
        width: 44vh;
        height: 44vh;
        position: relative;
        top: 0;
        left: 50%;
        -webkit-transform: translate3d(-50%,0,0);
        transform: translate3d(-50%,0,0);
        background: url(/static/images/cd-mine.png);
        background-size: 100%;
        z-index: 2;
    }

    .musicdetail .detailcontent .content-wrapper {
        position: absolute;
        top: 10vh;
        left: 0;
        bottom: 20vh;
        right: 0;
        overflow: hidden;
    }
    .musicdetail .detailcontent .content-wrapper .cd {
        height: 6.8rem;
    }
    .musicdetail .detailcontent .content-wrapper .cd .cd-content{
        width: 44vh;
        height: 44vh;
        position: relative;
        margin: 0 auto;
        margin-top: 70px;
    }
</style>
<script type="text/javascript-6"> 
// 这里写逻辑代码
    import store from './../store'
    import range from './range'
    export default {
        data () {
        return {
            isPlay: false,
            showCD: true,
            scrollTop: 0,
            currentLrcIndex: 0
        }
    },
    methods: {
        hideMusicDetail () {
            store.dispatch({
                type: 'set_MusicDetail',
                isShow: false
            })
            this.showCD = true
        },
        playPause () {
            // 控制音乐播放暂停
            store.commit('togglePlay')
        },
        playNext () {
            store.dispatch('play_Next')
        },
        playPrev () {
            store.dispatch('play_Prev')
        },
        // 显示音乐列表
        showMusicList () {
            let scrollTop = (this.$store.getters.getCurrentIndex + 1 - 3) * 42
            store.dispatch({
                type: 'set_ScrollTop',
                scrollTop: scrollTop
            })
            store.dispatch('showMusicList')
        },
        // 设置播放类型
        setPlayType () {
            store.dispatch('set_PlayType')
        },
        isShowCD (bool) {
            this.showCD = bool
        }
    },
    computed: {
        isShowMusicDetail () {
            return this.$store.getters.getMusicDetail
        },
        isPlaying () {
            this.isPlay = this.$store.getters.getIsPlaying
            return this.$store.getters.getIsPlaying ? this.$store.getters.getIsPlaying : ''
        },
        getCurrentMusic () {
            return this.$store.getters.getCurrentMusic ? this.$store.getters.getCurrentMusic : ''
        },
        musicPlayType () {
            let playType = this.$store.getters.getMusicPlayType ? this.$store.getters.getMusicPlayType : -1
            let className = ''
            switch (playType) {
                case 1:
                    className = 'icon-music-shunxu'
                    break
                case 2:
                    className = 'icon-music-danqu1'
                    break
                case 3:
                    className = 'icon-music-random'
                    break
                default:
                    className = ''
            }
            return className
        },
        musicCurrentLrc () {
            let currentMusic = this.$store.getters.getCurrentMusic
            let lrcIndex = this.$store.getters.getLyricIndex ? this.$store.getters.getLyricIndex : 0
            if (currentMusic.lyric.length) {
                return lrcIndex === -1 ? '加载中...' : currentMusic.lyric[lrcIndex].text
            } else {
                return '暂无歌词'
            }
        },
        lrcIndex () {
            return this.$store.getters.getLyricIndex ? this.$store.getters.getLyricIndex : 0
        }
    },
    watch: {
        isPlay: function (newisPlay, oldisPlay) {
            if (newisPlay !== true) {
                let imageTrans = getComputedStyle(this.$refs.cd).transform
                let contentTrans = getComputedStyle(this.$refs.cdcontent).transform
                this.$refs.cdcontent.style.transform = contentTrans === 'none' ? imageTrans : imageTrans.concat('', contentTrans)
            }
        },
        showCD: function (newisPlay, oldisPlay) {
            if (newisPlay !== true) {
                if (this.currentLrcIndex >= 0 && document.getElementsByClassName('musiclrc')[this.currentLrcIndex]) {
                    let height = this.$refs.lrc.offsetHeight
                    let top = document.getElementsByClassName('musiclrc')[this.currentLrcIndex].offsetTop
                    this.scrollTop = top - height / 2
                }
            }
        },
        lrcIndex: function (newisPlay, oldisPlay) {
            this.currentLrcIndex = newisPlay
            if (document.getElementsByClassName('musiclrc')[newisPlay]) {
                let height = this.$refs.lrc.offsetHeight
                let top = document.getElementsByClassName('musiclrc')[newisPlay].offsetTop
                this.scrollTop = top - height / 2
            }
        }
    },
    components: {
        'range': range
    },
    mounted () {
        let _this = this
        setInterval(function () {
            if (_this.currentLrcIndex >= 0 && document.getElementsByClassName('musiclrc')[_this.currentLrcIndex]) {
                let height = _this.$refs.lrc.offsetHeight
                let top = document.getElementsByClassName('musiclrc')[_this.currentLrcIndex].offsetTop
                _this.scrollTop = top - height / 2
            }
        }, 2000)
    }
    }
</script>