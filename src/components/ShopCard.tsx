import { Link } from 'react-router-dom'
import type { brandType } from '../api/brands'

function ShopCard({data}:{data:brandType}) {
  return (
    <Link to={'/brands/'+data.id} className='bg-white p-3 shadow h-full flex flex-col items-center'>
        <img className='w-30 h-30 m-5 object-contain' src={"./src/assets/images/shops/gyratComputers"} alt="" />
        <div className='text-lg font-semibold text-center border-t mt-1 w-full text-[#1f0632] border-gray-300'>{data.name}</div>
    </Link>
  )
}

export default ShopCard