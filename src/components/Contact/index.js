import { Marker } from "leaflet";
import { TileLayer } from "leaflet";
import { Popup } from "leaflet";
import {MapContainer} from 'leaflet';
import { useEffect, useRef, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLatters";
import "./index.scss";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 4000)
    }, [])

    const sendEmail = (e) => {
      e.preventDefault()

      emailjs
        .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
        .then(
          () => {
            alert('Message successfully sent!')
            window.location.reload(false)
          },
          () => {
            alert('Failed to send the message, please try again')
          }
        )
    }

    return (
      <>
        <div className="container contact-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              I am interested in freelance opportunities - especially ambitious
              or large projects. However, if you have other request or question,
              don't hesitate to contact me using below form either.
            </p>
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input
                      placeholder="Name"
                      type="text"
                      name="name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
          <div className="info-map">
            Demra Dhaka,
            <br />
            Bangladesh,
            <br />
            Branka RadiČevića 19, 22000 <br />
            Sremska Mitrovica <br />
            <br />
            <span>sayedakramsakib@gmail.com</span>
          </div>
          <div className="map-wrap">
            <MapContainer center={[44.96366, 19.61045]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[44.96366, 19.61045]}>
                <Popup>
                  Demra lives here, come over for a cup of coffee :)
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
        <Loader type="pacman" />
      </>
    )
};

export default Contact;