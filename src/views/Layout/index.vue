
<template>
  <LayoutFixed/>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>

<script setup>
import { useCategoryStore } from '@/stores/category'
import { RouterView } from 'vue-router'
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import { onMounted } from 'vue'
const categoryStore = useCategoryStore()
onMounted(()=>{
  categoryStore.getCategory()
})
</script>