// 封装轮播图
import { onMounted, ref } from 'vue';
import { getBannerAPI } from '@/apis/home';
export function useBanner () {
  const bannerList = ref([])
  const getBanner = async()=>{
    const result = await getBannerAPI({
      distributionSite: '2'
    });
    bannerList.value = result.result
  }
  onMounted(()=>{
    getBanner()
  })

  return {
    bannerList
  }
}