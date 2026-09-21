import { Route, Routes } from 'react-router';

import MiniCart from './components/MiniCart';
import Home from './components/Home';
import AppLayout from './layouts';

function App() {
   return (
      <Routes>
         <Route element={<AppLayout />}>
            <Route
               path="/"
               element={<Home />}
            />
            <Route
               path="cart"
               element={<MiniCart />}
            />
         </Route>
      </Routes>
   );
}

export default App;
