import React from "react";
import { Link } from 'react-router-dom';

// Assets

//Mobile
import Uparrow from "../../assets/icons/up arrow.png"; 
import oneIcon from "../../assets/icons/Number One-Misc icon.png";
import TwoIcon from "../../assets/icons/Number Two-Misc icon.png";
import ThreeIcon from "../../assets/icons/Number Three-Misc icon.png";
import FourIcon from "../../assets/icons/Number Four-Misc icon.png";
import Dividerlight from "../../assets/icons/Dividers (1).png";

//Tablet
import UparrowRight from '../../assets/icons/right-arrow.png';


function Main(){
    return(
        <div>
            <h1 className="about-title pt-14 pl-5" autoFocus> About </h1>

            {/* Header */}
            <section className="pl-5 flex flex-wrap gap-6 lg:items-start lg:justify-between lg:pt-12">
                <div className="flex flex-wrap content-center gap-0 pt-16 lg:pt-0 lg:gap-12">
                <h2 className='about-captions pt-2 lg:pt-3'> Our mission </h2>
                <img src={ Uparrow } alt="up arrow"/>
                </div>

                <p className="about-content">
                At Project X, we are dedicated to empowering a new generation of tech talents through hands-on, real-world experience. We believe that great innovations stem from collaborative efforts across disciplines. 
                Our mission is simple: to gather budding tech talents and allow them to create viable business solutions through voluntary, passion-driven projects. We aim to help participants sharpen their skills, build scalable applications, 
                and eventually grow their ideas into impactful startups that can generate tech jobs and contribute to solving real-world challenges.
                </p>
            </section>

            {/* Our Vision*/}
            <section className="pl-5 flex flex-wrap gap-6 lg:pt-20 lg:items-start lg:justify-between">
                <div className="flex flex-wrap content-center gap-12 pt-28 lg:order-last lg:pt-4">
                   <h2 className='about-captions pt-2 lg:order-last lg:pt-3'> Our vision </h2>
                   <img src={ Uparrow } alt="up arrow" className="lg:hidden"/>
                   <img src={ UparrowRight } alt="right arrow" className='hidden lg:block rightarrow'/>
                </div>

                <p className="about-content pt-4">
                We envision a future where tech professionals are not only skilled but equipped with the experience and knowledge necessary to create solutions that matter. 
                Project X aspires to be the launchpad for tech talents to create sustainable, scalable solutions, lead innovative startups, and foster collaborations that continue beyond the program.
                </p>
            </section>

            {/* Values*/}
            <section className="pl-5 lg:flex lg:items-start lg: lg:pt-20 lg:justify-between">

                <div className="flex flex-wrap content-center gap-12 pt-28 lg:pt-0">
                  <h2 className='about-captions pt-2 lg:pt-4'> Our values </h2>
                  <img src={ Uparrow } alt="up arrow"/>
                </div>

                {/* Values */}
                <div className='grid pr-4 gap-3 pt-10 lg:pt-0'>

                  {/* Collaboration */}
                   <div className="lg:flex lg:gap-60 lg:items-center lg:justify-between"> 
                      <img src={ oneIcon } alt='a number one icon' className="hidden lg:block"/>
                      <div className='flex gap-5 flex-wrap pt-2 lg:flex-col lg:pt-0 lg:pr-0'>
                         <img src={ oneIcon } alt='a number one icon' className="lg:hidden"/>
                         <h2 className='values padding-top'>Collaboration</h2>
                         <p className='values-text pt-6 lg:block hidden lg:pt-0'>We believe that teamwork drives innovation.</p>
                      </div>
                      <p className='values-text pt-6 lg:hidden'>We believe that teamwork drives innovation.</p>
                      <img src={ Dividerlight } alt="a light divider" className='pt-6 lg:hidden'/>
                   </div>

                   <img src={ Dividerlight } alt="a light divider" className='pt-6 hidden lg:block lg:w-full'/>

                   {/* Growth */}
                   <div className="lg:flex lg:gap-60 lg:items-center lg:pt-2">
                      <img src={ TwoIcon } alt='a number one icon' className="hidden lg:block"/>
                      <div className='flex gap-5 flex-wrap pt-2 lg:flex-col lg:pt-0'>
                         <img src={ TwoIcon } alt='a number one icon' className="lg:hidden"/>
                         <h2 className='values padding-top'>Growth</h2>
                         <p className='values-text pt-6 lg:block hidden lg:pt-0'>We’re focused on helping participants grow their skills and confidence.</p>
                      </div>
                      <p className='values-text pt-6 lg:hidden'>We’re focused on helping participants grow their skills and confidence.</p>
                   </div>

                   <img src={ Dividerlight } alt="a light divider" className='pt-6 hidden lg:block lg:w-full'/>

                   {/* Sustainability */}
                   <div className="lg:flex lg:gap-60 lg:items-center lg:pt-2">
                      <img src={ ThreeIcon } alt='a number one icon' className="hidden lg:block"/>
                      <div className='flex gap-5 flex-wrap pt-2 lg:flex-col lg:pt-0'>
                         <img src={ ThreeIcon } alt='a number one icon' className="lg:hidden"/>
                         <h2 className='values padding-top'>Sustainability</h2>
                         <p className='values-text pt-6 lg:block hidden lg:pt-0'>Our projects are designed to be scalable and sustainable in the real world.</p>
                      </div>
                      <p className='values-text pt-6 lg:hidden'>Our projects are designed to be scalable and sustainable in the real world.</p> 
                   </div>

                   <img src={ Dividerlight } alt="a light divider" className='pt-6 hidden lg:block lg:w-full'/>

                   {/* Community */}
                   <div className="lg:flex lg:gap-60 lg:items-center lg:pt-2">
                      <img src={ FourIcon } alt='a number one icon' className="hidden lg:block"/>
                      <div className='flex gap-5 flex-wrap pt-2 lg:flex-col lg:pt-0'>
                         <img src={ FourIcon } alt='a number one icon' className="lg:hidden"/>
                         <h2 className='values padding-top'>Community</h2>
                         <p className='values-text pt-6 lg:block hidden lg:pt-0'>By joining Project X, you become part of a supportive tech community.</p>
                      </div>
                      <p className='values-text pt-6 lg:hidden'>By joining Project X, you become part of a supportive tech community.</p>
                   </div>

                </div>
            </section>

            {/* The Journey */}
            <section className="pl-5 lg:flex lg:pt-28 lg:items-start lg:justify-between">

                <div className="flex flex-wrap content-center gap-12 pt-28 lg:pt-0 lg:order-last">
                <h2 className='about-captions pt-2 font-bold lg:pt-3 lg:order-last lg:mr-4 journey'> The journey beyond Project X </h2>
                <img src={ Uparrow } alt="up arrow" className="lg:hidden"/>
                <img src={ UparrowRight } alt="right arrow" className='hidden lg:block rightarrow'/>
                </div>

                <p className="about-content pt-4 journey-content">
                Our goal is not just to help you complete a project during your time at Project X, but to equip you with the tools and experience necessary to scale your ideas beyond the program. 
                Many of our projects are designed with business potential in mind, meaning that you and your team can continue developing and scaling the solution into a real-world startup, creating tech jobs and making an impact.
                </p>
            </section>

            {/* Mentorship */}
            <section className="pl-5">

               <div className="lg:flex lg:pt-28 lg:items-start lg:justify-between">
                <div className="flex flex-wrap content-center gap-12 pt-28 lg:pt-0">
                  <h2 className='about-captions pt-2 font-bold lg:pt-3 mentor'>
                      Mentorship: Learn from the Best
                  </h2>
                  <img src={ Uparrow } alt="up arrow"/>
                </div>

                <p className="about-content pt-4 mentor-content">
                At Project X, mentorship is a crucial part of the experience. 
                Our mentors are seasoned professionals with years of experience in the tech industry, 
                offering valuable insights and helping you navigate the challenges of building scalable tech solutions.
                </p>
               </div>
               
               {/* Grid */}
               <div className='grid pr-4 gap-3 pt-10 lg:w-full'>

                   <div className="lg:flex lg:justify-between lg:gap-28"> 
                      <div className='flex gap-5 flex-wrap pt-2'>
                         <img src={ oneIcon } alt='a number one icon'/>
                         <h2 className='values padding-top lg:pt-2'>One-on-One Guidance</h2>
                      </div>
                      <p className='values-text pt-6 lg:pt-5'>
                         Get personalized advice from experts in your field
                      </p>
                      <img src={ Dividerlight } alt="a light divider" className='pt-6 lg:hidden'/>
                   </div>

                   <img src={ Dividerlight } alt="a light divider" className='pt-6 hidden lg:block lg:w-full'/>
         
                   <div className="lg:flex lg:justify-between lg:gap-28">
                      <div className='flex gap-5 flex-wrap pt-2'>
                         <img src={ TwoIcon } alt='a number two icon' className="mentor-icons"/>
                         <h2 className='values padding-top lg:pt-2'> Workshops & Webinars</h2>
                      </div>
                      <p className='values-text pt-6 lg:pt-5 grid'> Attend events to sharpen your skills and stay up to date with industry trends.</p>
                      <img src={ Dividerlight } alt="a light divider" className='pt-6 lg:hidden'/>
                   </div>

                   <img src={ Dividerlight } alt="a light divider" className='pt-6 hidden lg:block lg:w-full'/>

                   <div className="lg:flex lg:justify-between lg:gap-28">
                      <div className='flex gap-3 flex-wrap pt-2'>
                         <img src={ ThreeIcon } alt='a number three icon' className="mentor-icons"/>
                         <h2 className='values padding-top lg:pt-2'> Networking Opportunities</h2>
                      </div>
                      <p className='values-text pt-6 lg:pt-5'>Connect with industry leaders and like-minded individuals.</p>
                      <img src={ Dividerlight } alt="a light divider" className='pt-6 lg:hidden'/>
                   </div>

                </div>
            </section>

            <section className="pl-5 lg:pt-28">
               <div className="lg:flex lg:justify-between">
                <div className="flex flex-wrap content-center gap-12 pt-28 lg:pt-0">
                <h2 className='about-captions pt-2 font-bold'> The process </h2>
                <img src={ Uparrow } alt="up arrow"/>
                </div>

                <p className="about-content pt-4 lg:pt-2 steps-about">
                A Step-by-Step Guide to Getting Started with Project X
                </p>
               </div>

              {/*Steps*/}
              <div className='grid pr-4 gap-3 pt-10'>

                <div className="lg:flex lg:items-center lg:justify-between lg:gap-40">
                  <h6 className="steps">step 1</h6>
                  <h3 className="steps-header">Application</h3>
                  <p className="steps-text pt-5">
                    Complete the application form to let us know your skills, interests,
                    and which role you’d like to take on. We are seeking individuals with a passion for tech
                    and a desire to make a difference, whether you’re a project manager, designer, developer, or content creator.
                  </p>
                  <img src={ Dividerlight } alt="a light divider" className='pt-6 lg:hidden'/>
                </div>

                <img src={ Dividerlight } alt="a light divider" className='pt-6 hidden lg:block lg:w-full'/>

                <div className="lg:flex lg:items-center lg:justify-between lg:gap-34">
                  <h6 className="steps pt-3">step 2</h6>
                  <h3 className="steps-header">Team Formation</h3>
                  <p className="steps-text pt-5">
                  Once accepted, you’ll be placed into a team that consists of various roles such as developers, designers, content creators, and project managers. 
                  Each team will be assigned to work on a project aimed at addressing a specific problem with business potential. Teams will receive mentorship from experienced industry professionals to help guide them.
                  </p>
                  <img src={ Dividerlight } alt="a light divider" className='pt-6 lg:hidden'/>
                </div>

                <img src={ Dividerlight } alt="a light divider" className='pt-6 hidden lg:block lg:w-full'/>

                <div className="lg:flex lg:items-center lg:justify-between lg:gap-40">
                  <h6 className="steps pt-3">step 3</h6>
                  <h3 className="steps-header">Development</h3>
                  <p className="steps-text pt-5">
                  The project kicks off! Teams will work together to ideate, design, develop, and implement solutions to their designated challenge. 
                  You’ll collaborate using tools like Slack, Trello, or Asana for task management and GitHub for code collaboration. 
                  Weekly progress meetings and milestones will ensure everyone is on track.
                    </p>
                  <img src={ Dividerlight } alt="a light divider" className='pt-6 lg:hidden'/>
                </div>

                <img src={ Dividerlight } alt="a light divider" className='pt-6 hidden lg:block lg:w-full'/>

                <div className="lg:flex lg:items-center lg:justify-between lg:gap-34">
                  <h6 className="steps pt-3">step 4</h6>
                  <h3 className="steps-header">Mentorshiop and Guidance</h3>
                  <p className="steps-text pt-5 steps-adjust">
                  Throughout the development phase, your team will be mentored by industry experts. 
                  These mentors will provide feedback, help solve technical challenges, and offer advice on best practices. 
                  In addition, you’ll have access to workshops and webinars to sharpen your skills in areas like UI/UX design, coding best practices, and project management.
                    </p>
                    <img src={ Dividerlight } alt="a light divider" className='pt-6 lg:hidden'/>
                </div>

                <img src={ Dividerlight } alt="a light divider" className='pt-6 hidden lg:block lg:w-full'/>

                <div className="lg:flex lg:items-center lg:justify-between lg:gap-34">
                  <h6 className="steps pt-3">step 5</h6>
                  <h3 className="steps-header">Final Project and Presentation</h3>
                  <p className="steps-text pt-5 steps-adjust">
                  Upon completing the project, teams will present their final solution to a panel of mentors and industry leaders. 
                  Feedback will be provided, and outstanding projects may receive further support, recognition, or investment opportunities for scaling.
                  </p>
                  <img src={ Dividerlight } alt="a light divider" className='pt-6 lg:hidden'/>
                </div>

                <img src={ Dividerlight } alt="a light divider" className='pt-6 hidden lg:block lg:w-full'/>

                <div className="lg:flex lg:items-center lg:justify-between lg:gap-20">
                  <h6 className="steps pt-3">step 6</h6>
                  <h3 className="steps-header">Post-Program Growth</h3>
                  <p className="steps-text pt-5 steps-adjust">
                  Once the program concludes, we encourage teams to continue developing their projects into startups. 
                  Project X is designed with scalability in mind, so participants can take their projects forward, potentially generating tech jobs and contributing real-world solutions to the market.
                  </p>
                </div>
              </div>
            </section>

            <section className="pl-5 pt-20 pb-16">
                <h2 className="whyvolunteer"> Why Volunteer?</h2>

                <div className="flex flex-col flex-wrap gap-14 lg:ml-72">
                <p className="about-content pt-4">
                By volunteering at Project X, you're not just joining a program—you’re starting a journey of growth and collaboration. 
                You’ll learn by doing, gain insights from experienced mentors, and create something tangible with the potential to scale into a full-fledged business. 
                Best of all, you’ll work alongside peers who are equally passionate about creating meaningful solutions in tech.
                </p>
                <Link to="/application">
                <button className="volunteer ml-auto mr-2"> Volunteer </button>
                </Link>
                </div>
            </section>
        </div>
    )
}

export default Main;