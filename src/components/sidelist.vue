<template>
    <div class="sidelist">
        <i class="icon" :class="side_iconclass"></i>
        <span class="title">{{side_title}}</span>
        <span class="disc" v-show="showDisc">{{side_disc}}</span>
    </div>
</template>
<style scoped>
    /*在这里写css样式*/
    .sidelist {
        position: relative;
        height: 40px;
        line-height: 24px;
        padding: 0 15px;
    }
    .sidelist .icon {
        font-size: 16px;
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        color: #9a9a9a;
    }
    .sidelist .icon, .sidelist .title {
        display: inline-block;
        vertical-align: middle;
    }
    .sidelist .title {
        font-size: 14px;
        color: #333;
        /*height: 100%;*/
        /*margin-left: 30px;*/
        /*line-height: 40px;*/
        position: absolute;
        left: 45px;
        transform: translateY(-50%);
        top: 50%;
    }
    .sidelist .disc {
        font-weight: 400;
        color: #9c9c9c;
        font-size: 10px;
        vertical-align: middle;
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
			iconclass: {
				type: String,
				default: ''
			},
			sidetitle: {
				title: String,
				default: ''
			},
			disc: {
				title: String,
				default: ''
			}
		},
		data () {
			return {
				side_iconclass: this.iconclass,
				side_title: this.sidetitle,
				side_disc: this.disc
			}
		},
		computed: {
			showDisc () {
				return this.side_disc.length
			}
		},
		mounted () {
		}
	}
</script>