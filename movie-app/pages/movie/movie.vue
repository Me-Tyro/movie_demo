<template>
  <view class="movie-container">
    <!-- 轮播图 -->
    <swiper :autoplay="true" :interval="3000" :duration="1000" :circular="true">
      <swiper-item v-for="item in objMovie.carouselList" :key='item.id'>
        <image :src="item.img"></image>
      </swiper-item>
    </swiper>

    <view class="fence"></view>
    <!-- 六月电影 -->
    <my-movie :receiveMovies="objMovie.updateMovie">
      <block #movieTitle>
        <h2>6月最火</h2>
      </block>
      <template #movieText>
        <view class="title-span">
          <text>今日更新:"666666"</text>
          <text>最近更新</text>
        </view>
      </template>
    </my-movie>
    <!-- 电影 -->
    <my-movie :receiveMovies="objMovie.movie">
      <block #movieTitle>
        <h2>最新电影</h2>
      </block>
    </my-movie>
    <!-- 电视剧 -->
    <my-movie :receiveMovies="objMovie.tvDrama">
      <block #movieTitle>
        <h2>最新电视剧</h2>
      </block>
    </my-movie>
    <!-- 动漫 -->
    <my-movie :receiveMovies="objMovie.cartoon">
      <block #movieTitle>
        <h2>最新动漫</h2>
      </block>
    </my-movie>
    <!-- 综艺 -->
    <my-movie :receiveMovies="objMovie.varietyShow">
      <block #movieTitle>
        <h2>最新综艺</h2>
      </block>
    </my-movie>

    <!-- 六月最火 -->
    <!-- <view class="myui-panel">
      <view class="title">
        <h2>6月最火</h2>
        <view class="title-span">
          <text>今日更新:"666666"</text>
          <text>最近更新</text>
        </view>
      </view>
      <view class="panel-movie">
        <view class="panel-movieImg" v-for="item in updateMovie" :key="item.id">
          <image :src="item.img"></image>
          <text>{{item.title}}</text>
        </view>
      </view>
    </view>
    <view class="fence"></view> -->

    <!-- 最新电影 -->
    <!-- <view class="myui-panel">
      <view class="title">
        <h2>最新电影</h2>
      </view>
      <view class="panel-movie">
        <view class="panel-movieImg" v-for="item in movie" :key="item.id">
          <image :src="item.img"></image>
          <text>{{item.title}}</text>
        </view>
      </view>
    </view>
    <view class="fence"></view> -->

    <!-- 最新电视剧 -->
    <!-- <view class="myui-panel">
      <view class="title">
        <h2>最新电视剧</h2>
      </view>
      <view class="panel-movie">
        <view class="panel-movieImg" v-for="item in tvDrama" :key="item.id">
          <image :src="item.img"></image>
          <text>{{item.title}}</text>
        </view>
      </view>
    </view>
    <view class="fence"></view> -->

    <!-- <view class="myui-panel">
      <view class="title">
        <h2>最新动漫</h2>
      </view>
      <view class="panel-movie">
        <view class="panel-movieImg" v-for="item in cartoon" :key="item.id">
          <image :src="item.img"></image>
          <text>{{item.title}}</text>
        </view>
      </view>
    </view>
    <view class="fence"></view> -->

    <!-- <view class="myui-panel">
      <view class="title">
        <h2>最新综艺</h2>
      </view>
      <view class="panel-movie">
        <view class="panel-movieImg" v-for="item in varietyShow" :key="item.id">
          <image :src="item.img"></image>
          <text>{{item.title}}</text>
        </view>
      </view>
    </view> -->
  </view>
</template>

<script>
  export default {
    data() {
      return {
        objMovie: {
          // 轮播图
          carouselList: [],
          // 六月
          updateMovie: [],
          // 电影
          movie: [],
          // 电视剧
          tvDrama: [],
          // 动漫
          cartoon: [],
          // 综艺
          varietyShow: [],
        }
      };
    },
    // 小程序中的生命周期 与 VUE 不同
    onLoad() {
      this.getCaroUsel()
      this.getupdateMovie()
      this.getMovie()
      this.getTvDrama()
      this.getCartoon()
      this.getVarietyShow()
    },
    methods: {
      getCaroUsel() {
        // 设置这个是因为 this 的指向问题
        const that = this
        uni.request({
          url: 'http://127.0.0.1:520/carousel',
          method: 'GET',
          success(res) {
            that.objMovie.carouselList = res.data
          }
        })
      },

      getupdateMovie() {
        const that = this
        uni.request({
          url: 'http://127.0.0.1:520/updatemovie',
          method: 'GET',
          success(res) {
            res.data.splice(res.data.length - 2)
            that.objMovie.updateMovie = res.data
          }
        })
      },

      getMovie() {
        const that = this
        uni.request({
          url: 'http://127.0.0.1:520/movie',
          method: 'GET',
          success(res) {
            that.objMovie.movie = res.data
          }
        })
      },

      getTvDrama() {
        const that = this
        uni.request({
          url: 'http://127.0.0.1:520/tvDrama',
          method: 'GET',
          success(res) {
            that.objMovie.tvDrama = res.data
          }
        })
      },

      getCartoon() {
        const that = this
        uni.request({
          url: 'http://127.0.0.1:520/cartoon',
          method: 'GET',
          success(res) {
            that.objMovie.cartoon = res.data
          }
        })
      },

      getVarietyShow() {
        const that = this
        uni.request({
          url: 'http://127.0.0.1:520/varietyshow',
          method: 'GET',
          success(res) {
            that.objMovie.varietyShow = res.data
            console.log(that.objMovie);
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .movie-container {
    background-color: #2B2A2A;

    swiper {
      height: 35vh;

      swiper-item,
      image {
        width: 100%;
        height: 100%;
      }

    }

    .fence {
      width: 100vw;
      height: 50rpx;
      background-color: #343434;
    }

    .myui-panel {
      padding: 10px;

      .title {
        display: flex;
        justify-content: space-between;

        h2 {
          color: #ffffff;
        }

        .title-span {
          color: #fff;

          text {
            margin-right: 20px;
            font-size: 8pt;
          }
        }

      }
    }

    .panel-movie {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 10px;

      .panel-movieImg {
        width: 30.3%;
        height: 300rpx;
        color: #fff;
        padding: 0 5px;
        margin-bottom: 7px;
        font-size: 10pt;

        image {
          width: 100%;
          height: 85%;
          border-radius: 8px;
        }

        text {
          display: block;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
</style>
