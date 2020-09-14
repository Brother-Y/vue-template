<template>
  <div class="axios">
      <div>
          <p>hello wrold</p>
      </div>
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

<style lang="less" scoped>

@bg-color:yellow;
@width:3rem;
@height:@width + 1rem;

.bor{
    border: 1px solid skyblue;
}
#bundle(){ // 命名空间
    .size{
        font-size: 35px;
    }
}
#color(){ // 映射
    aqua: aqua;
    secondary: green;
}
div{
    background-color: @bg-color;
    width: @width;
    height: @height;
    .bor(); // 混入
    p{
        color: #color[secondary];
        #bundle.size();
    }
}
</style>