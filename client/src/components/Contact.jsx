import React from 'react'

function Contact() {
    return (
        <>
            <div>
                {/* <section className="py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold text-gray-200 sm:text-4xl">
                                Contact Us
                            </h2>
                            <p className="mt-4 text-lg text-gray-300">
                                We'd love to hear from you! Reach out to us using the form below or contact us directly.
                            </p>
                        </div>
                        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-200">Send us a message</h3>
                                <form className="mt-4">
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">Name</label>
                                        <input type="text" id="name" name="name" className="form-input w-full px-4 py-2 rounded-lg text-gray-200 bg-gray-400 border border-gray-300 focus:border-blue-500 focus:outline-none" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">Email</label>
                                        <input type="email" id="email" name="email" className="form-input w-full px-4 py-2 rounded-lg text-gray-200 bg-gray-400 border border-gray-300 focus:border-blue-500 focus:outline-none" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">Message</label>
                                        <textarea id="message" name="message" rows="4" className="form-textarea w-full px-4 py-2 rounded-lg text-gray-200 bg-gray-400 border border-gray-300 focus:border-blue-500 focus:outline-none"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                </form>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-200">Contact Information</h3>
                                <p className="mt-4 text-base text-gray-300">
                                    Address: 1234 Main Street, City, State, Zip<br />
                                    Phone: +1 (123) 456-7890<br />
                                    Email: info@example.com
                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}
                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold text-gray-200 sm:text-4xl">
                                Get in touch
                            </h2>
                            <p className="mt-4 text-lg text-gray-300">
                                We'd love to hear from you! Reach out to us using the form below or contact us directly.
                            </p>
                        </div>
                        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-200">Send us a message</h3>
                                <form className="mt-4">
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">Name</label>
                                        <input type="text" id="name" name="name" className="form-input w-full px-4 py-2 rounded-lg text-gray-200 bg-gray-400 border border-gray-300 focus:border-blue-500 focus:outline-none" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">Email</label>
                                        <input type="email" id="email" name="email" className="form-input w-full px-4 py-2 rounded-lg text-gray-200 bg-gray-400 border border-gray-300 focus:border-blue-500 focus:outline-none" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">Message</label>
                                        <textarea id="message" name="message" rows="4" className="form-textarea w-full px-4 py-2 rounded-lg text-white bg-gray-400 border border-gray-300 focus:border-blue-500 focus:outline-none"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-full py-2 rounded-lg bg-red-300 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send Message</button>
                                </form>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-200">Contact Information</h3>
                                <p className="mt-4 text-base text-gray-300">
                                    Address: 1234 Main Street, City, State, Zip<br />
                                    Phone: +1 (123) 456-7890<br />
                                    Email: info@example.com
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Contact