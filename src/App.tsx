import { Toaster } from "react-hot-toast"
import Header from "./components/Header"
import { Route, Routes } from "react-router-dom"
import Main from './pages/Main'
import Shops from './pages/Shops'
import NotFound from "./pages/NotFound"
import Search from "./pages/Search"
import GoToTop from "./components/GoToTop"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/search/:keyword" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GoToTop />
      <Footer/>
    </>
  )
}

export default App
