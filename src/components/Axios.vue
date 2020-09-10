<template>
  <div class="axios">
      hello wrold
  </div>
</template>

<script>
import Api from './../api/api';
export default {
    mounted(){
        this.getResource();
        this.postTest();
    },
    methods:{
        getResource(){
            Api.getVideo({id:23,organizationId:1}).then(res =>{
                console.log(res);
            })
        },
        postTest(){
            Api.getPost().then(res =>{
                console.log(res);
            })
        }
    }
}
</script>

<style>

</style>