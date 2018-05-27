<template>
    <div class="">
        <h1>{{title}}</h1>
        <h3>{{account}}</h3>
        <div>
          <button @click="counterAdd(1)">点我+1</button>
          <button @click="counterRedu(1)">点我-1</button>
          <button @click="httpAdd()">使用http 增加</button>
          <button @click="httpRedu()">使用http 减少</button>
        </div>
    </div>
</template>

<script>
   import * as types from '@/store/mutation-types'
   import counterSrv from '../api/counter'

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
           counterRedu(val){
             this.$store.commit(types.ACCOUNT_REDUCTIVE, val)
           },
           httpAdd(){
             //发起一个 mutations
             counterSrv.addCounter().then(res=>{
               const { data } = res
              this.$store.commit(types.ACCOUNT_ADD, data.number)
             })
           },
           httpRedu(){
            counterSrv.reduCounter().then(res=>{
              const { data } = res
              this.$store.commit(types.ACCOUNT_REDUCTIVE, data.number)
             })
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
