import { useState } from 'react'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'
import type { ProductCardProps } from '../types/Product'
import { brand } from '../assets/images'
import { newPng } from '../assets/images'

function ProductCard({ data }: { data: ProductCardProps }) {
  const [like, setLike] = useState(false)

  return (
    <div className={' bg-white rounded-md p-5 flex flex-col justify-between '}>
      <div>
        <div className='relative'>
          <img src={brand} alt="" />
          {
            data.isNew &&
            <div className="absolute top-0 left-0">
              <img className='w-12' src={newPng} alt="" />
            </div>
          }
        </div>
        {
          data.discount > 0 &&
          <div className="w-10">
            <div className="bg-red-600 rounded text-white font-semibold py-0.5 px-2">
              <span className="text-sm">
                {data.discount}%
              </span>
            </div>
          </div>
        }
        <div className="flex flex-col pt-2">
          <div className='text-lg font-bold'>{data.price - (data.price / 100 * data.discount)} TMT</div>
          {
            data.discount > 0 &&
            <del className='text-sm text-gray-400 font-semibold'>{data.price} TMT</del>
          }
        </div>
        <div className='text-sm font-semibold line-clamp-2'>{data.name}</div>
        <div className='text-sm py-0.5 text-gray-500 line-clamp-2'>{data.definition}</div>
      </div>
      <div>
        <div className='flex items-center pt-3'>
          <button className='w-full h-10 text-white bg-custom-green flex justify-center items-center rounded-md'>
           Sebede gosh
          </button>
          <button onClick={() => setLike(!like)} className='bg-gray-100 ml-3 h-10 w-10 rounded-md p-2 text-center'>
            {like ? <IoMdHeart size={24} className='text-custom-red ' /> : <IoMdHeartEmpty size={24} className='text-gray-400 ' />}
          </button>
        </div>
      </div>

    </div>
  )
}

export default ProductCard