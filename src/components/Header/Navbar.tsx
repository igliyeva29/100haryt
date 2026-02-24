import { Link, useLocation, useNavigate } from "react-router-dom"
import { brands, ikea, logo, markets, shops } from "../../assets/images"
import Search from "./Search"
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Login from "./Login";
import Language from "./Language";
import Orders from "./Orders";
import Stick from "./Stick";
import Category from "./Category";
import Profile from "./Profile";
import { useUserStore } from "../../store/user";

function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { t } = useTranslation()
  const [open, setOpen] = useState<boolean>(false)
  const { user, token } = useUserStore(state => state)
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="mx-10">
          <div className='py-9 text-custom-blue h-15'>
            <div className="flex items-center h-full">
              <Link to={"/"}>
                <img src={logo} className="w-80" alt="" />
              </Link>
              <Search />
              {!token ? <Login /> : <Profile />}
              <div className="mx-3">
                <Language />
              </div>
              <Orders />
            </div>
          </div>
          <div className="border-t-2 border-gray-100 py-2 flex items-center font-bold text-lg">
            <Category open={open} setOpen={setOpen} />
            <div className="ml-3">
              <Stick />
            </div>
            <Link to={'/shops'} className="flex items-center gap-3 mx-3 text-custom-red">
              <img src={shops} alt="" />
              <span>{t(('shops'))}</span>
            </Link>
            <Stick />
            <Link to={'/brands'} className="flex items-center gap-3 mx-3 text-custom-red">
              <img src={brands} alt="" />
              <span>{t(('brands'))}</span>
            </Link>
            <Stick />
            <Link to={'/markets'} className="flex items-center gap-3 mx-3 text-custom-red">
              <img src={markets} className="w-8" alt="" />
              <span>{t(('markets'))}</span>
            </Link>
            <Stick />
            <Link to={'/products'} className="flex items-center gap-3 mx-3 text-custom-red">
              <img src={ikea} className="w-8" alt="" />
              <span>{t(('IKEA'))}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar