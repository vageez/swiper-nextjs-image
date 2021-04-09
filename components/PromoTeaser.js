import React from 'react'
import Image from 'next/image'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { InitPromoTeaser } from '../utils'
SwiperCore.use([Navigation, Pagination, Autoplay])

const params = InitPromoTeaser()
const Title = ({ title }) => <h1>{title}</h1>
const PromoTeaser = ({ items = [] }) => {
  return (
    <>
      <Title title={'My Promo Teaser'} />
      <Swiper
        style={{ height: 'auto' }}
        {...params}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        onImagesReady={() => console.log(`onImagesReady`)}
      >
        {items.map(
          (item, i) =>
            console.log(item.id) || (
              <SwiperSlide key={item.id}>
                <div>
                  <h4>
                    {item.displayTitle} {i}
                  </h4>
                  <Image
                    alt={item.title}
                    src={item.image.promoImage.url}
                    srcSet={`${item.image.promoImage.url}?width=1000&maintain_aspect=1 1000w,
                    ${item.image.promoImage.url}?width=1500&maintain_aspect=1 1500w,
                    ${item.image.promoImage.url}?width=1900&maintain_aspect=1 1900w`}
                    sizes={`(max-width: 575px) 100vw, 
                    (min-width: 576px) and (max-width:991px) 100vw,
                    (min-width: 992px) and (max-width:1499px) 100vw,
                    (min-width: 1500px) 100vw`}
                    layout="responsive"
                    alt={item.displayTitle}
                    width={1500}
                    height={684}
                  />
                </div>
              </SwiperSlide>
            ),
        )}
      </Swiper>
    </>
  )
}

export default PromoTeaser

{
  /* <img
className={`lazyload swiper-lazy`}
data-src={item.image.promoImage.url}
data-srcset={`${item.image.promoImage.url}?width=1000&maintain_aspect=1 1000w,
${item.image.promoImage.url}?width=1500&maintain_aspect=1 1500w,
${item.image.promoImage.url}?width=1900&maintain_aspect=1 1900w`}
sizes={`(max-width: 575px) 100vw, 
(min-width: 576px) and (max-width:991px) 100vw,
(min-width: 992px) and (max-width:1499px) 100vw,
(min-width: 1500px) 100vw`}
sizes={`(max-width: 575px) 100vw, 
(min-width: 576px) and (max-width:991px) 100vw,
(min-width: 992px) and (max-width:1499px) 100vw,
(min-width: 1500px) 100vw`}
alt={item.displayTitle}
width={"80%"}
/> */
}
