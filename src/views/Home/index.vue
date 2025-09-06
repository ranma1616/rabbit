<template>
    <div class="container">
      <HomeCategory />
      <HomeBanner />
    </div>
    <HomeNew />
    <HomeHot />
    <homeProduct />
    <!-- 测试面板组件 -->
     <!-- <HomePanel title="新鲜好物" sub-title="新鲜好物">
        <div>
          我是新鲜好物插槽
        </div>
     </HomePanel>

      <HomePanel title="人气推荐" sub-title="人气好物">
        <div>
          我是人气推荐插槽
        </div>
      </HomePanel> -->
</template>

<script setup>
import HomeCategory from './components/HomeCategory.vue';
import HomeBanner from './components/HomeBanner.vue';
import HomeNew from './components/HomeNew.vue';
import HomeHot from './components/HomeHot.vue';
import HomeProduct from './components/HomeProduct.vue';

</script>
<style scoped>
</style>