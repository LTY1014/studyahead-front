import HomePage from '../pages/HomePage.vue'
import DiscoveryPage from '../pages/DiscoveryPage.vue'
import UserPage from '../pages/UserPage.vue'
import UserData from '@/components/UserData.vue'

const routes = [
  { path: '/', title: '主页', component: HomePage },
  { path: '/discovery', title: '预约', component: DiscoveryPage },
  { path: '/user', title: '个人', component: UserPage },
  { path: '/userdata', title: '用户资料', component: UserData },
  { path: '/activity', title: '活动', component: () => import('@/components/Activity.vue') },
]

export default routes
