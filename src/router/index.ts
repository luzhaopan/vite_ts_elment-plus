import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import EmptyLayout from '@/layout/components/EmptyLayout.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    meta: { title: 'Dashboard', icon: 'Odometer' },
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: 'Dashboard', icon: 'Odometer' }
      }
    ]
  },
  {
    path: '/excel',
    name: 'Excel',
    component: Layout,
    meta: { title: 'Excel', icon: 'Present' },
    children: [
      {
        path: '/excel/exportExcel',
        name: 'ExportExcel',
        component: () => import('@/views/excel/exportExcel/index.vue'),
        meta: { title: 'ExportExcel' }
      },
      {
        path: '/excel/exportMergeHeader',
        name: 'ExportMergeHeader',
        component: () => import('@/views/excel/exportMergeHeader/index.vue'),
        meta: { title: 'ExportMergeHeader' }
      },
      {
        path: '/excel/exportStyleExcel',
        name: 'ExportStyleExcel',
        component: () => import('@/views/excel/exportStyleExcel/index.vue'),
        meta: { title: 'ExportStyleExcel' }
      },
      {
        path: '/excel/uploadExcel',
        name: 'UploadExcel',
        component: () => import('@/views/excel/uploadExcel/index.vue'),
        meta: { title: 'UploadExcel' }
      },
      {
        path: '/excel/zip',
        name: 'Zip',
        component: () => import('@/views/excel/zip/index.vue'),
        meta: { title: 'Zip' }
      }
    ]
  },
  {
    path: '/echarts',
    name: 'Echarts',
    component: Layout,
    meta: { title: 'Echarts', icon: 'Present' },
    children: [
      {
        path: '/echarts/barEcharts',
        name: 'BarEcharts',
        component: () => import('@/views/echarts/barEcharts/index.vue'),
        meta: { title: 'BarEcharts' }
      },
      {
        path: '/echarts/radarEcharts',
        name: 'RadarEcharts',
        component: () => import('@/views/echarts/radarEcharts/index.vue'),
        meta: { title: 'RadarEcharts' }
      }
    ]
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'Present'
    },
    children: [
      {
        path: '/nested/menu1',
        component: () => import('@/views/nested/menu1/index.vue'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: '/nested/menu1/menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1/index.vue'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: '/nested/menu1/menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2/index.vue'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: '/nested/menu1/menu1-2/menu1-2-1',
                component: () =>
                  import('@/views/nested/menu1/menu1-2/menu1-2-1/index.vue'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              }
            ]
          },
          {
            path: '/nested/menu1/menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3/index.vue'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: '/nested/menu2',
        component: () => import('@/views/nested/menu2/index.vue'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },
  {
    path: '/error',
    component: EmptyLayout,
    name: 'Error',
    meta: { title: 'errorPage', icon: 'Brush' },
    children: [
      {
        path: '/error/401',
        name: 'Error401',
        component: () => import('@/views/401.vue'),
        meta: { title: '401' }
      },
      {
        path: '/error/404',
        name: 'Error404',
        component: () => import('@/views/404.vue'),
        meta: { title: '404' }
      }
    ]
  },
  {
    path: '/login',
    hidden: true,
    component: () => import('@/views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
