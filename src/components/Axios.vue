<template>
  <div class="axios">
      hello wrold
  </div>
</template>

<script>
export default {
    mounted(){
        this.getResource();
        this.postTest();
    },
    methods:{
        getResource(){
            this.$api.getVideo({id:23,organizationId:1}).then(res =>{
                console.log(res);
            })
        },
        postTest(){
            this.$api.getPost({userID:101,title:'post',body:'post hello world'}).then(res =>{
                console.log(res);
            })
        }
    }
}
</script>

<style>

</style>