import { Swiper, SwiperSlide } from "swiper/react"
import { banner1, banner10, banner2, banner3, banner4, banner5, banner6, banner7, banner8, banner9 } from "../../../assets/images"
import { Pagination, Autoplay, Navigation, Thumbs, FreeMode } from "swiper/modules"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import type { Swiper as SwiperType } from "swiper";
import { useRef, useState } from "react";
import ColorThief from "colorthief";



import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'


function Banner() {
  const [thumbs, setThumbs] = useState<SwiperType | null>(null)
  const [bgColor, setBgColor] = useState("transparent")
  const getImageColor = (swiper: any) => {
    const activeSlide = swiper.slides[swiper.activeIndex]
    const img = activeSlide.querySelector("img")

    if (!img) return

    const colorThief = new ColorThief()

    if (img.complete) {
      const result = colorThief.getColor(img)
      setBgColor(`rgb(${result[0]}, ${result[1]}, ${result[2]})`)
    } else {
      img.addEventListener("load", () => {
        const result = colorThief.getColor(img)
        setBgColor(`rgb(${result[0]}, ${result[1]}, ${result[2]})`)
      })
    }
  }

  return (
    <div style={{ backgroundColor: bgColor }}>
      <div className="container mx-auto">
        <div className="mx-10 py-5">
          <div className="rounded-2xl overflow-hidden">
            <Swiper
              loop={true}
                onInit={(swiper) => getImageColor(swiper)}
                onSlideChange={(swiper) => getImageColor(swiper)}
              modules={[Pagination, Autoplay, Navigation, Thumbs]}
              navigation={{
                nextEl: ".btn-next",
                prevEl: ".btn-prev",
              }}
              pagination={{ clickable: true }}
              thumbs={{ swiper: thumbs && !thumbs.destroyed ? thumbs : null }}
              autoplay={{ delay: 5000 }}
              className="
            h-full
          [&_.swiper-pagination-bullet]:invisible"

            >
              <SwiperSlide>
                <img
                  crossOrigin="anonymous"
                  onLoad={getImageColor}
                  className="w-full h-full object-cover"
                  src={banner1}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  crossOrigin="anonymous"
                  onLoad={getImageColor}
                  className="w-full h-full object-cover"
                  src={banner2}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  crossOrigin="anonymous"
                  onLoad={getImageColor}
                  className="w-full h-full object-cover"
                  src={banner3}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  crossOrigin="anonymous"
                  onLoad={getImageColor}
                  className="w-full h-full object-cover"
                  src={banner4}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  crossOrigin="anonymous"
                  onLoad={getImageColor}
                  className="w-full h-full object-cover"
                  src={banner5}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  crossOrigin="anonymous"
                  onLoad={getImageColor}
                  className="w-full h-full object-cover"
                  src={banner6}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  crossOrigin="anonymous"
                  onLoad={getImageColor}
                  className="w-full h-full object-cover"
                  src={banner7}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  crossOrigin="anonymous"
                  onLoad={getImageColor}
                  className="w-full h-full object-cover"
                  src={banner8}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  crossOrigin="anonymous"
                  onLoad={getImageColor}
                  className="w-full h-full object-cover"
                  src={banner9}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  crossOrigin="anonymous"
                  onLoad={getImageColor}
                  className="w-full h-full object-cover"
                  src={banner10}
                  alt=""
                />
              </SwiperSlide>
            </Swiper>

          </div>
          <div className="mx-10">
            <div className="relative w-full mt-5 px-15">
              <Swiper
                onSwiper={setThumbs}
                modules={[Thumbs, FreeMode]}
                direction="horizontal"
                slidesPerView={10}
                spaceBetween={20}
                freeMode
                watchSlidesProgress
              >
                <SwiperSlide className="rounded-lg overflow-hidden ">
                  <img className="w-full h-full cursor-pointer opacity-50 in-[.swiper-slide-thumb-active]:opacity-100" src={banner1} alt="" />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg overflow-hidden ">
                  <img className="w-full h-full cursor-pointer opacity-50 in-[.swiper-slide-thumb-active]:opacity-100" src={banner2} alt="" />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg overflow-hidden ">
                  <img className="w-full h-full cursor-pointer opacity-50 in-[.swiper-slide-thumb-active]:opacity-100" src={banner3} alt="" />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg overflow-hidden ">
                  <img className="w-full h-full cursor-pointer opacity-50 in-[.swiper-slide-thumb-active]:opacity-100" src={banner4} alt="" />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg overflow-hidden ">
                  <img className="w-full h-full cursor-pointer opacity-50 in-[.swiper-slide-thumb-active]:opacity-100" src={banner5} alt="" />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg overflow-hidden ">
                  <img className="w-full h-full cursor-pointer opacity-50 in-[.swiper-slide-thumb-active]:opacity-100" src={banner6} alt="" />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg overflow-hidden ">
                  <img className="w-full h-full cursor-pointer opacity-50 in-[.swiper-slide-thumb-active]:opacity-100" src={banner7} alt="" />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg overflow-hidden ">
                  <img className="w-full h-full cursor-pointer opacity-50 in-[.swiper-slide-thumb-active]:opacity-100" src={banner8} alt="" />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg overflow-hidden ">
                  <img className="w-full h-full cursor-pointer opacity-50 in-[.swiper-slide-thumb-active]:opacity-100" src={banner9} alt="" />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg overflow-hidden ">
                  <img className="w-full h-full cursor-pointer opacity-50 in-[.swiper-slide-thumb-active]:opacity-100" src={banner10} alt="" />
                </SwiperSlide>
              </Swiper>
              <button className="btn-prev z-1 absolute left-0 top-1/2 -translate-y-1/2 border-2 px-3 rounded-2xl">
                <IoIosArrowBack size={24} />
              </button>

              <button className="btn-next z-1 absolute right-0 top-1/2 -translate-y-1/2 border-2 px-3 rounded-2xl">
                <IoIosArrowForward size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Banner