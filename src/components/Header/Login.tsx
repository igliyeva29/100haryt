import { useTranslation } from "react-i18next";
import Button from "./Button";
import { GoGift, GoPerson } from "react-icons/go";
import { useEffect, useState } from "react";
import { useLogin } from "../../queries/user";
import { useUserStore } from "../../store/user";
import OutClick from "../OutClick";
import { BiHeart } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import Popup from "./Popup";
import Input from "./Input";
import Register from "./Register";

function Login() {
  const [open, setOpen] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)
  const [openForget, setOpenForget] = useState(false)
  const [active, setActive] = useState<"girmek" | "agza bolmak">("girmek")
  const { t } = useTranslation()
  const [data, setData] = useState({
    phone: "",
    email: "",
    password: "",
    passwordConfirm: "",
    fullname: "",
  })


  const [dataForget, setDataForget] = useState("")
  const { mutate, isSuccess } = useLogin()
  const { token, user, setUser, setToken } = useUserStore(state => state)
  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setData({ ...data, [name]: value })
  }

  const sendData = () => {
    mutate(data)
  }

  useEffect(() => {
    setOpenLogin(false)
    setData({
      phone: "",
      email: "",
      password: "",
      passwordConfirm: "",
      fullname: "",
    })

    setUser(JSON.parse(localStorage.getItem("user") || "{}"))
    setToken(localStorage.getItem("token") || "")

  }, [isSuccess])

  const sendDataForget = () => {
    console.log(dataForget)
  }
  return (
    <div>
      <OutClick action={() => setOpen(false)}>
        <Button title={t(('login'))} action={() => setOpen(!open)}>
          <span className="mr-2">
            <GoPerson size={24} />
          </span>
        </Button>

        <div className={"absolute top-17 bg-white py-1 px-2 rounded flex flex-col shadow transtion-all duration-200 " + (open ? "opacity-100 visible" : "opacity-0 invisible")}>
          <div className="flex flex-col py-3 px-1">
            <div className="text-black text-xl font-semibold w-60 pb-3">
              Ulgama gireninizden son peydalanyp bilersiniz
            </div>
            <div className="border-t-2 border-gray-100">
              <div className="flex items-center gap-3 pt-3">
                <div className="bg-custom-green/20 rounded-full p-3">
                  <BiHeart size={24} className="text-custom-green" />
                </div>
                <div className="">Halan harytlarynyzy onlayn satyn alyn</div>
              </div>
              <div className="flex items-center gap-3 pt-3">
                <div className="bg-custom-green/20 rounded-full p-3">
                  <CiDeliveryTruck size={24} className="text-custom-green" />
                </div>
                <div className="">Sargydyňyzy tiz we amatly ýagdaýda eltip bermek</div>
              </div>
              <div className="flex items-center gap-3 pt-3">
                <div className="bg-custom-green/20 rounded-full p-3">
                  <GoGift size={24} className="text-custom-green" />
                </div>
                <div className="">Aksiýalara gatnaşmak we söwdaňyzda bonuslary ulanmak</div>
              </div>
              <button onClick={() => setOpenLogin(true)} className="bg-custom-green text-white text-center w-full py-2 rounded-lg mt-3">{t(('login'))}</button>
              {active === "girmek" ?
                <div>
                  <Popup title="Login" open={openLogin} setOpen={setOpenLogin} sendData={sendData} active={active} setActive={setActive}>
                    <div className='my-5'>
                      <Input enterFunc={sendData} regex={/^(6[0-5]|71)\d{6}$/} key={1} name="phone" label="Telefon belgisi" type="number" defaultValue="+993" onChange={handleData} value={data.phone} />
                    </div>
                    <div className='mb-3'>
                      <Input enterFunc={sendData} name='password' label="Parol" type='password' onChange={handleData} value={data.password} />
                    </div>
                    <div className='mb-3'>
                      <div className="bg-gray-100 border border-gray-300 py-3 my-1 rounded-lg flex items-center transition-all ">
                        <input type="checkbox" className="ml-5 border border-transparent focus-within:border-green-500" />
                        <span className="text-sm text-gray-400 mx-3">Howpsuzlyk barlagy</span>
                      </div>
                    </div>

                    <div className='text-center text-sm mb-3'>
                      <div>
                        <span>{t(('forgotPassword'))}</span>
                        <button onClick={() => { setOpen(false), setOpenLogin(false), setOpenForget(true) }} className="text-green-500 mb-3 mx-1">{(t('change'))}</button>
                      </div>
                    </div>
                  </Popup>
                </div>
                : <Register />
              }
            </div>
          </div>
        </div>
      </OutClick>
    </div>
  )
}

export default Login