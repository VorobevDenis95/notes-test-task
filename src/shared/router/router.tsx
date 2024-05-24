import {createBrowserRouter} from 'react-router-dom'
import Main from '../../pages/Main'
import Root from '../../pages/Root'
import Error from '../../pages/Error'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [{
      path: '/',
      element: <Main/>,
    }]
  }
])