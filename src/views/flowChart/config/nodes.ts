import {
  CommonNodeTypeEnum,
  HighNodeTypeEnum,
  LaneNodeTypeEnum
} from '../type/enums'
import { IElement } from '../type/flow'

export const commonNodes: IElement[] = [
  {
    type: CommonNodeTypeEnum.START,
    nodeName: '开始',
    icon: 'VideoPlay'
  },
  {
    type: CommonNodeTypeEnum.COMMON,
    nodeName: '人工节点',
    icon: 'User'
  },
  {
    type: CommonNodeTypeEnum.FREEDOM,
    nodeName: '自动节点',
    icon: 'RefreshRight'
  },
  {
    type: CommonNodeTypeEnum.GATEWAY,
    nodeName: '网关',
    icon: 'FullScreen'
  },
  {
    type: CommonNodeTypeEnum.EVENT,
    nodeName: '事件',
    icon: 'Edit'
  },
  {
    type: CommonNodeTypeEnum.END,
    nodeName: '结束',
    icon: 'Files'
  }
]

export const highNodes: IElement[] = [
  {
    type: HighNodeTypeEnum.CHILD_FLOW,
    nodeName: '子流程',
    icon: 'Cherry'
  }
]

export const laneNodes: IElement[] = [
  {
    type: LaneNodeTypeEnum.X_LANE,
    nodeName: '横向泳道',
    icon: 'Smoking'
  },
  {
    type: LaneNodeTypeEnum.Y_LANE,
    nodeName: '纵向泳道',
    icon: 'IceCreamSquare'
  }
]

