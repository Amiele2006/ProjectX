import React, { useState } from 'react';


//Assets
import GoTo from "../../assets/icons/button-icon.png";
import MailIcon from "../../assets/icons/mail.png";
import CallIcon from "../../assets/icons/call.png";
import Facebook from "../../assets/icons/Social icons.png";
import Twitter from "../../assets/icons/Social icons (1).png";
import Linkedin from "../../assets/icons/Social icons (2).png";


const TextareaWithLimit = ({ maxChars }) => {
    const [text, setText] = useState('');
  
    const handleChange = (event) => {
      if (event.target.value.length <= maxChars) {
        setText(event.target.value);
      }
    };
  
    return (
      <div className="relative w-80">
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Message"
           name="message" 
           rows={70} 
           cols={50} 
           required maxLength={250} 
           className="Message message resize-none lg:ml-3 lg:mt-5"
        />
        <div
          className={`absolute bottom-1 left pb-2 two-fifty ${
            text.length >= maxChars ? 'text-red-600' : 'text-gray-600'
          } lg:ml-99 `}
        >
          {maxChars - text.length}
        </div>
      </div>
    );
  };

function Main(){
    return(
        <div>
            <h1 className="about-title pt-14 pl-5"  autoFocus> Get in Touch </h1>
            <p className="header-content pt-16 text-right pr-0">
            Have any <span className="header-span">questions</span>? Feel free to 
            <span className="header-span"> reach out</span> to us! We're happy to <span className="header-span">assist </span>
            with any <span className="header-span">inquiries </span>about the program, roles, or how to get involved.
            </p>

           <div className='lg:flex contact-container justify-between pt-20'>

            <section className="pt-10">
                <form className="pt-10 pl-3 flex flex-wrap gap-6">
                    <input type="text" name="fullname" required autoComplete="on" placeholder="Full name" className="Name main-data"/>
                    <input type="email" name="email" required autoComplete="on" placeholder="Email address" className="Email main-data"/>
                </form>
                    <TextareaWithLimit maxChars={250}/>
                    <button className="submitmessage flex flex-wrap gap-1 items-center flex-col lg:mt-10"><img src={GoTo} alt="go to"/>Send Message</button>

            </section>
           

          <div>
            {/*Get in touch section*/}
            <div className="pt-24 pl-5 width">
                <h2 className="getintouch-header">
                Get in touch via some other means...
                </h2>
                <p className="getintouch-content pt-6">
                    You can reach out to us in some other means via the contact information below.
                </p>
            </div>

            {/* Contact */}
            <div className="pt-16 flex flex-wrap flex-col gap-3 pl-5 lg:pb-24 width">
                <div className="flex flex-wrap gap-2 items-center">
                    <img src={MailIcon} alt="mail"/>
                    <p className="contact-content"> contact@projectx.com </p>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                   <img src={CallIcon} alt="call"/>
                   <p className="contact-content"> +123-456-7890  </p>
                </div>
            </div>

            <div className="flex flex-wrap gap-6 items-center pl-5 pt-14 pb-16 social-links-header width">
                <a href="www.google.com" >
                   <img src={Facebook} alt="facebook" className="social-links-size"/>
                </a>
                <a href="www.google.com" >
                   <img src={Twitter} alt="twitter" className="social-links-size"/>
                </a>
                <a href="www.google.com">
                   <img src={Linkedin} alt="linkedin" className="social-links-size"/>
                </a>
            </div>
           </div>
           </div>
        </div>
    )
}

export default Main;