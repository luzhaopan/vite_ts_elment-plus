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
