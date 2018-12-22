<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="userinfo">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="(hi||'')+ (userInfo.nickName||'')"></card>
      </div>
    </div>

    打算叫什么外卖呢，点击随机进行选择吧

    <button bindtap="setLoading" :size="'default'" @click="gotoCheck" :disabled="isLoading" :loading="isLoading">随机筛选</button>
    <button bindtap="setLoading" @click="goFoodMenu">查看菜品</button>
  </div>
</template>

<script>
import card from "@/components/card"
import {getService} from '../../common/service'
export default {
  data() {
    return {
      hi:this.getNowTime()+'好',
      userInfo: {},
      isLoading:false
    };
  },

  components: {
    card
  },

  methods: {
    gotoCheck(){
      this.isLoading = true
      setTimeout(()=>{
        this.isLoading = false
      },3000)
    },
    getNowTime() {
      let hour = new Date().getHours();
      let msg = "";
      if (hour >= 0 && hour <= 9) msg = " 早上 "
      else if (hour > 9 && hour <= 12) msg = "上午"
      else if (hour > 12 && hour <= 14) msg = "中午"
      else if (hour > 14 && hour <= 18) msg = "下午"
      else if (hour > 18 && hour <= 24) msg = "晚上"
      else msg = "你"

      return msg
    },
    goFoodMenu() {
      const url = "../foodList/main"
      wx.navigateTo({ url })
    },
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo
            }
          });
        }
      });
    },
    clickHandle(msg, ev) {
      console.log("clickHandle:", msg, ev)
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
};
</script>

<style scoped>
.userinfo {
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  position: absolute;
  top: 0;
}

.userinfo-avatar {
  width: 60rpx;
  height: 60rpx;
  margin: 20rpx;
  border-radius: 50%;
  border: 1rpx solid grey;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
