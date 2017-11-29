<template>
    <div>
        <span class="split" ref="split"></span>
    </div>
</template>
<style scoped>
    /*在这里写css样式*/
    .split {
        display:block;
        width:100%;
    }
</style>
<script type="text/javascript-6"> 
// 这里写逻辑代码
export default {
		props: {
			height: {
				type: String,
				default: '10'
			},
			background: {
				type: String,
				default: '#f3f5f7'
			},
			border: {
				type: String,
				default: 'transparent'
			}
		},

		mounted () {
			this.$refs.split.style.background = this.background
			this.$refs.split.style.height = `${this.height}px`
			this.$refs.split.style.borderColor = this.border
		}
}
</script>