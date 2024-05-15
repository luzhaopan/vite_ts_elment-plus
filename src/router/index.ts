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
    path: '/guide',
    component: Layout,
    children: [
      {
        path: '/guide/index',
        name: 'Guide',
        component: () => import('@/views/guide/index.vue'),
        meta: { title: 'Guide', icon: 'Promotion' }
      }
    ]
  },
  {
    path: '/editor',
    component: Layout,
    children: [
      {
        path: '/editor/index',
        name: 'Editor',
        component: () => import('@/views/editor/index.vue'),
        meta: { title: 'Editor', icon: 'Edit' }
      }
    ]
  },
  {
    path: '/pyEditor',
    component: Layout,
    children: [
      {
        path: '/pyEditor/index',
        name: 'PyEditor',
        component: () => import('@/views/pyEditor/index.vue'),
        meta: { title: 'PyEditor', icon: 'Edit' }
      }
    ]
  },
  {
    path: '/download',
    name: 'Download',
    component: Layout,
    meta: { title: 'Download', icon: 'Download' },
    children: [
      {
        path: '/download/print/index',
        name: 'Print',
        component: () => import('@/views/download/print/index.vue'),
        meta: { title: 'Print', icon: 'Printer' }
      },
      {
        path: '/download/word/index',
        name: 'Word',
        component: () => import('@/views/download/word/index.vue'),
        meta: { title: 'Word', icon: 'Tickets' }
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
      },
      {
        path: '/excel/onlineEdit',
        name: 'OnlineEdit',
        component: () => import('@/views/excel/onlineEdit/index.vue'),
        meta: { title: 'OnlineEdit' }
      },
      {
        path: '/excel/pdf',
        name: 'Pdf',
        component: () => import('@/views/excel/pdf/index.vue'),
        meta: { title: 'Pdf' }
      }
    ]
  },
  {
    path: '/pdf/download',
    component: () => import('@/views/excel/pdf/download.vue'),
    hidden: true
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
      },
      {
        path: '/echarts/echartsDemo',
        name: 'EchartsDemo',
        component: () => import('@/views/echarts/echartsDemo/index.vue'),
        meta: { title: 'EchartsDemo' }
      }
    ]
  },
  {
    path: '/flowChart',
    name: 'FlowChart',
    component: Layout,
    meta: { title: 'FlowChart', icon: 'Dish' },
    children: [
      {
        path: '/flowChart/flowChart1',
        name: 'FlowChart1',
        component: () => import('@/views/flowChart/flowChart1.vue'),
        meta: { title: 'FlowChart1' }
      },
      {
        path: '/flowChart/flowChart2',
        name: 'FlowChart2',
        component: () => import('@/views/flowChart/flowChart2.vue'),
        meta: { title: 'FlowChart2' }
      }
    ]
  },
  {
    path: '/verify',
    name: 'Verify',
    component: Layout,
    meta: { title: 'Verify', icon: 'Unlock' },
    children: [
      {
        path: '/verify/sliderVerify',
        name: 'SliderVerify',
        component: () => import('@/views/verify/sliderVerify.vue'),
        meta: { title: 'SliderVerify' }
      }
    ]
  },
  {
    path: '/graph3D',
    name: 'Graph3D',
    component: Layout,
    meta: { title: 'Graph3D', icon: 'Unlock' },
    children: [
      {
        path: '/graph3D/graph3D',
        name: 'Graph3D',
        component: () => import('@/views/graph3D/graph3D.vue'),
        meta: { title: 'Graph3D' }
      },
      {
        path: '/graph3D/graphTest',
        name: 'graphTest',
        component: () => import('@/views/graph3D/graphTest.vue'),
        meta: { title: 'graphTest' }
      },
      {
        path: '/graph3D/materialNode',
        name: 'MaterialNode',
        component: () => import('@/views/graph3D/materialNode.vue'),
        meta: { title: 'MaterialNode' }
      }
    ]
  },
  {
    path: '/menuList',
    name: 'MenuList',
    component: Layout,
    meta: { title: 'MenuList', icon: 'Unlock' },
    children: [
      {
        path: '/menuList/sectorMenu',
        name: 'SectorMenu',
        component: () => import('@/views/menuList/SectorMenu.vue'),
        meta: { title: 'SectorMenu' }
      },
      {
        path: '/menuList/sectorMenu1',
        name: 'SectorMenu1',
        component: () => import('@/views/menuList/SectorMenu1.vue'),
        meta: { title: 'SectorMenu1' }
      },
      {
        path: '/menuList/sectorMenu2',
        name: 'SectorMenu2',
        component: () => import('@/views/menuList/SectorMenu2.vue'),
        meta: { title: 'SectorMenu2' }
      }
    ]
  },
  {
    path: '/relationGraph',
    name: 'Relation',
    component: Layout,
    meta: { title: 'Relation', icon: 'Dish' },
    children: [
      {
        path: '/relationGraph/index',
        name: 'RelationGraph',
        component: () => import('@/views/relationGraph/index.vue'),
        meta: { title: 'RelationGraph' }
      },
      {
        path: '/relationGraph/tableRelation',
        name: 'TableRelation',
        component: () => import('@/views/relationGraph/tableRelation.vue'),
        meta: { title: 'TableRelation' }
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
