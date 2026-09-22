import { ToastContainer, Bounce, toast } from 'react-toastify';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

import { data } from '@/data/data';

interface MiniCart {
   productId: number;
   quantity: number;
}

interface GlobalState {
   miniCart: MiniCart[];
}

interface GlobalContextData {
   state: GlobalState;
   showSucessMessage: (msg: string) => void;
   showErrorMessage: (msg: string) => void;
   dismissMessage: (msg: string) => void;
   addMinicart: (productId: number) => void;
   removeMinicart: (productId: number, deleteFromCart?: boolean) => void;
   getCartTotal: () => number;
}

interface GlobalProviderProps {
   children: ReactNode;
}

const initialState: GlobalState = {
   miniCart: [],
};

const GlobalContext = createContext<GlobalContextData>({
   state: initialState,
   showSucessMessage: (_: string) => {},
   showErrorMessage: (_: string) => {},
   dismissMessage: (_: string) => {},
   addMinicart: (_: number) => {},
   removeMinicart: (_: number, __: boolean = false) => {},
   getCartTotal: () => 0,
});

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
   const [state, setState] = useState<GlobalState>(initialState);

   const showSucessMessage = (msg: string) => {
      toast.success(msg);
   };

   const showErrorMessage = (msg: string) => {
      toast.error(msg);
   };

   const dismissMessage = (msg: string) => {
      toast.dismiss(msg);
   };

   const addMinicart = (productId: number) => {
      setState((prev) => {
         const cartItem = prev.miniCart.findIndex((cart) => cart.productId === productId);

         if (cartItem !== -1) {
            return {
               ...prev,
               miniCart: prev.miniCart.map((item, index) =>
                  index === cartItem ? { ...item, quantity: item.quantity + 1 } : item,
               ),
            };
         }

         return {
            ...prev,
            miniCart: [...prev.miniCart, { productId, quantity: 1 }],
         };
      });
   };

   const removeMinicart = (productId: number, deleteFromCart: boolean = false) => {
      setState((prev) => {
         const cartItem = prev.miniCart.find((cart) => cart.productId === productId);

         if (deleteFromCart || cartItem?.quantity === 1) {
            return {
               ...prev,
               miniCart: prev.miniCart.filter((item) => item.productId !== productId),
            };
         }

         return {
            ...prev,
            miniCart: prev.miniCart.map((item) =>
               item.productId === productId ? { ...item, quantity: item.quantity - 1 } : item,
            ),
         };
      });
   };

   const getCartTotal = () => {
      return state.miniCart.reduce((total, item) => {
         const product = data.find((product) => product.id === item.productId);

         return total + (product?.price ?? 0) * item.quantity;
      }, 0);
   };

   const values = {
      state,
      showSucessMessage,
      showErrorMessage,
      dismissMessage,
      addMinicart,
      removeMinicart,
      getCartTotal,
   };

   return (
      <GlobalContext.Provider value={values}>
         {children}
         <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Bounce}
         />
      </GlobalContext.Provider>
   );
};

const useGlobalContext = () => {
   return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };
