import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"
import "./App.css"
import { AuthLayout } from "./layout/AuthLayout/AuthLayout"
import { APP_LINKS } from "./utils/appLinks"
import { PublicHomePage } from "./pages/public/PublicHomePage/PublicHomePage"
import { PublicLayout } from "./layout/PublicLayout/PublicLayout"
import { SigninPage } from "./pages/public/SigninPage/SigninPage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthLayout />}>
      <Route element={<PublicLayout />}>
        <Route
          path={APP_LINKS.public.home}
          element={<PublicHomePage />}
        ></Route>
        <Route path={APP_LINKS.public.signin} element={<SigninPage />}></Route>
      </Route>
    </Route>,
  ),
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
