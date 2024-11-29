import React from "react";
import { Link } from 'react-router-dom';

//Assets
import Uparrow from "../../assets/icons/up arrow.png"; 
import oneIcon from "../../assets/icons/Number One-Misc icon.png";
import TwoIcon from "../../assets/icons/Number Two-Misc icon.png";
import ThreeIcon from "../../assets/icons/Number Three-Misc icon.png";
import Dividerlight from "../../assets/icons/Dividers (1).png";

//Tablet
import UparrowRight from '../../assets/icons/right-arrow.png';

//Components
import Roles from "./Roles";


function Main(){
    return(
        <div>
            <h1 className="about-title pt-14 pl-5"> Project </h1>
            <p className="header-content pt-16 lg:ml-auto">
               At Project X, we believe that <span className="header-span">innovation</span> happens when <span className="header-span">talented individuals</span> come
               <span className="header-span">together</span> to <span className="header-span">solve real-world challenges</span>.
            </p>

            <section className="pl-5">
               {/* Arrow Icon*/}
               <div className="project-content-header flex flex-wrap gap-2 pt-28 justify-between lg:items-start lg:pt-48">

                <div className="flex flex-wrap content-center gap-12 lg:order-2 lg:items-start">
                   <h2 className='about-captions pt-2 font-bold lg:order-2 project-captions'> Our projects: Turning ideas into reality</h2>
                   <img src={ Uparrow } alt="up arrow" className="lg:hidden"/>
                   <img src={ UparrowRight } alt="right arrow" className='hidden lg:block lg:order-1 rightarrow'/>
                </div>

                <p className="project-content pt-8 lg:order-1 lg:pt-0">
                Each project at Project X is designed to address real-world problems with innovative, tech-driven solutions. 
                We focus on creating projects with business potential that can scale into full-fledged startups. 
                Here’s a look at some of the exciting projects we’ve worked on or are currently developing.
                </p>

                </div>

                <div className='grid pr-4 gap-3 pt-10 lg:w-full'>
                   <div className="lg:flex lg:justify-between lg:w-full"> 
                      <div className='flex gap-5 flex-wrap pt-2 items-center'>
                         <img src={ oneIcon } alt='a number one icon'/>
                         <h2 className='values padding-top'>AgriTech</h2> 
                         <button className="coming-soon lg:ml-6"> coming soon</button>
                      </div>
                      <p className=' pt-6 values-project-text'>
                      This app connects small-scale farmers to buyers, ensuring fair pricing using blockchain technology. 
                      It eliminates middlemen and brings transparency to agricultural transactions.`
                      </p>
                   </div>

                   <img src={ Dividerlight } alt="a light divider" className='pt-6 lg:w-full'/>

                   <div className="lg:flex lg:justify-between lg:w-full">
                      <div className='flex gap-5 flex-wrap pt-2 items-center'>
                         <img src={ TwoIcon } alt='a number two icon'/>
                         <h2 className='values padding-top'>FinTech</h2>
                         <button className="coming-soon lg:ml-6"> coming soon</button>
                      </div>
                      <p className='values-project-text pt-6'>
                      A mobile banking solution designed to provide microloans to underserved communities using AI to evaluate creditworthiness. 
                      This project focuses on increasing financial inclusion for individuals without access to traditional banking.
                      </p>
                   </div>

                   <img src={ Dividerlight } alt="a light divider" className='pt-6 lg:w-full'/>

                   <div className="lg:flex lg:justify-between lg:w-full">
                      <div className='flex gap-5 flex-wrap pt-2 items-center'>
                         <img src={ ThreeIcon } alt='a number three icon'/>
                         <h2 className='values padding-top'>HealthTech</h2>
                         <button className="coming-soon lg:ml-6"> coming soon</button>
                      </div>
                      <p className='values-project-text pt-6'>
                      A telemedicine platform connecting patients in rural areas with doctors for remote consultations, prescriptions, and health monitoring. 
                      This project aims to improve access to healthcare where it’s most needed
                      </p>
                   </div>
                </div>
            </section>

            <section className="pl-4 pt-20">
               <h2 className="your-role pb-8">Your Role in Project X:
               Making it Happen
               </h2>
               <p className="project-content lg:mt-4">
               At Project X, we believe that a diverse team is key to creating innovative solutions. 
               Our projects require a wide variety of skill sets, and we offer several roles to fit your expertise and passion. 
               Here are the core roles involved in our projects:
               </p>
               <Roles />
            </section>

            <section className="pl-5 pt-20 pb-16">
                <h2 className="readytojoin"> Ready to Join?</h2>
                <div className="flex flex-col flex-wrap gap-14">
                   <p className="about-content pt-4 lg:ml-auto">
                If you’re passionate about tech, eager to learn, and ready to work on innovative projects, 
                Project X is the place for you. Join us to gain hands-on experience, work with top mentors, 
                and create solutions that have the potential to change the world.</p>
                   <Link to="/application">
                     <button className="volunteer ml-auto mr-2 lg:ml-80"> Join now </button>
                   </Link>
                </div>
            </section>
        </div>
    )
}

export default Main;