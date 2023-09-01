import { Config, driver } from 'driver.js'
import 'driver.js/dist/driver.css'

export const useGuide = (options?: Config) => {
  const driverObj = driver(
    options || {
      showProgress: true,
      nextBtnText: 'next',
      prevBtnText: 'prev',
      doneBtnText: 'done',
      steps: [
        {
          element: '#menu',
          popover: {
            title: '菜单',
            description: '以路由的结构渲染的菜单栏',
            side: 'right'
          }
        },
        {
          element: '#navbar',
          popover: {
            title: 'navbar',
            description: 'navbar',
            side: 'left'
          }
        }
      ]
    }
  )

  return {
    ...driverObj
  }
}
