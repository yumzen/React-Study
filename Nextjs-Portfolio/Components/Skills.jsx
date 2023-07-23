import React from 'react'
import Image from 'next/image'

const Skills = () => {
return (
        <div className='w-full lg:h-screen p-2 flex'>
            <div className='max-w-[1240px] mx-auto flex-col justify-center h-full'>
                <h1 className='text-gray-700'>Skills</h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-300'>
                        <div className = 'grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src = '/../public/assets/skills/c.png'
                                    width = {64}
                                    height = {64}
                                    alt = '/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>C</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-300'>
                        <div className = 'grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src = '/../public/assets/skills/c++.png'
                                    width = {64}
                                    height = {64}
                                    alt = '/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>C++</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-300'>
                        <div className = 'grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src = '/../public/assets/skills/java.png'
                                    width = {64}
                                    height = {64}
                                    alt = '/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>java</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-300'>
                        <div className = 'grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src = '/../public/assets/skills/python.png'
                                    width = {64}
                                    height = {64}
                                    alt = '/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>python</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-300'>
                        <div className = 'grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src = '/../public/assets/skills/css.png'
                                    width = {64}
                                    height = {64}
                                    alt = '/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>css</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-300'>
                        <div className = 'grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src = '/../public/assets/skills/github1.png'
                                    width = {64}
                                    height = {64}
                                    alt = '/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>github</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-300'>
                        <div className = 'grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src = '/../public/assets/skills/javascript.png'
                                    width = {64}
                                    height = {64}
                                    alt = '/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>javascript</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-300'>
                        <div className = 'grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src = '/../public/assets/skills/nextjs.png'
                                    width = {64}
                                    height = {64}
                                    alt = '/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>next.js</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-300'>
                        <div className = 'grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src = '/../public/assets/skills/react.png'
                                    width = {64}
                                    height = {64}
                                    alt = '/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>react</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-300'>
                        <div className = 'grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src = '/../public/assets/skills/tailwind.png'
                                    width = {64}
                                    height = {64}
                                    alt = '/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>tailwind</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-300'>
                        <div className = 'grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src = '/../public/assets/skills/html.png'
                                    width = {64}
                                    height = {64}
                                    alt = '/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills