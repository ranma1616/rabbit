import httpInstance from "@/utils/http";

export function getCategoryAPI(id) {
  return httpInstance({
    url: '/category',
    params: {
      id
    }
  })
}

export const getCategoryFilterAPI = (id)=>{
  return httpInstance({
    url:'/category/sub/filter',
    params:{
      id
    }
  })
}

// 获取导航数据
export const getSubCategoryAPI = (data)=>{
  return httpInstance({
    url:'/category/goods/temporary',
    method:'POST',
    data
  })
}

// 获取热点数据
export const fetchHotGoodsAPI = ({ id, type, limit = 3}) => {
  return httpInstance({
    url:'/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}