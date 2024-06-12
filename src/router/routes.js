
export default [
  {
    path: '/', // Change to the path you want to use
    component: () => import('layouts/MyLayout'),
    name: 'MyLayout',
    children: [
      {
        path: 'devices/:devices',
        component: () => import('layouts/MyLayout')
      }
    ]
  },
  { path: '/token/:token', component: () => import('pages/Login') },
  { path: '/login', component: () => import('pages/Login') },
  { path: '/login/:token', component: () => import('pages/Login') },
  { path: '/login/:token/devices/:devices', component: () => import('layouts/MyLayout') },

  // Always leave this last one
  { path: '*', component: () => import('pages/Error404') } // Not found
]
