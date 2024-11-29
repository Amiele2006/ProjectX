import Uparrow from "../assets/icons/up arrow.png";
import IconClosed from "../assets/icons/trailingIcon-closed.png";
import IconOpen from "../assets/icons/trailingIcon-open.png";
import {useState} from 'react';
// import Modal from './ModalComponent';

function FAQ() {

    const [isOpen, setIsOpen] = useState(false)

    const divstyles = {
        WebkitLineClamp: isOpen ? 'none' : 3,
        WebkitBoxOrient: 'horizontal',
        overflow: 'block',
        display: isOpen ? 'block' : 'none',
    }

    return(
        <section className="lg:flex lg:items-start lg:pt-24 lg:gap-32">

            <div className="flex flex-wrap content-center gap-12 pt-24 lg:pt-8">
            <h2 className='faq pl-5 pt-3 bold'>Frequently asked questions</h2>
            <img src={ Uparrow } alt="up arrow"/>
            </div>

            <div className="grid pt-10 pl-5 pr-4 gap-3 lg:w-full lg:pr-0">

                <div className="faq-p flex gap-20 lg:justify-between">
                       <h2 className="faq-text">What is Project X?</h2>

                       <button className="flip" onClick={() => setIsOpen(!isOpen)}>
                        {/* Changing the icon open and closed */}
                       <img src={isOpen ? IconOpen : IconClosed} alt={isOpen ? 'Icon open' : 'IconClosed '} className="Iconclosed mt-1"/> 
                       </button>

                       {isOpen && (
                     <div style={divstyles}>
                        <p> Project X is a volunteer-driven initiative that gathers tech professionals to work on real-world, business-viable projects. 
                            The program offers hands-on experience and mentorship to help participants grow their skills while building scalable solutions.
                        </p>
                    </div>
                       )}
                    
                </div>

                <div className="faq-p-big flex gap-3 lg:justify-between">
                    <h2 className="faq-text">Who can apply to Project X?</h2>
                    <img src={ IconClosed } alt="icon closed" className="Iconclosed mt-1 mr-3 lg:mr-0 lg:"/>
                </div>

                <div className="faq-p flex paid-header lg:justify-between">
                    <h2 className="faq-text">Is Project X paid?</h2>
                    <img src={ IconClosed } alt="icon closed" className="Iconclosed mt-1"/>
                </div>

                <div className="faq-p-big flex gap-10">
                    <h2 className="faq-text">What happens after the program?</h2>
                    <img src={ IconClosed } alt="icon closed" className="Iconclosed mt-1 mr-3 lg:mr-0 lg:ml-3"/>
                </div>
            </div>
        </section>
    )
}

export default FAQ;