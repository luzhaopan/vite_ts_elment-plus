import { ToolsTypeEnum } from '../type/enums'
import { ITool } from '../type/flow'

export const tools: ITool[] = [
  {
    type: ToolsTypeEnum.DRAG,
    nodeName: '拖拽',
    icon: 'Rank'
  },
  {
    type: ToolsTypeEnum.CONNECTION,
    nodeName: '连线',
    icon: 'Share'
  }
]
