import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from '../components/ProductList.jsx';
import TabUi from '../components/TabUi.jsx';
import App from '../App.jsx';


// 라우터를 정의하는 Router객체 인스턴스를 생성
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
       {
      path: '/', // 라우팅 경로 설정
      element: <ProductList /> // 랜더링할 컴포넌트 지정
      },
      {
       path: '/test',
       element: <TabUi />
      }
    ]
  }
  
 
]);

function Router() {
  return <RouterProvider router={router} />
}

export default Router;