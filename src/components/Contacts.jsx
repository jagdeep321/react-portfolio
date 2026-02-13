import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Contacts = ()=>{

//serviceId = service_xf063wi
//public key = RaqX0lXQ_Kf2cTFLp
// template id = template_wt3iu08


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_xf063wi',
      'template_wt3iu08',
      form.current,
      'RaqX0lXQ_Kf2cTFLp'
    )
    .then((result) => {
        alert("Message Sent Successfully!");
    }, (error) => {
        alert("Failed to send message");
    });
  };



    return(

    <div id="contact">
      <div id="hire">
        <h1 className="lets">🤝 Let's Work Together</h1>
      </div>
      <div className="workbottom">
        <div className="contactcart1">
          <div className="contactchild">
            <h1 className="connect">connect with me</h1>

            <p className="connectbio1">Ready to bring your project to life? I'm available for freelance projects and
              full-time opportunities.</p>
            <p className="connectbio2">Whether you need a custom web application, mobile app, or enterprise solution - let's
              discuss how I can help.</p>
            <div className="maindetail">
              <div className="personaldetail">
                <i className="phone fa fa-phone"><FaPhoneAlt /></i>
                <a className="num" href="tel:+91 9463182321" target="_blank">+91 9463182321</a>
              </div>
              <div className="personaldetail">
                <i className="envelop fa fa-envelope"> <FaEnvelope /></i>
                <a className="gmail" href="mailto:jagdeepsilky@gmail.com" target="_blank">jagdeepsilky@gmail.com</a>
              </div>
              <div className="personaldetail">
                <i className="envelop fa fa-envelope"><FaEnvelope /></i>
                <a className="gmail" href="mailto:jindaljagdee007@gmail.com" target="_blank">jindaljagdee007@gmail.com</a>
              </div>

            </div>
            <div className="icons">
              <a href="https://www.instagram.com/i_jagdeep007?utm_source=qr&igsh=M2FtcTBqNjllMmll" target="_blank"><i
                  className="insta fa-brands fa-instagram"> <FaInstagram /></i></a>
              <a href="https://www.linkedin.com/in/jagdeep-jindal-2900a0376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"><i className="insta fa-brands fa-linkedin"> <FaLinkedin /></i></a>
              <a href="https://wa.me/+919463182321" target="_blank"><i className="insta fa-brands fa-whatsapp"> <FaWhatsapp /></i></a>
            </div>
          </div>

        </div>


        <div className="contactcart2">
          <div className="contactchild">
            <h1 className="connect">Start a Project</h1>
            <form ref={form} onSubmit={sendEmail} >
              <input className="name" name="user_name"   placeholder="Your Name" type="text" required />
              <input className="name"  placeholder="Your Email" name="user_email" type="email" required />
              <input className="name" name="user_phone"   placeholder="Your Phone" type="text" required />
              <textarea className="textarea"  name="message" placeholder="Tell me about your project requirements" cols="40"
                rows="4"></textarea>
              <button  type="submit"  className="collab">Let's Collaborate</button>
            </form>
          </div>
        </div>

      </div>
    </div>

    )
}
export default Contacts