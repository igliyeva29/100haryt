import Button from "./Button"
import i18n from "../../i18n"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import OutClick from "../OutClick"

function Language() {
  const lang = useTranslation().i18n.language
  const [open,setOpen] = useState<boolean>(false)
  const switchLang = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem("lang", lang)
  }
  
  return (
    <OutClick action={()=>setOpen(false)}>
      <Button action={()=>setOpen(!open)}>
        {lang.toUpperCase()}
      </Button>
      
      <div className={"absolute top-8 bg-white py-1 px-2 rounded flex flex-col shadow transtion-all duration-200 "+(open ? "opacity-100 visible" : "opacity-0 invisible")}>
        <button onClick={() => (switchLang('tm'), setOpen(false))} className={"flex items-center p-2 rounded "+(lang == 'tm' && "text-custom-green")}>TM</button>
        <div>
          <button onClick={() => (switchLang('ru'), setOpen(false))} className={"flex items-center p-2 rounded "+(lang == 'ru' && "text-custom-green")}>RU</button>
        </div>
        <button onClick={() => (switchLang('en'), setOpen(false))} className={"flex items-center p-2 rounded "+(lang == 'en' && "text-custom-green")}>EN</button>
      </div>
    </OutClick>
  )
}

export default Language