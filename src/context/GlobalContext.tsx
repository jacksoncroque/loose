import { ToastContainer, Bounce, toast } from 'react-toastify';
import { createContext, useContext, useState, type ReactNode } from 'react';

interface MiniCart {
   id: number;
   name: string;
}

interface GlobalState {
   miniCart: MiniCart[];
}

interface GlobalContextData {
   state: GlobalState;
   showSucessMessage: (msg: string) => void;
   showErrorMessage: (msg: string) => void;
   dismissMessage: (msg: string) => void;
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

   const values = {
      state,
      showSucessMessage,
      showErrorMessage,
      dismissMessage,
   };

   return (
      <GlobalContext.Provider value={values}>
         {children}
         <ToastContainer
            position="top-center"
            autoClose={1000}
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
