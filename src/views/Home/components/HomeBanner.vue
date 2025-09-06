<template>
    <div class="home-banner">
      <el-carousel height="500px">
        <el-carousel-item v-for="item in bannerList" :key="item.id">
          <img :src="item.imgUrl" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getBannerAPI } from '@/apis/home';
const bannerList = ref([])
const getBanner = async()=>{
  const result = await getBannerAPI();
  bannerList.value = result.result
}
onMounted(()=>{
  getBanner()
})
</script>

<style scoped lang="scss">
  .home-banner {
    width: 1240px;
    height: 500px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 98;

    img {
      width: 100%;
      height: 500px;
    }
  }
</style>