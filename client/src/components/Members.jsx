import React from 'react';
import Crad from './Crad';
import membersData from '../../public/members.json';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Members() {
    
    const firstFourMembers = membersData.slice(0, 4);

    return (
        <>
            <div>
                <div>
                    <section className="pt-16">
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl font-bold text-center mb-8 text-gray-200">Our Team</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                {firstFourMembers.map((member) => (
                                    <Crad key={member.id} name={member.name} role={member.role} branch={member.branch} imageUrl={member.imageUrl} />
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center mt-10 transform transition-transform duration-300 hover:scale-95">
                            <Link to='/members' className="bg-gray-800 hover:bg-blue-600 hover:text-gray-200 text-gray-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:cursor-pointer shadow-xl">
                                View All Members &gt;&gt;
                            </Link>
                        </div>

                    </section>
                </div>
            </div>
        </>
    )
}

export default Members;
