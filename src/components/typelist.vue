<template>
    <div class="typelist" :style="{background:typelistbg}">
        <i class="info" :class="iconinfo"></i>
        <div class="typelist-detail">
            <span class="name">{{listName}}</span>
            <span class="count" v-show="showCount">({{listCount}})</span>
            <i v-if="isPlaying" class="isPlaying icon-volume-medium"></i>
        </div>
    </div>
</template>
<style scoped>
    /*在这里写css样式*/
    .typelist {
        height: 50px;
        position: relative;
    }
    .typelist .info {
        position: absolute;
        top: 50%;
        left: 15px;
        transform: translateY(-50%);
        font-size: 20px;
        color: #c62f2f;
    }
    .typelist .typelist-detail {
        margin-left: 50px;
        height: 100%;
        line-height: 50px;
    }
    .typelist .typelist-detail span {
        font-size: 16px;
        vertical-align: top;
    }
    .typelist .typelist-detail i {
        color: #c62f2f;
        font-size: 16px;
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
    }
</style>
<script type="text/javascript-6">
// 这里写逻辑代码
export default {
    props: {
        name: {
            type: String,
            default: '摩羯标致'
        },
        count: {
            type: String,
            default: '1'
        },
       // hasBorder: {
        //    type: Boolean,
         //   default: true
       // },
        playing: {
           type: Boolean,
           default: false
        },
        iconinfo: {
            type: String
        },
        bgcolor: {
            type: String,
            default: '#fff'
        }
    },
	data () {
		return {
			listName: '',
			listCount: '0',
			//showBorder: true,
			isPlaying: false,
			iconInfo: '',
			typelistbg: ''
		}
	},
	computed: {
		showCount () {
			return this.count !== 'none'
		}
	},
    created (){
        this.listName = this.name
        this.listCount = this.count
       // this.showBorder = this.hasBorder
        this.isPlaying = this.playing
        this.iconInfo = this.iconinfo
        this.typelistbg = this.bgcolor
    }
}
</script>