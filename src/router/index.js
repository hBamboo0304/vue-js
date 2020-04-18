import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import TileContents from '@/components/TileContents'
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
  // index.html(TOP画面) で使うcomponents配下のvueを読み込む
  /** routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ], */
  routes: [
    {
      path: '/',
      name: 'TileContents',
      component: TileContents
    },
    {
      path: '/',
      name: 'Footer',
      component: Footer
    }
  ]
})
