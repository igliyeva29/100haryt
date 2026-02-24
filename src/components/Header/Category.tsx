import { BiCategory } from "react-icons/bi";
import Button from "./Button";
import { useEffect, useState } from "react";
import categories from "../../data/category.json"
import { icons } from "../../assets/images/icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CategoryButton from "./CategoryButton";

type CategoryPropType = {
  open: boolean
  setOpen: (open: boolean) => void
}

function Category({ open, setOpen }: CategoryPropType) {
  const [active, setActive] = useState(categories[0])
  const {t} = useTranslation()
  
  useEffect(() => {
    if (open) {
      document.querySelector('body')!.style.overflow = "hidden"
    } else {
      document.querySelector('body')!.style.overflow = "auto"
    }
  },[open])

  return (
    <div>
      <CategoryButton action={() => setOpen(!open)}/>

      
      <div className={"grid grid-cols-4 gap-3 px-8 absolute top-30 z-10 left-0 w-full bg-white h-[calc(100vh-118px)] transition-all duration-200 " + (open ? "opacity-100 visible" : "opacity-0 invisible")}>
        <div className="overflow-auto py-5">
          {
            categories.map((category, key) => {
              const Icon = (icons as any)[category.icon]
              return (
                <Link to={"category/" + active.id}
                  onClick={()=>setOpen(false)}
                  onMouseEnter={() => setActive(category)}
                  key={"category-" + key}
                  className={"flex items-center gap-3 w-full text-left mb-2 py-1 px-3" + (active.id == category.id ? "bg-custom-orange/10 text-custom-orange" : "")}
                >
                  <Icon className="text-custom-orange" />
                  {category.name}
                  <div>⟩</div>
                </Link>
              )
            })
          }
        </div>

        <div className="col-span-3 border-l py-5 pl-5 border-orange-100">
          <Link to={"category/" + active.id} onClick={()=>setOpen(false)} className="font-semibold text-4xl hover:text-custom-orange">{active.name}</Link>
          <div className="grid grid-cols-2 gap-3 mt-8">
            {
              active.subcategories.map((sub, index) => (
                <div key={'subcategory-' + index}>
                  <Link onClick={()=>setOpen(false)} className="inline-block pl-2 hover:text-custom-orange text-lg font-semibold" to={"category/" + sub.id}>{sub.name}</Link>

                  <div className="my-2 flex flex-col">
                    {
                      sub.subcategories && sub.subcategories.map((subsub, index2) => (
                        <Link onClick={()=>setOpen(false)} key={"subsubcategory-" + index2} to={"category/" + subsub.id} className="inline-block w-fit pl-4 hover:text-custom-orange">{subsub.name}</Link>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category