export const flowData2 = {
  nodeList: [
    {
      type: 'freedom',
      id: 'b4dcbf46-0207-97e5-bd07-2f748ee1af36',
      nodeName: '焊接电雷管',
      height: 50,
      width: 120,
      x: 22,
      y: 75
    },
    {
      type: 'freedom',
      id: 'c0a8f5cf-5817-9ef8-97b3-f74bbdf6670b',
      nodeName: '套雷电管热缩管',
      height: 50,
      width: 120,
      x: 197,
      y: 73
    },
    {
      type: 'freedom',
      id: '2186cd30-a277-cbe2-9a9d-54d8372155ca',
      nodeName: '检验电雷管部件',
      height: 50,
      width: 120,
      x: 367,
      y: 74
    },
    {
      type: 'freedom',
      id: '46ca8853-ef7c-3132-3f2d-2fecbd460c01',
      nodeName: '铆导爆管',
      height: 50,
      width: 120,
      x: 353,
      y: 17
    },
    {
      type: 'freedom',
      id: '72043ce9-bddd-0877-ba0c-1da6ca1d81d7',
      nodeName: '检验铆接牢固性及锁定销稳定性',
      height: 50,
      width: 120,
      x: 588,
      y: 16
    },
    {
      type: 'freedom',
      id: '1e49e32d-638d-be81-001e-814812303a2f',
      nodeName: '焊火拔引线',
      height: 50,
      width: 120,
      x: 1949,
      y: 24
    },
    {
      type: 'freedom',
      id: '06a7e7f6-dcb3-774b-f990-0cafd036c9d5',
      nodeName: '套火药拔销器热缩管',
      height: 50,
      width: 120,
      x: 2141,
      y: 19
    },
    {
      type: 'freedom',
      id: 'c7997dff-7c8b-eddf-7358-7d3bd11e1c49',
      nodeName: '检验火药拔销器',
      height: 50,
      width: 120,
      x: 2314,
      y: 23
    },
    {
      type: 'freedom',
      id: 'a0ffbdbe-8c4b-2343-d291-e54cf5391cbc',
      nodeName: '装电雷管部件',
      height: 50,
      width: 120,
      x: 588,
      y: 72
    },
    {
      type: 'freedom',
      id: '17289782-a096-633f-1dcf-87ad6869d11e',
      nodeName: '装转子部件',
      height: 50,
      width: 120,
      x: 764,
      y: 70
    },
    {
      type: 'freedom',
      id: '98c16f34-f4d0-ef92-29c0-0fef2646599b',
      nodeName: '装下盖板',
      height: 50,
      width: 120,
      x: 947,
      y: 75
    },
    {
      type: 'freedom',
      id: '8dc7b3a1-cab8-9112-3c02-3415507bf030',
      nodeName: '装状态检测开关部件',
      height: 50,
      width: 120,
      x: 1119,
      y: 80
    },
    {
      type: 'freedom',
      id: 'b119d071-0a30-c4bf-5447-6bab6d55e502',
      nodeName: '装电磁拔销器部件',
      height: 50,
      width: 120,
      x: 1286,
      y: 80
    },
    {
      type: 'freedom',
      id: 'e1689c53-cd8b-cb1c-48a9-38390863da6b',
      nodeName: '转子灵活性测试',
      height: 50,
      width: 120,
      x: 1448,
      y: 81
    },
    {
      type: 'freedom',
      id: 'c12cb682-23dd-0358-da11-b39715e5b056',
      nodeName: '测试转子灵活性（所检）',
      height: 50,
      width: 120,
      x: 1616,
      y: 85
    },
    {
      type: 'freedom',
      id: '51ba2dd1-a778-ad11-78dc-a45356ee78a3',
      nodeName: '测试转子灵活性（军检）',
      height: 50,
      width: 120,
      x: 1803,
      y: 86
    },
    {
      type: 'freedom',
      id: '7e7e1f64-754b-421b-933b-fb47e3dbbe3a',
      nodeName: '装自毁电路',
      height: 50,
      width: 120,
      x: 1959,
      y: 84
    },
    {
      type: 'freedom',
      id: '17315f1c-9ff8-5d64-7d3d-c45b30d9f193',
      nodeName: '填胶',
      height: 50,
      width: 120,
      x: 2150,
      y: 84
    },
    {
      type: 'freedom',
      id: 'cdb9ba62-2572-fe9a-35ab-e9f049190ae4',
      nodeName: '装上盖板',
      height: 50,
      width: 120,
      x: 2339,
      y: 85
    },
    {
      type: 'freedom',
      id: '69439e77-f619-6865-4ca4-052e1ddae629',
      nodeName: '装火药拔销器部件',
      height: 50,
      width: 120,
      x: 2540,
      y: 86
    },
    {
      type: 'freedom',
      id: '81bd764c-1a3e-aeab-6c8e-bcf3a94e74a0',
      nodeName: '电性能检测',
      height: 50,
      width: 120,
      x: 2549,
      y: 154
    },
    {
      type: 'freedom',
      id: 'e830ca20-8ee6-3bcc-b0c2-c5321420da5f',
      nodeName: '对接S&A机构组件',
      height: 50,
      width: 120,
      x: 2361,
      y: 159
    },
    {
      type: 'freedom',
      id: '06592fce-01b2-202e-3205-3aab8151793e',
      nodeName: '焊接正确性和多余物检查',
      height: 50,
      width: 120,
      x: 2149,
      y: 165
    },
    {
      type: 'freedom',
      id: '45c777a6-4fe3-3974-bf54-4b47cb00aeab',
      nodeName: '焊接安控电路和起爆控制电路引线',
      height: 50,
      width: 120,
      x: 1982,
      y: 163
    },
    {
      type: 'freedom',
      id: '319c9005-3804-92be-2894-aa0329c92bfe',
      nodeName: '焊接电连接器',
      height: 50,
      width: 120,
      x: 1801,
      y: 161
    },
    {
      type: 'freedom',
      id: '64114de2-3e9b-c431-f33b-7ca2778a0ccb',
      nodeName: '检测',
      height: 50,
      width: 120,
      x: 1611,
      y: 148
    },
    {
      type: 'freedom',
      id: '06126083-b4c0-9f8a-aece-2f6c881fc58e',
      nodeName: '装配电连接器座体和电连接器',
      height: 50,
      width: 120,
      x: 1449,
      y: 146
    },
    {
      type: 'freedom',
      id: '2e3a471a-b1b7-a06c-d3f0-626bebcf9319',
      nodeName: '灌胶前检测',
      height: 50,
      width: 120,
      x: 1280,
      y: 145
    },
    {
      type: 'freedom',
      id: '5e1cd346-41a8-c5d0-fab4-10ce49af854c',
      nodeName: '灌胶',
      height: 50,
      width: 120,
      x: 1108,
      y: 150
    },
    {
      type: 'freedom',
      id: '6dee7a33-89fb-8f78-07ed-68b828a2a96b',
      nodeName: '灌胶后检测',
      height: 50,
      width: 120,
      x: 945,
      y: 144
    },
    {
      type: 'freedom',
      id: '6466f57e-5be0-3a5f-e1d1-c109844a3771',
      nodeName: '装配正确性检测',
      height: 50,
      width: 120,
      x: 766,
      y: 139
    },
    {
      type: 'freedom',
      id: '6760067c-f126-ee37-f692-e064f8867cba',
      nodeName: '装盖板',
      height: 50,
      width: 120,
      x: 588,
      y: 137
    },
    {
      type: 'freedom',
      id: '416b29e3-c24a-305b-6318-6798b7b51c23',
      nodeName: '安全性检查',
      height: 50,
      width: 120,
      x: 377,
      y: 135
    },
    {
      type: 'freedom',
      id: 'c3b9181f-a3a0-48a7-a3b7-1c068b50dfa2',
      nodeName: '装滤波器',
      height: 50,
      width: 120,
      x: 200,
      y: 137
    },
    {
      type: 'freedom',
      id: '1434357d-83cd-423b-f191-0ea4353b3e2d',
      nodeName: '整机测试',
      height: 50,
      width: 120,
      x: 11,
      y: 136
    },
    {
      type: 'freedom',
      id: 'b9b4187a-d885-9f42-01f8-b98cdaa82bfd',
      nodeName: '整机筛选',
      height: 50,
      width: 120,
      x: 15,
      y: 200
    },
    {
      type: 'freedom',
      id: '3b1d0e4b-fffe-af3e-202c-76507d1fb6a8',
      nodeName: '自检',
      height: 50,
      width: 120,
      x: 199,
      y: 200
    },
    {
      type: 'freedom',
      id: '7af6be51-f8ca-4209-a6bf-a06e02b2efd6',
      nodeName: '电性能检测',
      height: 50,
      width: 120,
      x: 390,
      y: 196
    },
    {
      type: 'freedom',
      id: 'aa5913c5-81ac-6a6b-e121-d56a7100815f',
      nodeName: '装传爆管',
      height: 50,
      width: 120,
      x: 583,
      y: 198
    },
    {
      type: 'freedom',
      id: '3cba44fa-f8a3-5599-795b-272b7c7c667e',
      nodeName: '军检',
      height: 50,
      width: 120,
      x: 763,
      y: 195
    },
    {
      type: 'freedom',
      id: '333a7612-c590-5ead-b75d-fb825d24dde3',
      nodeName: '包装',
      height: 50,
      width: 120,
      x: 943,
      y: 201
    },
    {
      type: 'freedom',
      id: '7ae02bbe-db8d-e7e3-bb11-a46183ef2e1a',
      nodeName: '气密性检测',
      height: 50,
      width: 120,
      x: 1122,
      y: 208
    },
    {
      type: 'freedom',
      id: '999430a5-a123-7286-6f06-940776513990',
      nodeName: '装箱',
      height: 50,
      width: 120,
      x: 1293,
      y: 204
    }
  ],
  linkList: [
    {
      type: 'link',
      id: 'link-b4dcbf46-0207-97e5-bd07-2f748ee1af36',
      sourceId: 'b4dcbf46-0207-97e5-bd07-2f748ee1af36',
      targetId: 'c0a8f5cf-5817-9ef8-97b3-f74bbdf6670b',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-c0a8f5cf-5817-9ef8-97b3-f74bbdf6670b',
      sourceId: 'c0a8f5cf-5817-9ef8-97b3-f74bbdf6670b',
      targetId: '2186cd30-a277-cbe2-9a9d-54d8372155ca',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-2186cd30-a277-cbe2-9a9d-54d8372155ca',
      sourceId: '2186cd30-a277-cbe2-9a9d-54d8372155ca',
      targetId: 'a0ffbdbe-8c4b-2343-d291-e54cf5391cbc',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-46ca8853-ef7c-3132-3f2d-2fecbd460c01',
      sourceId: '46ca8853-ef7c-3132-3f2d-2fecbd460c01',
      targetId: '72043ce9-bddd-0877-ba0c-1da6ca1d81d7',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-72043ce9-bddd-0877-ba0c-1da6ca1d81d7',
      sourceId: '72043ce9-bddd-0877-ba0c-1da6ca1d81d7',
      targetId: '17289782-a096-633f-1dcf-87ad6869d11e',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-1e49e32d-638d-be81-001e-814812303a2f',
      sourceId: 'a0ffbdbe-8c4b-2343-d291-e54cf5391cbc',
      targetId: '17289782-a096-633f-1dcf-87ad6869d11e',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-06a7e7f6-dcb3-774b-f990-0cafd036c9d5',
      sourceId: '17289782-a096-633f-1dcf-87ad6869d11e',
      targetId: '98c16f34-f4d0-ef92-29c0-0fef2646599b',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-c7997dff-7c8b-eddf-7358-7d3bd11e1c49',
      sourceId: '98c16f34-f4d0-ef92-29c0-0fef2646599b',
      targetId: '8dc7b3a1-cab8-9112-3c02-3415507bf030',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-a0ffbdbe-8c4b-2343-d291-e54cf5391cbc',
      sourceId: '8dc7b3a1-cab8-9112-3c02-3415507bf030',
      targetId: 'b119d071-0a30-c4bf-5447-6bab6d55e502',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-17289782-a096-633f-1dcf-87ad6869d11e',
      sourceId: 'b119d071-0a30-c4bf-5447-6bab6d55e502',
      targetId: 'e1689c53-cd8b-cb1c-48a9-38390863da6b',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-98c16f34-f4d0-ef92-29c0-0fef2646599b',
      sourceId: 'e1689c53-cd8b-cb1c-48a9-38390863da6b',
      targetId: 'c12cb682-23dd-0358-da11-b39715e5b056',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-8dc7b3a1-cab8-9112-3c02-3415507bf030',
      sourceId: 'c12cb682-23dd-0358-da11-b39715e5b056',
      targetId: '51ba2dd1-a778-ad11-78dc-a45356ee78a3',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-b119d071-0a30-c4bf-5447-6bab6d55e502',
      sourceId: '51ba2dd1-a778-ad11-78dc-a45356ee78a3',
      targetId: '7e7e1f64-754b-421b-933b-fb47e3dbbe3a',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-e1689c53-cd8b-cb1c-48a9-38390863da6b',
      sourceId: '1e49e32d-638d-be81-001e-814812303a2f',
      targetId: '06a7e7f6-dcb3-774b-f990-0cafd036c9d5',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-c12cb682-23dd-0358-da11-b39715e5b056',
      sourceId: '06a7e7f6-dcb3-774b-f990-0cafd036c9d5',
      targetId: 'c7997dff-7c8b-eddf-7358-7d3bd11e1c49',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-51ba2dd1-a778-ad11-78dc-a45356ee78a3',
      sourceId: '7e7e1f64-754b-421b-933b-fb47e3dbbe3a',
      targetId: '17315f1c-9ff8-5d64-7d3d-c45b30d9f193',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-7e7e1f64-754b-421b-933b-fb47e3dbbe3a',
      sourceId: '17315f1c-9ff8-5d64-7d3d-c45b30d9f193',
      targetId: 'cdb9ba62-2572-fe9a-35ab-e9f049190ae4',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-17315f1c-9ff8-5d64-7d3d-c45b30d9f193',
      sourceId: 'c7997dff-7c8b-eddf-7358-7d3bd11e1c49',
      targetId: '69439e77-f619-6865-4ca4-052e1ddae629',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-cdb9ba62-2572-fe9a-35ab-e9f049190ae4',
      sourceId: 'cdb9ba62-2572-fe9a-35ab-e9f049190ae4',
      targetId: '69439e77-f619-6865-4ca4-052e1ddae629',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-69439e77-f619-6865-4ca4-052e1ddae629',
      sourceId: '69439e77-f619-6865-4ca4-052e1ddae629',
      targetId: '81bd764c-1a3e-aeab-6c8e-bcf3a94e74a0',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-81bd764c-1a3e-aeab-6c8e-bcf3a94e74a0',
      sourceId: '81bd764c-1a3e-aeab-6c8e-bcf3a94e74a0',
      targetId: 'e830ca20-8ee6-3bcc-b0c2-c5321420da5f',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-e830ca20-8ee6-3bcc-b0c2-c5321420da5f',
      sourceId: 'e830ca20-8ee6-3bcc-b0c2-c5321420da5f',
      targetId: '06592fce-01b2-202e-3205-3aab8151793e',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-06592fce-01b2-202e-3205-3aab8151793e',
      sourceId: '06592fce-01b2-202e-3205-3aab8151793e',
      targetId: '45c777a6-4fe3-3974-bf54-4b47cb00aeab',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-45c777a6-4fe3-3974-bf54-4b47cb00aeab',
      sourceId: '45c777a6-4fe3-3974-bf54-4b47cb00aeab',
      targetId: '319c9005-3804-92be-2894-aa0329c92bfe',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-319c9005-3804-92be-2894-aa0329c92bfe',
      sourceId: '319c9005-3804-92be-2894-aa0329c92bfe',
      targetId: '64114de2-3e9b-c431-f33b-7ca2778a0ccb',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-64114de2-3e9b-c431-f33b-7ca2778a0ccb',
      sourceId: '64114de2-3e9b-c431-f33b-7ca2778a0ccb',
      targetId: '06126083-b4c0-9f8a-aece-2f6c881fc58e',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-06126083-b4c0-9f8a-aece-2f6c881fc58e',
      sourceId: '06126083-b4c0-9f8a-aece-2f6c881fc58e',
      targetId: '2e3a471a-b1b7-a06c-d3f0-626bebcf9319',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-2e3a471a-b1b7-a06c-d3f0-626bebcf9319',
      sourceId: '2e3a471a-b1b7-a06c-d3f0-626bebcf9319',
      targetId: '5e1cd346-41a8-c5d0-fab4-10ce49af854c',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-5e1cd346-41a8-c5d0-fab4-10ce49af854c',
      sourceId: '5e1cd346-41a8-c5d0-fab4-10ce49af854c',
      targetId: '6dee7a33-89fb-8f78-07ed-68b828a2a96b',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-6dee7a33-89fb-8f78-07ed-68b828a2a96b',
      sourceId: '6dee7a33-89fb-8f78-07ed-68b828a2a96b',
      targetId: '6466f57e-5be0-3a5f-e1d1-c109844a3771',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-6466f57e-5be0-3a5f-e1d1-c109844a3771',
      sourceId: '6466f57e-5be0-3a5f-e1d1-c109844a3771',
      targetId: '6760067c-f126-ee37-f692-e064f8867cba',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-6760067c-f126-ee37-f692-e064f8867cba',
      sourceId: '6760067c-f126-ee37-f692-e064f8867cba',
      targetId: '416b29e3-c24a-305b-6318-6798b7b51c23',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-416b29e3-c24a-305b-6318-6798b7b51c23',
      sourceId: '416b29e3-c24a-305b-6318-6798b7b51c23',
      targetId: 'c3b9181f-a3a0-48a7-a3b7-1c068b50dfa2',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-c3b9181f-a3a0-48a7-a3b7-1c068b50dfa2',
      sourceId: 'c3b9181f-a3a0-48a7-a3b7-1c068b50dfa2',
      targetId: '1434357d-83cd-423b-f191-0ea4353b3e2d',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-1434357d-83cd-423b-f191-0ea4353b3e2d',
      sourceId: '1434357d-83cd-423b-f191-0ea4353b3e2d',
      targetId: 'b9b4187a-d885-9f42-01f8-b98cdaa82bfd',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-b9b4187a-d885-9f42-01f8-b98cdaa82bfd',
      sourceId: 'b9b4187a-d885-9f42-01f8-b98cdaa82bfd',
      targetId: '3b1d0e4b-fffe-af3e-202c-76507d1fb6a8',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-3b1d0e4b-fffe-af3e-202c-76507d1fb6a8',
      sourceId: '3b1d0e4b-fffe-af3e-202c-76507d1fb6a8',
      targetId: '7af6be51-f8ca-4209-a6bf-a06e02b2efd6',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-7af6be51-f8ca-4209-a6bf-a06e02b2efd6',
      sourceId: '7af6be51-f8ca-4209-a6bf-a06e02b2efd6',
      targetId: 'aa5913c5-81ac-6a6b-e121-d56a7100815f',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-aa5913c5-81ac-6a6b-e121-d56a7100815f',
      sourceId: 'aa5913c5-81ac-6a6b-e121-d56a7100815f',
      targetId: '3cba44fa-f8a3-5599-795b-272b7c7c667e',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-3cba44fa-f8a3-5599-795b-272b7c7c667e',
      sourceId: '3cba44fa-f8a3-5599-795b-272b7c7c667e',
      targetId: '333a7612-c590-5ead-b75d-fb825d24dde3',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-333a7612-c590-5ead-b75d-fb825d24dde3',
      sourceId: '333a7612-c590-5ead-b75d-fb825d24dde3',
      targetId: '7ae02bbe-db8d-e7e3-bb11-a46183ef2e1a',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-7ae02bbe-db8d-e7e3-bb11-a46183ef2e1a',
      sourceId: '7ae02bbe-db8d-e7e3-bb11-a46183ef2e1a',
      targetId: '999430a5-a123-7286-6f06-940776513990',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-999430a5-a123-7286-6f06-940776513990',
      sourceId: '5e3ce738-13af-7f67-033f-cb65c285d712',
      targetId: '46ca8853-ef7c-3132-3f2d-2fecbd460c01',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    }
  ],
  attr: {
    id: '0ce25c75-998e-41c3-80a4-622c6a83d13e'
  },
  config: {
    showGrid: true,
    showGridText: '隐藏网格',
    showGridIcon: 'EyeOutlined'
  },
  status: '1'
}

