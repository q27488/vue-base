<template>
    <div class="">
        <h1>{{title}}</h1>
        <h3>{{account}}</h3>
        <div>
          <button @click="counterAdd(1)">点我+1</button>
          <button @click="counterRed(1)">点我-1</button>
        </div>
    </div>
</template>

<script>
   import * as types from '@/store/mutation-types'

    export default {
        data() {
            return {
                title: '这是计数器'
            }
        },
        computed:{
            account() {
              return this.$store.getters.account
            }
         },
         methods:{
           counterAdd(val){
             //发起一个 mutations
             this.$store.commit(types.ACCOUNT_ADD, val)
           },
           counterRed(val){
             this.$store.commit(types.ACCOUNT_REDUCTIVE, val)
           }
         }
    }
</script>

<style scoped lang="less">
  button{
    width: 120px;
    height: 32px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #fff;
    cursor: pointer;

    &:hover{
      background: #0ae;
      color: #fff;
    }
  }


</style>
