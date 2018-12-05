import NotFound from '../pages/404'
import Home from '../pages/home'

const routes = [
  {
    path: '/',
    components: Home,
    name: 'home',
    children: [
      {
        path: '/404',
        name: '404',
        component: NotFound
      }
    ]
  }
]

export default routes
