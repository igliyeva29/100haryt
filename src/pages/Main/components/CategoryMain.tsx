import ProductCard from '../../../components/ProductCard'
import { Link } from 'react-router-dom'
import {BiRightArrowAlt } from 'react-icons/bi'
import type { ProductCardProps } from '../../../types/Product'



type CategoryMainProps = {
  data:{
    id:number;
    name:string;
    products:ProductCardProps[]
  }
}

function CategoryMain({data}:CategoryMainProps) {
  return (
    <div>
      <div className='inline-block'>
        <Link className='flex items-center text-black font-bold text-3xl hover:text-custom-orange transition-all py-5' to={'/category/'+data.id}>
            {data.name}
            <BiRightArrowAlt size={32} className='text-custom-orange pt-1'/>       
        </Link>
      </div>

      <div className='grid grid-cols-4 gap-5'>
        {
          data.products.map((product,index)=>(
            <ProductCard key={'main-category-product-'+index} data={product}/>
          ))
        }
      </div>
    </div>
  )
}

export default CategoryMain