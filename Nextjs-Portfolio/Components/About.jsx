import React from 'react'

const About = () => {
    return (
        <div className='w-full md:h-screen p-2 item-center flex py-16'>
            <div className='max-w-[1240px] m-auto '>
                <div className='col-span-2'>
                    <h1 className='text-gray-700'> About</h1>
                    <p className='py-10 flex justify-center'>
                        I am student.
                    </p>
                </div>
                <div>
                    <p className='m-auto text-9xl flex'>👩‍💻</p>
                </div>
            </div>
        </div>
    )
}

export default About