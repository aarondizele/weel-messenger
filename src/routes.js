import Main from '@/components/Main'


export const routes = [
  { path: '/', name: 'Main', component: Main },
  { path: '*', redirect: '/'}
]
