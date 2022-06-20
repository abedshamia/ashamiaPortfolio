import React, { useEffect } from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications'
import 'react-notifications/lib/notifications.css';
const Contact = () => {

    const createNotifications = (type) => {
        return () => {
            switch (type) {
            case 'success':
                NotificationManager.success('Success message', 'Your message has been sent successfully', 3000);
                break;
                default:
                    NotificationManager.error('Error message', 'Something went wrong', 3000);
                    break;
            }
        }
    }
    useEffect(() => {
        const form = document.querySelector('#form');

        form.addEventListener('submit', e => {
            const name = document.querySelector('input[name="name"]').value.trim();
            const email = document.querySelector('input[name="email"]').value.trim();
            const message = document.querySelector('textarea[name="message"]').value.trim();
            let errorMessages = [];
          
            // eslint-disable-next-line no-unused-expressions
            document.querySelector('.error') ? document.querySelector('.error').remove() : null;
          
            if (!name && !email && !message) {
              errorMessages.push('Please fill in all fields');
            }
          
            if (!name) {
              errorMessages.push('Please enter your name');
            }
          
            if (!email) {
              errorMessages.push('Please enter your email');
            }
          
            if (!message) {
              errorMessages.push('Please enter a message');
            }
          
            if (errorMessages.length > 0) {
              e.preventDefault();
              const errorList = document.createElement('ul');
              errorList.classList.add('error');
              form.appendChild(errorList);
              errorMessages.forEach(error => {
                const errorItem = document.createElement('li');
                errorItem.classList.add('error-item');
                errorItem.textContent = error;
                errorList.appendChild(errorItem);
              });
            } else {
                e.preventDefault();
                const success = createNotifications('success');
                success();

            }
          });
    }, [])
  return (
    <section className="">
    <div className="Contact reveal" id="Contact">
            <div className="Contact-content-head">
            <h2>Get <span>In touch</span></h2>
            <p>I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS.</p>
            </div>
        <div className="container-info">
         <div className="contact-info">
            <div className="contact-info-phone">
                <span>Phone</span>
                <i className="fa-brands fa-whatsapp"></i>
                <a href="https://api.whatsapp.com/send?phone=970597997119" target="_blank" className="contact-link" rel="noreferrer">+970 597 997 119</a>
            </div>
            <div className="contact-info-email">
                <span>Email</span>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:ab.shamia96@gmail.com" target="_blank" className="contact-link email" rel="noreferrer">ab.shamia96@gmail.com</a>
            </div>
          
         <div className="contact-soical">
             <span>Social Profiles</span><a href="https://twitter.com/DevAbedalrahman" target="_blank" rel="noreferrer">
                 <i className="fa-brands fa-twitter"></i>
             </a>
             <a href="https://github.com/abedshamia" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/abedshamia/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/ashamia96/" target="_blank" rel="noreferrer">

                <i className="fa-brands fa-instagram"></i>
            </a>
         </div> 
        </div>
       
        <div className="suggestion">
            <p>If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I will reply you shortly.</p>
            <form method='post' data-netlify="true" id="form" name='contact-form' >
                <input type='hidden' name='form-name' value='contact-form' />
           <div className="button" >
             
               <input  type="text" placeholder="YOUR NAME" className="btn1" name="name" />
               <input type="email" placeholder="YOUR EMAIL " className="btn2" name="email" />
           </div>
           <textarea placeholder="    Your message..."  id="comment" className="Areacomment" name="message" ></textarea>
           <div className="sendmessage">
           <button>
            <i className="fa-regular fa-paper-plane"></i>
            <span>SEND MESSAGE</span>
           </button>
          </div>
         </form>
        </div>
         <NotificationContainer/>
        </div>
    </div>
</section>
  )
}

export default Contact