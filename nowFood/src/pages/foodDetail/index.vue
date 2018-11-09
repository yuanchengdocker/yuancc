<template>
  <div class="weui-article">
    <div class="weui-article__h1 title-opt">
      <span> 大标题</span>
      <div class="opt">
        <Button size="mini" type="primary" @click="editeFood">编辑</Button>
        <Button size="mini" type="primary" @click="deleteFood">删除</Button>
      </div>
    </div>
    <div class="weui-article__section">
      <div class="weui-article__title">章标题</div>
      <div class="weui-article__section">
        <div class="weui-article__h3">1.1 节标题</div>
        <div class="weui-article__p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div class="weui-article__p">
          <image class="weui-article__img" src="../../../static/image/list-flag.png" mode="aspectFit" style="height: 180px" />
          <image class="weui-article__img" src="../../../static/image/list-flag.png" mode="aspectFit" style="height: 180px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    editeFood(){
      const url = "../foodEdit/main"
      wx.navigateTo({ url })
    },
    deleteFood(){}
  }
};
</script>

<style scoped>
.title-opt{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

