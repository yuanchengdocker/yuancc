<template>
  <div class="weui-article">
    <input placeholder="请输入菜名"/>
    <div class="weui-uploader__bd">
      <div
        class="weui-uploader__files"
        id="uploaderFiles"
      >
        <block
          v-for="item in files"
          :key="index"
        >
          <div
            class="weui-uploader__file"
            @click="predivImage"
            :id="item"
          >
            <image
              class="weui-uploader__img"
              :src="item"
              mode="aspectFill"
            />
          </div>
        </block>
      </div>
      <div class="weui-uploader__input-box">
        <div
          class="weui-uploader__input"
          @click="chooseImage"
        ></div>
      </div>
    </div>

    <Button type="primary" @click="saveFood">保存</Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: []
    };
  },
  computed: {},
  methods: {
    editeFood() {},
    deleteFood() {},
    saveFood(){
      const url = "../foodList/main"
      wx.navigateTo({ url })
    },
    chooseImage(e) {
      var _this = this;
      wx.chooseImage({
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          console.log(res)
          _this.files = _this.files.concat(res.tempFilePaths)
        },
        fail: function () {
          console.log('fail');
        },
        complete: function () {
          console.log('commplete');
        }
      })
    },
    predivImage(e) {
      console.log(e);
      wx.previewImage({
        current: e.currentTarget.id, // 当前显示图片的http链接
        urls: this.files // 需要预览的图片http链接列表
      })
    }
  }
};
</script>

<style scoped>
.title-opt {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