export const flowData1 = {
  nodeList: [
    {
      type: 'freedom',
      nodeName: '自动节点',
      icon: 'SyncOutlined',
      id: 'freedom-aa2e99b20db04ec78ad61e02387c6f1d',
      height: 50,
      x: 260,
      width: 120,
      y: 95
    },
    {
      type: 'gateway',
      nodeName: '网关',
      icon: 'GatewayOutlined',
      id: 'gateway-1224bef156944f0ab57d62e7dabdeaa1',
      height: 50,
      x: 650,
      width: 50,
      y: 115
    },
    {
      type: 'freedom',
      nodeName: '自动节点',
      icon: 'SyncOutlined',
      id: 'freedom-a2894d7dd0c34820bf7e1a7480b32b7d',
      height: 50,
      x: 495,
      width: 120,
      y: 255
    },
    {
      type: 'start',
      nodeName: '开始',
      icon: 'PlayCircleOutlined',
      id: 'start-a2a15e49e30441f38d0e7994d49f3447',
      height: 50,
      x: 1025,
      width: 50,
      y: 130
    }
  ],
  linkList: [
    {
      type: 'link',
      id: 'link-6de12d242b714ceb98093a2c97e1101c',
      sourceId: 'freedom-aa2e99b20db04ec78ad61e02387c6f1d',
      targetId: 'gateway-1224bef156944f0ab57d62e7dabdeaa1',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-d03022e4822243a282796f269e0bd1a9',
      sourceId: 'gateway-1224bef156944f0ab57d62e7dabdeaa1',
      targetId: 'start-a2a15e49e30441f38d0e7994d49f3447',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    },
    {
      type: 'link',
      id: 'link-ea40371f73e6448db5a5ef4ae123cf87',
      sourceId: 'gateway-1224bef156944f0ab57d62e7dabdeaa1',
      targetId: 'freedom-a2894d7dd0c34820bf7e1a7480b32b7d',
      label: '',
      cls: {
        linkType: 'Flowchart',
        linkColor: '#2a2929',
        linkThickness: 2
      }
    }
  ],
  attr: {
    id: 'flow-cf843840f1bf4137b0f0cd0cb3dcb9ae'
  },
  config: {
    showGrid: true,
    showGridText: '隐藏网格',
    showGridIcon: 'EyeOutlined'
  },
  status: '1'
}
