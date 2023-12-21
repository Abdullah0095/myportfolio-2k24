import React from 'react';
import { Link } from 'react-router-dom';

const HomeMainContact = () => {

    function sendEmail(e) {
        e.preventDefault();
        alert("You want to contact with me, Please press OK");

        emailjs.sendForm('service_9jj44f4', 'template_tw70rri', e.target, 'user_MZQZJ2L8o1DDTmBVE2NrF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }


    return (
        <div className='py-24'>
            <div className='grid md:grid-cols-3'>
                <div className="flex justify-center col-span-2 border-2 border-gray py-4 mx-12">
                    <form className="contact-form" onSubmit={sendEmail}>

                        <div className='flex'>
                            <input className='h-12 w-80 m-2 bg-white outline-none text-black rounded-md text-xl font-semibold text-center' placeholder='type your name' type="text" name="user_name" required /> <br />

                            <input className='h-12 w-80 m-2 bg-white outline-none text-black rounded-md text-xl font-semibold text-center' placeholder='type your email' type="email" name="user_email" required /> <br />
                        </div>

                        <textarea className='m-2 bg-white outline-none text-black rounded-md text-xl font-semibold px-4' cols={55} rows={4} placeholder='type your message' name="message" required /> <br />
                        <input className='border-2 border-green-500 m-2 h-12 w-24 text-xl font-serif font-bold hover:bg-slate-900 hover:text-white' type="submit" value="Send" />
                    </form>
                </div>

                <div>
                    <p className="mt-3"><strong>Email:</strong><em> <span className="ml-2">abdullahalmizan.bd@gmail.com</span></em></p>

                    <div className='flex'>
                        <Link target='_blank' to='https://www.linkedin.com/in/abdullah-95/'><img src="https://i.ibb.co/nLRJx5y/linkedin.png" alt="" /></Link>
                        <Link target='_blank' to='https://github.com/Abdullah0095'><img src="https://i.ibb.co/3sF7vqF/github.png" alt="" /></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeMainContact;