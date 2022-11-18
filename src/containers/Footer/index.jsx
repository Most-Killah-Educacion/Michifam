import React from 'react'
import { RiFacebookCircleFill } from 'react-icons/ri'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaPhoneAlt } from 'react-icons/fa'
// import Button from '../../components/Button'
// import { MdHttps } from 'react-icons/md'
import { BiSupport } from 'react-icons/bi'
import './styles.scss'

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer">
        {/*
        <div className="footerContainer">
           <div className="footerContainer__subscription">
            <div className="footerContainer__subscription__title">
              <h5>Contacto</h5>
              <p>
                Escríbenos y uno de nuestros asesores te atenderá lo antes
                posible.
              </p>
            </div>
            <div className="footerContainer__subscription__box">
              <div className="footerContainer__left">
                <label htmlFor="suscription">
                  <input
                    name="suscription"
                    type="text"
                    id="suscription"
                    placeholder="Nombre"
                  />
                </label>
                <label htmlFor="suscription">
                  <input
                    name="suscription"
                    type="text"
                    id="suscription"
                    placeholder="Email"
                  />
                </label>
                <label htmlFor="suscription">
                  <input
                    name="suscription"
                    type="text"
                    id="suscription"
                    placeholder="Teléfono"
                  />
                </label>
              </div>
              <div className="footerContainer__right">
                <label htmlFor="suscription">
                  <textarea name="" placeholder="Mensaje"></textarea>
                </label>
                <Button className="button --white">Enviar</Button>
              </div>
            </div>
            <div className="footerContainer__subscription__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d120690.56894090424!2d-98.1532672!3d19.038208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1632892760854!5m2!1ses-419!2smx"
                loading="lazy"
                className="map"
                title="map"
              ></iframe>
            </div>
          </div>
        </div>
           */}
      </div>
      <div className="footerBot">
        <div className="footerBot__container">
          <a href="tel:525511561686" className="footerBot__phone">
            <FaPhoneAlt />
            <div>
              LLÁMANOS AL: <br /> 551 156 16 86
            </div>
          </a>
          {/*   <div className="footerBot__phone">
            <MdHttps />
            <div>
              PAGO <br />
              SSL 100% SEGURO
            </div>
          </div> */}
          <div className="footerBot__phone">
            <BiSupport />
            <div>
              ATENCIÓN <br />
              AL CLIENTE 24 HRS.
            </div>
          </div>
          {/*  <div className="footerBot__phone">
            <FaTruckLoading />
            <div>
              ENTREGA <br />
              EN 24 / 48 HRS.
            </div>
          </div>
          <div className="footerBot__phone">
            <MdHttps />
            <div>
              PAGO <br />
              SSL 100% SEGURO
            </div>
          </div>
          <div className="footerBot__phone">
            <BiSupport />
            <div>
              ATENCIÓN <br />
              AL CLIENTE 24 HRS.
            </div>
          </div>
          <div className="footerBot__phone">
            <FaBoxOpen />
            <div>
              GARANTÍA <br />
              DE DEVOLUCIÓN
            </div>
          </div> */}
          <div className="footerBot__icons">
            <a target="blank" href="https://www.facebook.com/Michifam">
              <RiFacebookCircleFill />
            </a>
            <a target="blank" href="https://www.instagram.com/michifam.mx/">
              <AiOutlineInstagram />
            </a>
            {/*   <a
              target="blank"
              href="https://www.linkedin.com/company/marathongroup-mexico/"
            >
              <AiFillLinkedin />
            </a> */}
          </div>
        </div>
        <div className="footerBot__powerade">Todos los derechos reservados</div>
      </div>
    </footer>
  )
}

export default Footer
