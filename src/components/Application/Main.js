import React, { useState } from 'react';

//Assets
import GoToDown from "../../assets/icons/button-down-icon.png";

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
          placeholder="Why do you want to join Project X?"
           name="message" 
           rows={70} 
           cols={50} 
           required maxLength={250} 
           className="Message message resize-none ml-3 lg:ml-3 lg:mt-4"
        />
        <div
          className={`absolute bottom-1 left pb-2 two-fifty ${
            text.length >= maxChars ? 'text-red-600' : 'text-gray-600'
          } ml-98 lg:ml-99`}
        >
          {maxChars - text.length}
        </div>
      </div>
    );
  };


function Main(){
    return(
        <div className="lg:pt-6 lg:pb-6">

         <div className="lg:flex lg:justify-between">

          <div>
            <h2 className="apply-title pt-8 pb-6 pl-5"> 
            A Step Toward Building Something Great!
            </h2>
            <h3 className="apply-content pb-8 pl-5 lg:pt-4">
            Are you ready to collaborate, learn, and build impactful tech solutions? 
            Fill out the application form and tell us about your skills and why you want to join Project X.
            </h3>
          </div>

            <div className="lg:pr-2">
              <form className="pt-10 pl-3 flex flex-wrap gap-6 pb-14 lg:pb-2">
                    <input type="text" name="fullname" required autoComplete="on" placeholder="Full name" className="Name main-data"/>
                    <input type="email" name="email" required autoComplete="on" placeholder="Email address" className="Email main-data"/>
              </form>
              <form className='lg:flex lg:flex-wrap hidden lg:pl-3 lg:gap-6'>
                  <input type="text" name="roleofinterest" required autoComplete="on" placeholder="Role of Interest" className="Name main-data"/>
                  <input type="text" name="experiencelevel" required autoComplete="on" placeholder="Experience Level" className="Email main-data"/>
              </form>
                    <TextareaWithLimit maxChars={250} />
                    <button className="submitmessage flex flex-wrap gap-1 items-center flex-col pb-6 ml-3 lg:mt-10 lg:gap-0"><img src={GoToDown} alt="go to"/>Submit</button>
            </div>
         </div>
        </div>
    )
}
export default Main;