import Vue from 'vue'
import VRouter from 'vue-router'

Vue.use(VRouter)

export default new VRouter({

  routes:[
    {
      path:"/",redirect:'/index'
    },{
      path:'/index',
      component:resolve=>{require(['@/page/index'],resolve)}
    },{
      path:'/discovery',
      component:resolve=>{require(['@/page/discovery'],resolve)}
    },{
      path:'/order',
      component:resolve=>{require(['@/page/order'],resolve)}
    },{
      path:'/mine',
      component:resolve=>{require(['@/page/mine'],resolve)}
    },{
      path:"/shop/:idx",
      component:resolve=>{require(['@/page/shop'],resolve)}
    }

  ]

})
