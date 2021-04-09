import React from 'react'
import Image from 'next/image'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { InitRotator } from '../utils'
SwiperCore.use([Navigation, Pagination, Autoplay])

const params = InitRotator()
const Title = ({ title }) => <h1>{title}</h1>

const Rotator = ({ rotator = {} }) => {
  const { title, items } = rotator
  if (!rotator) return null

  return (
    <div>
      <h1>Rotator</h1>
      <Swiper
        style={{ height: 'auto' }}
        {...params}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {items.map((item, i) => (
          <SwiperSlide key={item.id}>
            <div>
              <div>{i}</div>
              <Image
                alt={item.title}
                src={item?.posterImages?.[0]?.url}
                srcSet={`${item.posterImages[0].url}?width=350&maintain_aspect=1 350w,
                    ${item.posterImages[0].url}?width=650&maintain_aspect=1 650w,
                    ${item.posterImages[0].url}?width=1000&maintain_aspect=1 1000w`}
                sizes={`(max-width: 575px) 28vw, 
                    (min-width: 576px) and (max-width:991px) 21vw,
                    (min-width: 992px) and (max-width:1499px) 15vw,
                    (min-width: 1500px) 16vw`}
                layout="responsive"
                width={2000}
                height={3000}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Rotator
