import React from 'react'
// import Button from '../../../components/Button'

import { FaChild, FaUserMd } from 'react-icons/fa'
import { ImEyeBlocked } from 'react-icons/im'
import { RiHandCoinLine } from 'react-icons/ri'
import './styles.scss'

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about__container">
          <div className="about__about">
            <div className="about__title2">
              Nuestros <span>Productos</span>
            </div>

            <div className="about__paragraph">
              Estamos especializados en productos de limpieza industrial y
              profesional, con servicio en toda la República Mexicana a empresas
              y particulares. Con entregas en 24 a 48 horas,, nuestros
              productos, formatos y canales de venta estan destinados al uso
              profesional, empresas de limpieza, productos de limpieza para
              empresas, colegios, hospitales, etc, aunque también realizamos
              ventas a particulares.
            </div>
            <div className="about__title2">
              Información <span>de seguridad</span>
            </div>
            <div className="about__grid">
              <div className="about__mini">
                <div className="about__miniIco">
                  <FaChild />
                </div>
                <div className="about__miniText">
                  Manténgase fuera del alcance de los niños a menos que esté
                  bajo la supervisión de un adulto.
                </div>
              </div>
              <div className="about__mini">
                <div className="about__miniIco">
                  <RiHandCoinLine />
                </div>
                <div className="about__miniText">
                  Solo para uso externo. Conservar a temperatura ambiente.
                </div>
              </div>
              <div className="about__mini">
                <div className="about__miniIco">
                  <ImEyeBlocked />
                </div>
                <div className="about__miniText">
                  En caso de contacto con los ojos, lávense inmediata y
                  abundantemente con agua.
                </div>
              </div>
              <div className="about__mini">
                <div className="about__miniIco">
                  <FaUserMd />
                </div>
                <div className="about__miniText">
                  Si la irritación persiste, consultar con un médico.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{' '}
    </>
  )
}

export default About
