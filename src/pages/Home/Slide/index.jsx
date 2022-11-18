import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAll } from '../../../actions'
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { GiCheckMark } from 'react-icons/gi'
import { EffectFade } from 'swiper'
import bg from '../../../assets/static/burbujas.png'
import Button from '../../../components/Button'
import './styles.scss'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import 'swiper/components/effect-fade/effect-fade.scss'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade])

const CarouselMain = props => {
  const { banners } = props

  useEffect(() => {
    // props.getAll('banners', 'GET_BANNERS')
    // eslint-disable-next-line
  }, [])

  const animation = event => {
    const textContainer = event[0].childNodes[0].childNodes[0].childNodes[0]
    const newTextContainer = textContainer.cloneNode(true)
    textContainer.parentNode.replaceChild(newTextContainer, textContainer)

    const floatContainer = event[0].childNodes[0].childNodes[0].childNodes[1]
    const newfloatContainer = floatContainer.cloneNode(true)
    floatContainer.parentNode.replaceChild(newfloatContainer, floatContainer)
  }

  return (
    <div className="carouselMain" id="inicio">
      <Swiper
        className="carouselMain__container"
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 8000, disableOnInteraction: true }}
        effect="fade"
        watchSlidesVisibility="true"
        onSlideChange={swiper => {
          animation(swiper.visibleSlides)
        }}
      >
        {banners.map(banner => (
          <SwiperSlide key={banner.id} className="carouselMain__item">
            <div className="banner">
              <div className="banner__container">
                <div className="banner__left">
                  <div className="banner__title flip-in-hor-bottom">
                    <span className="banner__title2">{banner.title_big}</span>
                    <br />
                    {banner.title}
                  </div>
                  <div className="banner__subtitle flip-in-hor-top">
                    {banner.subtitle}
                  </div>
                  <div className="banner__subtitle flip-in-hor-top">
                    Ayuda a eliminar bacterias y virus.
                  </div>
                  <div className="banner__subtitle flip-in-hor-top">
                    <GiCheckMark />
                    <span>Productos:</span>
                  </div>
                  <div className="banner__subtitle flip-in-hor-top">
                    <Button className="button --primary">
                      Gel Antibacterial
                    </Button>
                    <Button className="button --active">Más Productos</Button>
                  </div>
                </div>
                <div
                  className="banner__right"
                  style={{ backgroundImage: `url("${bg}")` }}
                >
                  <img className="fade-in" src={banner.float} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    banners: state.reducersHome.banners,
  }
}

const mapDispatchToProps = {
  getAll,
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselMain)
