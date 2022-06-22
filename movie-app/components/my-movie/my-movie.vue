<template>
  <view class="mymovie-container">
    <view class="myui-panel">
      <view class="title">
        <!-- <h2>6月最火</h2> -->
        <slot name="movieTitle"></slot>
        <slot name="movieText"></slot>
      </view>
      <view class="panel-movie">
        <view class="panel-movieImg" v-for="item in receiveMovies" :key="item.id">
          <image :src="item.img"></image>
          <text>{{item.title}}</text>
        </view>
      </view>
    </view>
    <view class="fence"></view>
  </view>
</template>

<script>
  export default {
    name: "my-movie",
    data() {
      return {

      };
    },
    props: {
      receiveMovies: {
        type: Array,
        default: []
      }

      // // 六月最火
      // updateMovie: {
      //   type: Array,
      //   default: []
      // },
      // // 最新电影
      // movie: {
      //   type: Array,
      //   default: []
      // },
      // // 最新电视剧
      // tvDrama: {
      //   type: Array,
      //   default: []
      // },
      // // 最新动漫
      // cartoon: {
      //   type: Array,
      //   default: []
      // },
      // // 最新综艺
      // varietyShow: {
      //   type: Array,
      //   default: []
      // }
    },
  }
</script>

<style lang="scss">

</style>
