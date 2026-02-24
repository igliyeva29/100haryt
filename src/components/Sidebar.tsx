import type { CategoryType } from '../types/Category'
import { Link } from 'react-router-dom'
import type { brandType } from '../api/brands'
import { useState } from 'react'

type SidebarPropsType = {
  categories?: CategoryType,
  brands?: brandType[],
  data: { order: string, brands: string[] },
  setData: (data: { order: string, brands: string[] }) => void
}

function Sidebar({ categories, brands, data, setData }: SidebarPropsType) {
  const [search, setSearch] = useState("")

  const checkBrand = (brand: brandType) => {
    const finded = data.brands.find((el) => el === brand.id)
    if (finded) {
      const filtered = data.brands.filter((el) => el != finded)
      setData({ ...data, brands: filtered })
    } else {
      setData({ ...data, brands: [...data.brands, brand.id] })
    }
  }
  return (
    <div className='w-1/4 border border-gray-300 py-5 px-4 bg-white rounded h-fit'>
      {
        categories?.subcategories &&
        <div className='mb-4'>
          <div className='text-black font-semibold text-xl'>
            Içki kategoriýalar
          </div>
          <div className='px-2 mt-3 text-gray-700 text-lg flex flex-col'>
            {
              categories.subcategories.map((category, index) => (
                <Link className='inline-block w-fit hover:text-custom-orange' key={'subcategory-' + index} to={'/category/' + category.id}>
                  {category.name}
                </Link>
              ))
            }
          </div>
        </div>
      }
      <div className='mb-4'>
        <div className='text-black font-semibold text-xl'>
          Tertip
        </div>
        <div className='px-2 my-1 text-gray-700 text-lg flex flex-col'>
          <label className='flex items-center gap-2'>
            <div className='bg-gray-300 h-3.5 w-3.5 rounded-full flex items-center justify-center'>
              <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10.5" cy="10.5" r="10.5" fill="currentColor" className="text-gray-300"></circle>
                {
                  data.order == "" &&
                  <circle cx="10.5" cy="10.5001" r="7" fill="currentColor" className="text-custom-orange"></circle>
                }
              </svg>
            </div>
            <input onChange={(e) => setData({ ...data, order: e.target.value })} className='hidden' type="radio" name="order" value={""} />
            Hic hili
          </label>
          <label className='flex items-center gap-2'>
            <div className='bg-gray-300 h-3.5 w-3.5 rounded-full flex items-center justify-center'>
              <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10.5" cy="10.5" r="10.5" fill="currentColor" className="text-gray-300"></circle>
                {
                  data.order == "desc" &&
                  <circle cx="10.5" cy="10.5001" r="7" fill="currentColor" className="text-custom-orange"></circle>
                }
              </svg>
            </div>
            <input onChange={(e) => setData({ ...data, order: e.target.value })} className='hidden' type="radio" name="order" value={'desc'} />
            Arzandan Gymmada
          </label>
          <label className='flex items-center gap-2'>
            <div className='bg-gray-300 h-3.5 w-3.5 rounded-full flex items-center justify-center'>
              <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10.5" cy="10.5" r="10.5" fill="currentColor" className="text-gray-300"></circle>
                {
                  data.order == "asc" &&
                  <circle cx="10.5" cy="10.5001" r="7" fill="currentColor" className="text-custom-orange"></circle>
                }
              </svg>
            </div>
            <input onChange={(e) => setData({ ...data, order: e.target.value })} className='hidden' type="radio" name="order" value={'asc'} />
            Gymmatan Arzana
          </label>
        </div>
      </div>
      {
        brands && brands.length > 0 &&
        <div className='mb-4'>
          <div className='text-black font-semibold text-xl'>
            Brands
          </div>
          <div>
            <input onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())} type="text" placeholder='Gozleg' className='border my-2 border-gray-500 focus:border-blue-500 outline-none transition-all rounded-md w-full py-1 px-2' />
          </div>

          <div className='flex flex-col h-41 overflow-auto gap-1'>
            {brands.map((brand) => {
              if (brand.name.toLocaleLowerCase().includes(search)) {
                return (
                  <button onClick={() => checkBrand(brand)} key={"category-brand-" + brand.id} className='w-full text-left text-gray-700 flex items-center'>
                    <span className='inline-block h-5 w-5 text-custom-orange mr-3'>
                      {
                        data.brands.find((el) => el == brand.id) ?
                          <svg className='h-full w-full' viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1_2)"><rect width="17" height="17" rx="4" fill="currentColor" className="text-gray-300"></rect><path d="M13 3L7.99999 13L4 8.55559" stroke="currentColor" className="text-accent-500" strokeWidth="2.5"></path></g><defs><clipPath id="clip0_1_2"><rect width="17" height="17" fill="white"></rect></clipPath></defs></svg>
                          :
                          <svg className='h-full w-full' viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_2)">
                              <rect width="17" height="17" rx="4" fill="currentColor" className="text-gray-300"></rect>
                            </g>
                          </svg>
                      }
                    </span>
                    <span>{brand.name}</span>
                  </button>
                )
              }
            }
            )}
          </div>

        </div>
      }
    </div>
  )
}

export default Sidebar