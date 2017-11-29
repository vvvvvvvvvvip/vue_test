<template>
    <div class="setColor">
        <div class="color-items">
            <span class="color-item" v-for="(item, $index) in colors" :style="{ backgroundColor: item[$index]}" @click="chooseColor(item[$index])">
                <span class="color-cycle" :class="'bg-color' + ($index + 1)"></span>
            </span>
        </div>
    </div>
</template>
<style scoped>
    /*在这里写css样式*/
.setColor {
    background-color: #fff;
    width: 100%;
    position: fixed;
    top: 50px;
    bottom: 46px;
    overflow: auto;
}
.color-items{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.color-item{
    width: 80px;
    height: 80px;
    display: inline-block;
    margin: 20px 0;
}
</style>
<script type="text/javascript-6">
import store from '../store'
// 这里写逻辑代码
export default {
		props: {
			item: {
				type: Object
			},
			index: {
				type: Number
			}
		},

		computed: {
			getUser () {
				return this.$store.getters.user
			},
		    colors () {
		        return this.$store.getters.getMusicAllList.colors
		    }
		},
		methods: {
		    chooseColor(color) {
		        this.$store.getters.getAllInfo.user.bg = color
		    },
		},
	}
</script>