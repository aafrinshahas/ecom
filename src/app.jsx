


import { Route, Routes } from 'react-router-dom';
import HomePage from "./assets/components/Homepage";
import DashboardContextProvider from "./assets/context/DashboardContextProvider";
import Ecomm from './assets/components/Ecomm';
import Dashboard from './assets/layouts/Dashboard';
import Order from './assets/layouts/Order';

function App() {

  return (
    <div>
      <DashboardContextProvider>
      
<Routes>
  <Route path="/" element={<HomePage />}>
    <Route index element={<Ecomm />} />
    <Route path="default" element={<Ecomm />} />
    <Route path="ecommerce" element={<Ecomm />} />
    <Route path="order" element={<Order />} />
  </Route>
</Routes>


      </DashboardContextProvider>
    </div>
  )
}

export default App
