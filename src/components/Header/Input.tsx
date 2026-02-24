import React, { useState } from 'react'
import type { InputProp } from '../../types/Header'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

function Input(props: InputProp) {
  const [focus, setFocus] = useState(props.defaultValue ? true : false)
  const [validate, setValidate] = useState(true)
  const [visible, setVisible] = useState(false)
  const {t} = useTranslation()

  const checkValidate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.regex) setValidate(props.regex.test(e.target.value))
    if (!e.target.value) setValidate(true)
  }
  return (
    <div className=''>
      <label className={'text-sm ' + (validate ? "text-black" : "text-red-500")} htmlFor={props.name}>{t(props.label)}</label>

      <div className={'bg-gray-100 py-1 my-1 rounded-lg flex items-center border border-transparent focus-within:border-green-500 transition-all duration-200 ' + (validate ? " " : "border-red-500 bg-red-50 ") + (focus ? "border-green-500 " : "border-none ")}>
        <label htmlFor={props.name} className='ml-3'>{props.defaultValue}</label>
        <input
          onBlur={() => !props.defaultValue && !props.value && setFocus(false)}
          onFocus={() => setFocus(true)}
          className='w-full py-2  pr-3 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
          id={props.name}
          value={props.value}
          onChange={(e) => { props.onChange(e), checkValidate(e) }}
          name={props.name}
          type={props.type !== "password" ? props.type : visible ? "text" : "password"}
          autoComplete={props.type == "password" ? 'off' : "on"}
        />

        {
          props.type === "password" &&
          <button type='button' className='mr-2 text-xl' onClick={() => setVisible(!visible)}>
            {
              visible ? <BsEye /> : <BsEyeSlash />
            }
          </button>
        }
        {
          props.type === "passwordCo" &&
          <button type='button' className='mr-2 text-xl' onClick={() => setVisible(!visible)}>
            {
              visible ? <BsEye /> : <BsEyeSlash />
            }
          </button>
        }
      </div>
    </div>
  )
}

export default Input