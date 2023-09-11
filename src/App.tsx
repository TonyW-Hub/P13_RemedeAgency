import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"
import "./App.css"
import { APP_LINKS } from "./utils/appLinks"
import { PublicHomePage } from "./pages/public/PublicHomePage/PublicHomePage"
import { PublicLayout } from "./layout/PublicLayout/PublicLayout"
import { SigninPage } from "./pages/public/SigninPage/SigninPage"
import { ProtectedLayout } from "./layout/ProtectedLayout/ProtectedLayout"
import { ProtectedHomePage } from "./pages/protected/ProtectedHomePage/ProtectedHomePage"
import { TransactionPage } from "./pages/protected/TransactionPage/TransactionPage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PublicLayout />}>
        <Route
          path={APP_LINKS.public.home}
          element={<PublicHomePage />}
        ></Route>
        <Route path={APP_LINKS.public.signin} element={<SigninPage />}></Route>
      </Route>

      <Route element={<ProtectedLayout />}>
        <Route
          path={APP_LINKS.protected.home}
          element={<ProtectedHomePage />}
        ></Route>
        <Route
          path={APP_LINKS.protected.transaction + "/:id"}
          element={<TransactionPage />}
        ></Route>
      </Route>
    </>,
  ),
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
