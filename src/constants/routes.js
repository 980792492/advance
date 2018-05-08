import CityIndex from '../containers/city'
import CityPlanOne from '../containers/city/PlanOne'
import CityPlanTwo from '../containers/city/PlanTwo'
import CityPlanThree from '../containers/city/PlanThree'
import CityPlanFour from '../containers/city/PlanFour'


const routes = [
  {
    path: '/city/set',
    component: CityIndex
  },
  {
    path: '/city/set/one',
    component: CityPlanOne
  },
  {
    path: '/city/set/two',
    component: CityPlanTwo
  },
  {
    path: '/city/set/three',
    component: CityPlanThree
  },
  {
    path: '/city/set/four',
    component: CityPlanFour
  }
] 

export default routes