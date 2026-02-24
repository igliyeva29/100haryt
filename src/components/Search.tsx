import { useTranslation } from "react-i18next"
import { CiSearch } from "react-icons/ci"

function Search({keyword,setKeyword}:{keyword:string, setKeyword:(keyword:string)=>void}) {
  const {t} = useTranslation()

  return (
    <div className="flex items-center w-150 bg-white rounded-md shadow px-3">
      <CiSearch size={24} />
      <input
        onChange={(e) => setKeyword(e.target.value)}
        className="w-full py-2 px-3 outline-none"
        type="text"
        value={keyword}
        placeholder={"Gözleg"} />
    </div>
  )
}

export default Search