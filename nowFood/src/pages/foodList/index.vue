<template>
  <div>
    <div class="weui-cells__title">
      <span>如下為已存在菜單（或店名）</span>
    </div>
    <div class="weui-cells weui-cells_after-title">
        <navigator url="/pages/foodDetail/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__hd">
            <image :src="icon" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
          </div>
          <div class="weui-cell__bd">cell standard</div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </navigator>
        <navigator url="/pages/foodDetail/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__hd">
            <image :src="icon" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
          </div>
          <div class="weui-cell__bd">cell standard</div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </navigator>
    </div>
    <div class="weui-footer weui-footer_fixed-bottom">
      <div class="weui-footer__links">
        <button bindtap="setLoading" @click="goFoodMenu">新增菜品</button>
      </div>
      </div>
  </div>
</template>

<script>
// Use Vuex
import store from "./store";

export default {
  data() {
    return {
      icon: require("../../../static/image/list-flag.png")
    };
  },
  computed: {
    count() {
      return store.state.count;
    }
  },
  methods: {
    increment() {
      store.commit("increment");
    },
    decrement() {
      store.commit("decrement");
    }
  }
};
</script>

<style>
</style>
