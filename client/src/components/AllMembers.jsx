import React from 'react'
import { Link } from "react-router-dom";
import Crad from './Crad';
import membersData from '../../public/members.json'

function AllMembers() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 my-9'>
                <div className="mt-28 items-center justify-center text-center">
                    <h1 className="text-2xl  md:text-4xl">
                        Meet Our Coding Club {" "}
                        <span className="text-pink-500"> Members! :)</span>
                    </h1>
                    <p className="mt-12">
                        Welcome to our coding club's members page! Here, you'll find a diverse group of passionate individuals united by a love for coding and technology. From seasoned programmers to enthusiastic beginners, our club fosters an inclusive environment where everyone can learn, collaborate, and grow together. Get to know the faces behind the lines of code, and discover the unique talents and perspectives each member brings to our community.
                    </p>
                    <Link to="/">
                        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                            Back
                        </button>
                    </Link>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-10">
                    {membersData.map((member) => (
                        <Crad key={member.id} name={member.name} role={member.role} branch={member.branch} imageUrl={member.imageUrl} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default AllMembers