import React from "react";

//Assets
import Uparrow from "../../assets/icons/up arrow.png"; 
import oneIcon from "../../assets/icons/Number One-Misc icon.png";
import TwoIcon from "../../assets/icons/Number Two-Misc icon.png";
// import ThreeIcon from "../../assets/icons/Number Three-Misc icon.png";
import Dividerlight from "../../assets/icons/Dividers (1).png";

//Tablet
import UparrowRight from '../../assets/icons/right-arrow.png';

function Roles(){
    return (
      <div className="grid gap-6 pt-8 roles-container lg:w-full">
        {/*Project Managers*/}
        <div className="roles-lists lg:w-full lg:pb-8">
          <div className="lg:flex lg:justify-between">
            <div className="flex flex-wrap content-center lg:order-2 lg:gap-14">
              <h2 className="project-managers-header pt-3 font-bold lg:order-2">
                Project Managers
              </h2>
              <img src={Uparrow} alt="up arrow" className="lg:hidden" />
              <img
                src={UparrowRight}
                alt="right arrow"
                className="hidden lg:block lg:order-1 rightarrow"
              />
            </div>
            <p className="pm-text pt-6 lg:order-1">
              Lead your team to success. Project managers are responsible for
              organizing the team, assigning tasks, and ensuring project
              milestones are met. You’ll coordinate between team members and
              mentors to keep the project on track.
            </p>
          </div>

          <div>
            <div className="grid pr-4 gap-3 pt-10 lg:grid-cols-2 place-content-between lg:w-full">
              <div className="flex gap-5 flex-wrap pt-2 items-center">
                <img src={oneIcon} alt="a number one icon" />
                <h2 className="values padding-top pb-1">Skills Needed</h2>
              </div>
              <p className="values-text pt-6 values-pm">
                Strong leadership, organizational skills, and experience with
                task management tools.
              </p>
            </div>

            <img
              src={Dividerlight}
              alt="a light divider"
              className="pt-6 lg:w-full lg:mt-6 lg:pt-0"
            />

            <div className="lg:flex lg:justify-between">
              <div className="flex gap-5 flex-wrap pt-8 items-center">
                <img src={TwoIcon} alt="a number one icon" />
                <h2 className="values padding-top pb-1">What You'll Gain</h2>
              </div>
              <p className="values-text pt-6 pb-2 values-pm">
                Experience managing real-world tech projects, improving
                communication, and collaborating with a cross-functional team.
              </p>
            </div>
          </div>
        </div>

        {/*Frontend Developers*/}
        <div className="roles-lists lg:w-full lg:pb-8">
          <div className="lg:flex lg:justify-between">
            <div className="flex flex-wrap content-center lg:order-2 lg:gap-14">
              <h2 className="frontend-developers-header pt-3 font-bold lg:order-2">
                Frontend Developers
              </h2>
              <img src={Uparrow} alt="up arrow" className="lg:hidden" />
              <img
                src={UparrowRight}
                alt="right arrow"
                className="hidden lg:block lg:order-1 rightarrow"
              />
            </div>
            <p className="pm-text pt-6 lg:order-1">
              Create intuitive, user-friendly interfaces that bring the project
              to life. As a frontend developer, you’ll be responsible for
              building responsive and visually appealing user interfaces.
            </p>
          </div>

          <div>
            <div className="grid pr-4 gap-3 pt-10 lg:grid-cols-2 place-content-between lg:w-full">
              <div className="flex gap-5 flex-wrap pt-2 items-center">
                <img src={oneIcon} alt="a number one icon" />
                <h2 className="values padding-top pb-1">Skills Needed</h2>
              </div>
              <p className="values-text pt-6 values-pm">
                Proficiency in HTML, CSS, JavaScript, and frameworks like React
                or Angular.
              </p>
            </div>

            <img
              src={Dividerlight}
              alt="a light divider"
              className="pt-6 lg:w-full lg:mt-6 lg:pt-0"
            />

            <div className="lg:flex lg:justify-between">
              <div className="flex gap-5 flex-wrap pt-8 items-center">
                <img src={TwoIcon} alt="a number one icon" />
                <h2 className="values padding-top pb-1">What You'll Gain</h2>
              </div>
              <p className="values-text pt-6 pb-2 values-pm">
                Experience developing user-friendly web applications and
                collaborating with designers and backend developers.
              </p>
            </div>
          </div>
        </div>

        {/*Backend Developers*/}
        <div className="roles-lists lg:w-full lg:pb-8">
          <div className="lg:flex lg:justify-between">
            <div className="flex flex-wrap content-center lg:order-2 lg:gap-14">
              <h2 className="backend-developers-header pt-3 font-bold lg:order-2">
                Backend Developers
              </h2>
              <img src={Uparrow} alt="up arrow" className="lg:hidden" />
              <img
                src={UparrowRight}
                alt="right arrow"
                className="hidden lg:block lg:order-1 rightarrow"
              />
            </div>
            <p className="pm-text pt-6 lg:order-1">
              Handle the behind-the-scenes functionality that makes everything
              work. Backend developers build the server, database, and logic
              layers that power the project.
            </p>
          </div>

          <div>
            <div className="grid pr-4 gap-3 pt-10 lg:grid-cols-2 place-content-between lg:w-full">
              <div className="flex gap-5 flex-wrap pt-2 items-center">
                <img src={oneIcon} alt="a number one icon" />
                <h2 className="values padding-top pb-1">Skills Needed</h2>
              </div>
              <p className="values-text pt-6 values-pm">
                Proficiency in backend technologies like Python, Django,
                Node.js, and database management (MySQL, PostgreSQL, etc.).
              </p>
            </div>

            <img
              src={Dividerlight}
              alt="a light divider"
              className="pt-6 lg:w-full lg:mt-6 lg:pt-0"
            />

            <div className="lg:flex lg:justify-between">
              <div className="flex gap-5 flex-wrap pt-8 items-center">
                <img src={TwoIcon} alt="a number one icon" />
                <h2 className="values padding-top pb-1">What You'll Gain</h2>
              </div>
              <p className="values-text pt-6 pb-2 values-pm">
                Experience in database management, API development, and building
                scalable server-side systems.
              </p>
            </div>
          </div>
        </div>

        {/*Mobile Developers*/}
        <div className="roles-lists lg:w-full lg:pb-8">
          <div className="lg:flex lg:justify-between">
            <div className="flex flex-wrap content-center lg:order-2 lg:gap-14">
              <h2 className="mobile-developers-header pt-3 font-bold lg:order-2">
                Mobile Developers
              </h2>
              <img src={Uparrow} alt="up arrow" className="lg:hidden" />
              <img
                src={UparrowRight}
                alt="right arrow"
                className="hidden lg:block lg:order-1 rightarrow"
              />
            </div>
            <p className="pm-text pt-6 lg:order-1">
              Build mobile apps that ensure smooth user experiences on Android
              and iOS. You’ll develop and optimize apps that are fast,
              responsive, and user-friendly.
            </p>
          </div>

          <div>
            <div className="grid pr-4 gap-3 pt-10 lg:grid-cols-2 place-content-between lg:w-full">
              <div className="flex gap-5 flex-wrap pt-2 items-center">
                <img src={oneIcon} alt="a number one icon" />
                <h2 className="values padding-top pb-1">Skills Needed</h2>
              </div>
              <p className="values-text pt-6 values-pm">
                Knowledge of mobile development frameworks like Flutter or React
                Native, or native development with Swift or Kotlin.
              </p>
            </div>

            <img
              src={Dividerlight}
              alt="a light divider"
              className="pt-6 lg:w-full lg:mt-6 lg:pt-0"
            />

            <div className="lg:flex lg:justify-between">
              <div className="flex gap-5 flex-wrap pt-8 items-center">
                <img src={TwoIcon} alt="a number one icon" />
                <h2 className="values padding-top pb-1">What You'll Gain</h2>
              </div>
              <p className="values-text pt-6 pb-2 values-pm">
                Hands-on experience in mobile development and cross-platform app
                optimization.
              </p>
            </div>
          </div>
        </div>

        {/*Dev Ops Engineers*/}
        <div className="roles-lists lg:w-full lg:pb-8">
          <div className="lg:flex lg:justify-between">
            <div className="flex flex-wrap content-center lg:order-2 lg:gap-14">
              <h2 className="devops-engineer-header pt-3 font-extrabold lg:order-2">
                DevOps Engineers
              </h2>
              <img src={Uparrow} alt="up arrow" className="lg:hidden" />
              <img
                src={UparrowRight}
                alt="right arrow"
                className="hidden lg:block lg:order-1 rightarrow"
              />
            </div>
            <p className="pm-text pt-6 lg:order-1">
              Ensure smooth operations by managing infrastructure, CI/CD
              pipelines, and deployment processes. DevOps engineers streamline
              the development process and ensure projects are scalable and
              maintainable.
            </p>
          </div>

          <div>
            <div className="grid pr-4 gap-3 pt-10 lg:grid-cols-2 place-content-between lg:w-full">
              <div className="flex gap-5 flex-wrap pt-2 items-center">
                <img src={oneIcon} alt="a number one icon" />
                <h2 className="values padding-top pb-1">Skills Needed</h2>
              </div>
              <p className="values-text pt-6 values-pm">
                Proficiency in cloud platforms like AWS, Azure, and tools like
                Docker, Kubernetes.
              </p>
            </div>

            <img
              src={Dividerlight}
              alt="a light divider"
              className="pt-6 lg:w-full lg:mt-6 lg:pt-0"
            />

            <div className="lg:flex lg:justify-between">
              <div className="flex gap-5 flex-wrap pt-8 items-center">
                <img src={TwoIcon} alt="a number one icon" />
                <h2 className="values padding-top pb-1">What You'll Gain</h2>
              </div>
              <p className="values-text pt-6 pb-2 values-pm">
                Real-world experience managing cloud-based infrastructure and
                optimizing deployment pipelines.
              </p>
            </div>
          </div>
        </div>

        {/*Content Creators*/}
        <div className="roles-lists lg:w-full lg:pb-8">
          <div className="lg:flex lg:justify-between">
          <div className="flex flex-wrap content-center lg:order-2 lg:gap-14">
            <h2 className="content-creator-header pt-3 font-extrabold lg:order-2">
              Content Creators
            </h2>
            <img src={Uparrow} alt="up arrow" className="lg:hidden" />
            <img
               src={UparrowRight}
               alt="right arrow"
               className="hidden lg:block lg:order-1 rightarrow"
            />
          </div>
          <p className="pm-text pt-6 lg:order-1">
            Share the journey of your team’s project through compelling content.
            You’ll create blog posts, social media updates, and marketing
            materials to spread the word about your project’s progress and
            impact.
          </p>
          </div>

          <div>
            <div className="grid pr-4 gap-3 pt-10 lg:grid-cols-2 place-content-between lg:w-full">
              <div className="flex gap-5 flex-wrap pt-2 items-center">
                <img src={oneIcon} alt="a number one icon" />
                <h2 className="values padding-top pb-1">Skills Needed</h2>
              </div>
              <p className="values-text pt-6 values-pm">
                Strong writing skills, social media strategy, content creation
              </p>
            </div>

            <img
              src={Dividerlight}
              alt="a light divider"
              className="pt-6 lg:w-full lg:mt-6 lg:pt-0"
          />

            <div className="lg:flex lg:justify-between">
              <div className="flex gap-5 flex-wrap pt-8 items-center">
                <img src={TwoIcon} alt="a number one icon" />
                <h2 className="values padding-top pb-1">What You'll Gain</h2>
              </div>
              <p className="values-text pt-6 pb-2 values-pm">
                Experience in content marketing, portfolio-worthy materials, and
                digital storytelling.
              </p>
            </div>
          </div>
        </div>

        {/*Graphic/Visual Designers*/}
        <div className="roles-lists  lg:w-full lg:pb-8">

         <div className="lg:flex lg:justify-between">
          <div className="flex flex-wrap content-center  lg:order-2 lg:gap-14">
            <h2 className="graphics-designer-header pt-3 font-extrabold lg:order-2">
              Graphic / Visual Designers
            </h2>
            <img src={Uparrow} alt="up arrow" className="lg:hidden" />
            <img
               src={UparrowRight}
               alt="right arrow"
               className="hidden lg:block lg:order-1 rightarrow"
            />
          </div>
          <p className="pm-text pt-6 lg:order-1">
            Design the visual elements that make each project stand out. From
            branding and logos to UI/UX designs, graphic designers play a key
            role in crafting the look and feel of the project.
          </p>
          </div>

          <div>
            <div className="grid pr-4 gap-3 pt-10 lg:grid-cols-2 place-content-between lg:w-full">
              <div className="flex gap-5 flex-wrap pt-2 items-center">
                <img src={oneIcon} alt="a number one icon" />
                <h2 className="values padding-top pb-1">Skills Needed</h2>
              </div>
              <p className="values-text pt-6 values-pm">
                Proficiency in design tools like Adobe Creative Suite, Figma, or
                Sketch.
              </p>
              
            </div>

            <img
              src={Dividerlight}
              alt="a light divider"
              className="pt-6 lg:w-full lg:mt-6 lg:pt-0"
          />

            <div className="lg:flex lg:justify-between">
              <div className="flex gap-5 flex-wrap pt-8 items-center">
                <img src={TwoIcon} alt="a number one icon" />
                <h2 className="values padding-top pb-1">What You'll Gain</h2>
              </div>
              <p className="values-text pt-6 pb-2 values-pm">
                Experience designing for digital products, developing user
                interfaces, and collaborating with tech teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Roles;