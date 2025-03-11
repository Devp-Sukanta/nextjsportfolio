'use client'

import { useState } from "react"



export default function Contact() {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        subject: ''
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);




    const handleChange = (e) => {
        const { name, value } = e.target;

        setData({
            ...data,
            [name]: value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log(data)

        const { name, email, phone, subject, message } = data;


        if (!name || !email || !phone || !subject || !message) {
            setError({ name: 'formfielderror', message: 'please provide valid name,email,phone number and message' });
            setTimeout(()=>{
                setError(null);
            },2000)
            return 
        };


        setLoading(true);

        try {
            const formRes = await fetch("/api/v1/contact", {
                method: "POST",
                body: JSON.stringify(data),
                headers: { referrer: document.referrer || "google" }
            });

            const res = await formRes.json();
            // console.log(res,'response');
            if (res.success) {
                setSuccess({ name: 'formsubmitsuccess', message: res?.message || 'form submitted successfully.' });
                setData({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                    subject: ''
                });
                setTimeout(()=>{
                    setSuccess(null);
                },2000)
            } else {
                setError({ name: 'formfielderror', message: res?.message || 'something went wrong. try agin after some time' })
            }
        } catch (error) {
            setError({ name: 'formfielderror', message: 'something went wrong. try agin after some time' });
            setTimeout(()=>{
                setError(null);
            },2000)
        }

        setLoading(false)
    }

    return (
        <section className="bg-[#1a1a1a] py-16 px-4 md:px-8 lg:px-16" id="contact">
            <div className="max-w-6xl mx-auto">
                {/* Heading with red accent */}
                <div className="text-center mb-12">
                    <div className="w-16 h-1 bg-red-600 mx-auto mb-4"></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Contact With Me</h2>
                </div>

                {/* Contact content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Contact info cards - left side */}
                    <div className="space-y-6">
                        {/* Address card */}
                        <div className="bg-[#222222] p-6 rounded-md flex gap-3 flex-row items-center md:items-start" style={{ alignItems: "center" }}>
                            <div className="w-8 h-8 flex items-center justify-center">
                                <img src="/assets/imgs/location.png" alt="location" />
                            </div>
                            <p className="text-gray-300 text-center md:text-left">Panskura, E.Medinipur, W.B, 721139</p>
                        </div>

                        {/* Phone card */}
                        <div className="bg-[#222222] p-6 rounded-md flex gap-3 flex-row items-center md:items-start" style={{ alignItems: "center" }}>
                            <div className="w-8 h-8 flex items-center justify-center">
                                <img src="/assets/imgs/telephone.png" alt="telephone" />
                            </div>
                            <p className="text-gray-300 text-center md:text-left">(+91) 78725-28238</p>
                        </div>

                        {/* Email card */}
                        <div className="bg-[#222222] p-6 rounded-md flex gap-3 flex-row items-center md:items-start" style={{ alignItems: "center" }}>
                            <div className="w-8 h-8 flex items-center justify-center">
                                <img src="/assets/imgs/mail.png" alt="mail" className="w-full h-auto" />
                            </div>
                            <p className="text-gray-300 text-center md:text-left">sukanta7.official@gmail.com</p>
                        </div>
                    </div>

                    {/* Contact form - right side (spans 2 columns on md screens) */}
                    <div className="md:col-span-2">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Name"
                                        className="w-full bg-[#222222] text-white p-3 rounded-md border-0 focus:ring-2 focus:ring-red-600 focus:outline-none"
                                        name="name"
                                        value={data?.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Enter Your Phone"
                                        className="w-full bg-[#222222] text-white p-3 rounded-md border-0 focus:ring-2 focus:ring-red-600 focus:outline-none"
                                        name="phone"
                                        value={data?.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email"
                                        className="w-full bg-[#222222] text-white p-3 rounded-md border-0 focus:ring-2 focus:ring-red-600 focus:outline-none"
                                        name="email"
                                        value={data?.email}
                                        onChange={handleChange}

                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Subject"
                                        className="w-full bg-[#222222] text-white p-3 rounded-md border-0 focus:ring-2 focus:ring-red-600 focus:outline-none"
                                        name="subject"
                                        value={data?.subject}
                                        onChange={handleChange} />
                                </div>
                            </div>
                            <div>
                                <textarea
                                    placeholder="Type Your Message"
                                    rows={3}
                                    className="w-full bg-[#222222] text-white p-3 rounded-md border-0 focus:ring-2 focus:ring-red-600 focus:outline-none resize-none"
                                    name="message"
                                    value={data?.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className="text-center md:text-left">
                                <button
                                    type="submit"
                                    className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
                                >
                                    {loading ? "Please Wait..." : "Send Message"}
                                </button>
                            </div>
                            <div className="text-center lg:text-start">

                                {error && error.name === "formfielderror" && <p className="text-red-500 font-bold border border-red-300 rounded-lg inline-block px-5 py-2 relative">
                                    <span className="flex items-center">
                                        <img src="/assets/imgs/cancel.png" alt="cancelicon" className="h-6 w-6 mr-2" />
                                        {error?.message}
                                    </span>
                                    <span className="absolute -top-2 -right-1.5 text-black h-5 w-5 text-center font-light rounded-full bg-red-100 cursor-pointer" onClick={() => setError(null)}>X</span>
                                </p>}

                                {success && success.name === "formsubmitsuccess" && <p className="text-green-600 font-bold border border-green-300 rounded-lg inline-block px-5 py-2 relative">
                                    <span className="flex items-center">
                                        <img src="/assets/imgs/success.png" alt="cancelicon" className="h-6 w-6 mr-2" />
                                        {success?.message}
                                    </span>
                                    <span className="absolute -top-2 -right-1.5 text-black h-5 w-5 text-center font-light rounded-full bg-red-100 cursor-pointer text-sm" onClick={() => setSuccess(null)}>X</span>
                                </p>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

