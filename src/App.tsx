
import { Route, Routes } from "react-router-dom"
import { TailwindIndicator } from "./components/tailwind-indicator"
import Home from "./pages/home/home"
import Catalogue from "./pages/catalogue/catalogue"
import Contact from "./pages/contact/contact"
import About from "./pages/about/about"
import Panier from "./pages/panier/panier"
import Blog from "./pages/blog/blog"
import CatalogueDetail from "./pages/catalogue-detail/catalogue-detail"
import Wishlist from "./pages/wishlist/wishlist"
// import Teste from "./pages/teste/teste"
import Login from "./pages/auth/login"
import Register from "./pages/auth/register"
import Quiz from "./pages/quiz/quiz"
import { CartItemType } from "./pages/catalogue/partials/catalogue-all"
import { Terms } from "./pages/terms/terms"
import { Privacy } from "./pages/privacy/privacy"
import ResetFormAndRedirect from "./pages/reset/reset"


// const routes = [{ path: "/", element: <Home /> }]

function App() {
  // const children = useRoutes(routes)
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalogue" element={<Catalogue />} />
        <Route path="catalogue-detail" element={<CatalogueDetail />} />
        <Route path="panier" element={<Panier cartItems={[]} addToCart={function (): void {
          throw new Error("Function not implemented.")
        }} removeFromCart={function (): void {
          throw new Error("Function not implemented.")
        }} />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="reset" element={<ResetFormAndRedirect />} />
      </Routes>

      <TailwindIndicator />
    </>
  )
}

export default App
