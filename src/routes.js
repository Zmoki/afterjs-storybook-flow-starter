import Loader from './components/Loader'

import {asyncComponent} from '@jaredpalmer/after'

export default [
  {
    path: '/',
    exact: true,
    component: asyncComponent({
      loader: () => import('./pages/Home'), // required
      Placeholder: Loader, // this is optional, just returns null by default
    }),
  },
  {
    path: '/about',
    exact: true,
    component: asyncComponent({
      loader: () => import('./pages/About'), // required
      Placeholder: Loader, // this is optional, just returns null by default
    }),
  },
]
