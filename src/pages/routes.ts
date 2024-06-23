export default [
  {
    path: '/some-page',
    name: 'some page',
    component:() => import('./SomePage.vue')
  },
  {
    path: '/other-page',
    name: 'other page',
    component:() => import('./OtherPage.vue')
  },
]
