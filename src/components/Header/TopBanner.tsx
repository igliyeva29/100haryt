import { Swiper, SwiperSlide } from "swiper/react"
import { topBanner1, topBanner2, topBanner3 } from "../../assets/images"
import { Autoplay } from "swiper/modules"

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'


function TopBanner() {
  return (
    <div className="bg-custom-bg">
      <div className="container mx-auto">
        <div className="mx-10">
          <Swiper
            loop={true}
            modules={[Autoplay]}
            autoplay={{ delay: 60000 }}
            allowTouchMove={false}


          >
            <SwiperSlide>
              <img className="w-full h-full" src={topBanner1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full h-full" src={topBanner2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full h-full" src={topBanner3} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default TopBanner