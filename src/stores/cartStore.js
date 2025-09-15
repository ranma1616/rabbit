// 封装购物车模块
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./user";
import { insertCartAPI, findNewCartListAPI, delCartAPI, mergeCartAPI } from "@/apis/cart";
export const useCartStore = defineStore('cart',()=>{
  const userStore = useUserStore()
  const isLogin = computed(()=> userStore.userInfo.token)
  // 1. 定义state - cardList
  const cartList = ref([])
  // 2. 定义action - addCart
  const addCart = async(goods)=>{
     if (isLogin.value) {
      console.log(isLogin);
      const {skuId, count} = goods
      await insertCartAPI({skuId,count})
      updateNewList()
     } else {
      // 添加购物车操作
      // 已添加过 count + 1
      const item = cartList.value.find((item) => goods.skuId === item.skuId)
      if (item) {
        item.count++
      } else {
        cartList.value.push(goods)
      }
     }
  }
  // 删除购物车
  const deleteCart = async(skuId) => {
    if (isLogin.value) {
      // 调用接口实现购物车中的删除功能
      await delCartAPI([skuId])
      updateNewList()
    } else {
      cartList.value = cartList.value.filter((item) => item.skuId != skuId)
    }
  }
  // 获取最新的购物车列表 action
  const updateNewList = async()=>{
    const res = await findNewCartListAPI()
    cartList.value = res.result
  }
  // 清除购物车
  const clearCart = ()=> {
    cartList.value = []
  }
  // 总数量
  const totalSum = computed(()=> cartList.value.reduce((a,c)=> a + c.count,0))
  // 总价格
  const totalPrice = computed(()=> cartList.value.reduce((a,c)=> a + c.count * c.price,0))
  // 已选数量
  const selectedSum = computed(() => cartList.value.filter(item => item.selected).reduce((a,c)=> a + c.count,0))
  // 已选总价格
  const selectedPrice = computed(()=> cartList.value.filter((item) => item.selected).reduce((a,c)=> a + c.count * c.price,0))
  // 单选功能
  const singleCheck = (skuId,selected)=>{
    // 修改对象
    const item = cartList.value.find((item)=> item.skuId == skuId)
    item.selected = selected
  }
  // isAll
  const isAll = computed(()=> cartList.value.every((item)=> item.selected)) 
  // 
  const allCheck = (selected)=>{
    // console.log(selected);
    cartList.value.forEach(item => item.selected = selected)
    // cartList.value.forEach(item => console.log(item.selected))
  }
  
  // 3. 返回数据
  return {
    cartList,
    totalPrice,
    totalSum,
    addCart,
    deleteCart,
    singleCheck,
    isAll,
    allCheck,
    selectedSum,
    selectedPrice,
    clearCart,
    updateNewList
  }
},
  {
    persist: true,
})