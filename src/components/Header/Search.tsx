import { useState } from "react"
import { useTranslation } from "react-i18next"
import { CiSearch } from "react-icons/ci"
import { Link, useNavigate } from "react-router-dom"
import Stick from "./Stick"
import categories from "../../data/category.json"
import { BiChevronDown } from "react-icons/bi"

function Search() {
  const [keyword, setKeyword] = useState<string>("")
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  return (
    <div className="flex items-center w-full bg-gray-100 rounded-md pr-3 mx-3 border border-transparent focus-within:border-green-500 transition-all duration-200">
      <CiSearch size={24} className="mx-5" />
      <input
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => e.key == 'Enter' && navigate("search/" + keyword)}
        className="w-full py-3 px-3 outline-none"
        type="text"
        placeholder={t("search")} />
      <Stick />
      <button onClick={()=>setOpen(!open)} className="flex items-center w-50 mx-3 gap-3">
        <div>Ahli harytlar</div>
        <BiChevronDown size={24} />
      </button>
       <div className={"absolute top-16 right-0 mr-70 bg-white py-1 px-2 rounded flex flex-col shadow transtion-all duration-200 "+(open ? "opacity-100 visible" : "opacity-0 invisible")}>
             {
            categories.map((category, key) => {
              return (
                <Link to={"category/" + key}
                  onClick={()=>setOpen(false)}
                  key={"category-" + category.id}
                  className={"px-5 mb-2 text-sm"}>
                  {category.name}
                </Link>
              )
            })
          }
      </div>
    </div>
  )
}

export default Search