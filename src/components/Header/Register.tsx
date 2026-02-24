import { useEffect, useState } from 'react'
import Button from './Button'
import { useTranslation } from 'react-i18next'
import Popup from './Popup'
import Input from './Input'
import { GoPersonAdd } from 'react-icons/go'
import { useRegister } from '../../queries/user'
import Login from './Login'

function Register() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<"girmek" | "agza bolmak">("agza bolmak")
  const { t } = useTranslation()
  const [data, setData] = useState({
    phone: "",
    fullname: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })

  const { mutate, isSuccess } = useRegister()

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setData({ ...data, [name]: value })
  }

  const sendData = () => {
    if (data.password !== data.passwordConfirm) {
      alert("Password bilen confirm password gabat gelenok")
      return
    }
    mutate(data)
  }

  useEffect(() => {
    setOpen(false)
    setData({
      phone: "",
      fullname: "",
      email: "",
      password: "",
      passwordConfirm: "",
    })
  }, [isSuccess])

  return (
    <div>
      {active === "agza bolmak" ?
        <Popup sendData={sendData} open={open} setOpen={setOpen} title={t('signUp')} active={active} setActive={setActive}>
      
          <div className='mb-4'>
            <Input name='fullname' label="Fullname" type='text' onChange={handleData} value={data.fullname} />
          </div>
          <div className='mb-4'>
            <Input name='password' label="Password" type='password' onChange={handleData} value={data.password} />
          </div>
          <div className='mb-4'>
            <Input name='passwordConfirm' label="Password Confirm" type='password' onChange={handleData} value={data.passwordConfirm} />
          </div>
        </Popup>
        : <Login />
      }
    </div>
  )
}
export default Register