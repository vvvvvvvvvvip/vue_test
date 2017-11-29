<template>
    <div class="info">
        <div @click.stop="uploadHeadImg">
            ​<img class="avatar" :src=getInfo.src>
        </div>
        <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>

        <div class="btnBox">
            <button @click="confirm">save</button>
        </div>
    </div>
</template>
<style scoped>
    /*在这里写css样式*/
    .info {
        position: fixed;
        background: #fff;
        overflow: auto;
        top: 50px;
        bottom: 46px;
        left: 0;
        right: 0;
        z-index: -1;
        text-align: center;
    }

    .info img {
        margin: 20px auto 0;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        box-shadow: 1px 1px 10px 0 #ccc;
    }
    
    .hiddenInput {
        width: 0;
        display: block;
    }

    .btnBox {
        text-align: center;
        height: 40px;
        position: absolute;
        bottom: 30px;
        width: 100%;
    }

    button {
        height: 40px;
        position: absolute;
        bottom: 30px;
        width: 300px;
        transform: translateX(-50%);
        font-size: 18px;
    }

</style>
<script type="text/javascript-6">
import store from './../store'
// 这里写逻辑代码
export default {
   data(){
       return {
           getInfo: {
               src: this.$store.getters.getAllInfo.user.avatar,
           }
       }
   },
   methods: {
    confirm () {
      this.$store.getters.getAllInfo.user.avatar = localStorage.getItem('headImg')
    },
    handleFile (e) {
    var _this2 = this;
      //this.$bus.$emit('loading')
      let $target = e.target || e.srcElement
      let file = $target.files[0]
      var reader = new FileReader()
      reader.onload = (data) => {
      console.log(data)
        let res = data.target || data.srcElement
        let img = new Image()
        img.onload = () => {
          // 回调更新父组件数据
          this.saveImg(res.result).then(() => {
            // 本地实在太快了，为了让你们看到loading效果, 加个延时
            setTimeout(() => {
              //this.$bus.$emit('unload')
              this.getInfo.src = res.result
              //this.$emit('update-userinfo', {headUrl: res.result})
            }, 1500)
          })
        }
        img.src = res.result
      }
      reader.readAsDataURL(file)
    },
    // 打开图片上传
    uploadHeadImg () {
      this.$el.querySelector('.hiddenInput').click()
    },
    // 保存上传图片
    saveImg (dataUrl) {
      return this.axios.get('./static/api.json')
        .then((data) => {
          localStorage.setItem('headImg', dataUrl)
        })
        .catch((data) => {
          console.log(data)
          //this.$bus.$emit('unload')
        })
    }
  }
}
</script>