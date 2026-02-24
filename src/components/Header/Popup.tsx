import { BiX } from 'react-icons/bi'
import type { PopupProps } from '../../types/Header'
import { useTranslation } from 'react-i18next'

function Popup({ children, title, open, setOpen, active, setActive, sendData }: PopupProps) {
  const {t} = useTranslation()

  return (
    <div className=''>
      <div onClick={() => setOpen(false)} className={'fixed top-0 left-0 h-screen bg-black/40 w-full backdrop-blur-[2px] transition-all ' + (open ? "opacity-100 visible" : "opacity-0 invisible")}></div>
      <div onClick={(e) => e.stopPropagation()} className={'text-black w-100 -translate-1/2 bg-white rounded py-5 px-5 fixed top-1/2 left-1/2 transition-all ' + (open ? "scale-100" : "scale-0")}>
        <div className="flex items-center pb-5">
          <div className='font-bold text-2xl text-red-600'>100haryt.com</div>
          <button onClick={() => setOpen(false)} className='hover:opacity-70 absolute top-5 right-5 text-gray-400 p-0.5'>
            <BiX size={24} />
          </button>
        </div>

        <div className='flex justify-start border-b border-gray-100'>
          <button onClick={() => setActive("girmek")} className={'text-lg font-semibold py-1 px-3' + (active == "girmek" && "border border-b-3 border-gray-300")}>{t(('login'))}</button>
          <button onClick={() => setActive("agza bolmak")} className={'text-lg font-semibold py-1 px-3 ml-5' + (active == "agza bolmak" && "border border-b-3 border-gray-300")}>{t(('signUp'))}</button>
        </div>

        <div>{children}</div>
        {
          active == "girmek" ?
          <button onClick={sendData} className='bg-custom-green text-lg text-white font-bold w-full hover:opacity-80 py-3 mb-3 rounded-lg'>{t(('login'))}</button>
          :
          <button onClick={sendData} className='bg-custom-green text-lg text-white font-bold w-full hover:opacity-80 py-3 mb-3 rounded-lg'>{t(('continue'))}</button>
        }
      </div>
    </div>
  )
}

export default Popup