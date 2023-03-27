import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { DataProvider } from "./context/provider"
import { AppRouter } from "./router"
import { store } from "./store"


export const HulkStoreApp = () => {
  return (
    <Provider store={ store }>
        <DataProvider>
          <BrowserRouter>
              <AppRouter />
          </BrowserRouter>
      </DataProvider>
    </Provider>
    
  )
}
