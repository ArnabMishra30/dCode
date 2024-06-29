import React from 'react'

function About() {
    return (
        <>
            <div>
                {/* <section className=" py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                                About Us
                            </h2>
                            <p className="mt-4 text-lg text-gray-300">
                                Welcome to dCode, where we are passionate about <span className="text-blue-400">empowering individuals through coding.</span>
                            </p>
                        </div>
                        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="bg-gray-800 rounded-lg p-6 transition-transform duration-300 transform hover:-translate-y-2 hover:cursor-pointer">
                                <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
                                <p className="mt-4 text-lg text-gray-300">
                                    At dCode, we are dedicated to providing a platform for individuals of all backgrounds to explore, create, and excel in coding. Through engaging workshops, projects, and events, we aim to empower our members with the skills, resources, and support needed to thrive in the ever-evolving world of technology. Together, we aspire to push the boundaries of what is possible and inspire positive change through code.
                                </p>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-6 transition-transform duration-300 transform hover:-translate-y-2 hover:cursor-pointer">
                                <h3 className="text-2xl font-semibold text-white">Our Vision</h3>
                                <p className="mt-4 text-lg text-gray-300">
                                    Our vision is to cultivate a vibrant community of passionate coders, fostering innovation, collaboration, and lifelong learning.
                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}
                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                                About Us
                            </h2>
                            <p className="mt-4 text-lg text-gray-300">
                                Welcome to dCode, where we are passionate about{' '}
                                <span className="text-blue-400">empowering individuals through coding.</span>
                            </p>
                        </div>
                        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="bg-gray-800 rounded-lg p-6 hover:shadow-xl hover:translate-y-2 transition duration-300">
                                <h3 className="text-2xl font-semibold text-white hover:text-blue-500 transition-colors duration-300">
                                    Our Mission
                                </h3>
                                <p className="mt-4 text-lg text-gray-300">
                                    At dCode, we are dedicated to providing a platform for individuals of all backgrounds to explore, create, and excel in coding. Through engaging workshops, projects, and events, we aim to empower our members with the skills, resources, and support needed to thrive in the ever-evolving world of technology. Together, we aspire to push the boundaries of what is possible and inspire positive change through code.
                                </p>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-6 hover:shadow-xl hover:translate-y-2 transition duration-300">
                                <h3 className="text-2xl font-semibold text-white hover:text-blue-500 transition-colors duration-300">
                                    Our Vision
                                </h3>
                                <p className="mt-4 text-lg text-gray-300">
                                    Our vision is to cultivate a vibrant community of passionate coders, fostering innovation, collaboration, and lifelong learning.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default About