import HomePage from '../pages/HomePage.vue'
import DiscoveryPage from '../pages/DiscoveryPage.vue'
import UserPage from '../pages/UserPage.vue'
import SearchPage from '../pages/SearchPage.vue'
import UserData from '@/components/UserData.vue'

const routes = [
  { path: '/', title: '主页', component: HomePage },
  { path: '/discovery', title: '预约', component: DiscoveryPage },
  { path: '/user', title: '个人', component: UserPage },
  { path: '/search', title: '搜索', component: SearchPage },
  { path: '/userdata', title: '用户资料', component: UserData },
]

export default routes
