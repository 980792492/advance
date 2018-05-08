const MENU_CONF = {
  agentSeller: [
    {
      icon: '',
      name: '渠道代理',
      route: '/channel/anagent'
    }
  ],
  agentSellerManager: [
    {
      name: '渠道代理管理',
      route: '/channel/anagent/manager'
    }
],
  cityPlaner: [
    {
      icon: '',
      name: '城市策划',
      route: '/city/plan1'
    },
    {
      icon: '',
      name: '城市策划2',
      child: [
        {
          name: '城市策划2-1',
          route: '/city/plan2/one'
        }, {
          name: '城市策划2-2',
          route: '/city/plan2/two'
        }
      ]
    }
  ],
  cityPlanerManager: [
    {
      icon: '',
      name: '城市策划',
      route: '/city/set'
    },
    {
      icon: '',
      name: '城市策划管理',
      child: [
        {
          name: '城市安排1',
          route: '/city/set/one'
        },
        {
          name: '城市安排2',
          route: '/city/set/two'
        }
      ]
    }, {
      icon: '',
      name: '城市策划管理2',
      child: [
        {
          name: '城市安排3',
          route: '/city/set/three'
        },
        {
          name: '城市安排4',
          route: '/city/set/four'
        }
      ]
    }
  ]
}

export default MENU_CONF
  