
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


// const routes = [{ path: "/", element: <Home /> }]

function App() {
  // const children = useRoutes(routes)
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalogue" element={<Catalogue />} />
        <Route path="catalogue-detail" element={<CatalogueDetail />} />
        <Route path="panier" element={<Panier />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* <Route path="teste" element={<Teste />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>

      <TailwindIndicator />
    </>
  )
}

export default App
