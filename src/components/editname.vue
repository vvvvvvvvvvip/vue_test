<template>
    <div class="editname">
        ​<input type="text" :value=getInfo.name class="name" ref="input1"/>

        <div class="btnBox">
            <button @click="confirm">save</button>
        </div>
    </div>
</template>
<style scoped>
    /*在这里写css样式*/
    .editname {
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

    .name {
        width: 80%;
        height: 36px;
        font-size: 18px;
        text-align: center;
        border: 2px solid #ddd;
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
               name: this.$store.getters.getAllInfo.user.name
           }
       }
   },
   methods: {
    confirm () {
      this.$store.getters.getAllInfo.user.name = this.$refs.input1.value
    }
  }
}


</script>