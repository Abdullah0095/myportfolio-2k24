import React from 'react';
import { Link } from 'react-router-dom';

const HomeMainContact = () => {

    function sendEmail(e) {
        e.preventDefault();


        emailjs.sendForm('service_j5z7t6i', 'template_tw70rri', e.target, 'user_MZQZJ2L8o1DDTmBVE2NrF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }


    return (
        <div className='py-20 bg-black'>
            <div className='grid md:grid-cols-3'>
                <div className="flex justify-center md:col-span-2 border-2 border-gray py-4 mx-12">
                    <form onSubmit={sendEmail}>

                        <div className='flex'>
                            <input className='h-12 w-80 m-2 bg-white outline-none text-black rounded-md text-xl font-semibold text-center' placeholder='type your name' type="text" name="user_name" required /> <br />
                            <input className='h-12 w-80 m-2 bg-white outline-none text-black rounded-md text-xl font-semibold text-center' placeholder='type your email' type="email" name="user_email" required /> <br />
                        </div>

                        <textarea className='m-2 bg-white outline-none text-black rounded-md text-xl font-semibold px-4' cols={55} rows={4} placeholder='type your message' name="message" required /> <br />
                        <input className='border-2 border-green-500 m-2 h-12 w-24 text-xl font-serif font-bold hover:bg-slate-900 hover:text-white' type="submit" value="Send" />
                    </form>
                </div>

                <div>
                    <p className="py-6 text-white text-xl"><strong>Email:</strong><em> <span className="px-2">abdullahalmizan.bd@gmail.com</span></em></p>

                    <div className='flex'>
                        <Link className='px-2' target='_blank' to='https://www.linkedin.com/in/abdullah-95/'><img src="https://i.ibb.co/nLRJx5y/linkedin.png" alt="" /></Link>
                        <Link className='px-2' target='_blank' to='https://github.com/Abdullah0095'><img src="https://i.ibb.co/3sF7vqF/github.png" alt="" /></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeMainContact;