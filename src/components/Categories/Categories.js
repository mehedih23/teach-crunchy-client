import React from 'react'
import './Categories.css'
import computer from '../../assets/images/work(1).png'

const Categories = () => {
    return (
        <div className='my-8'>
            <h3 className='text-3xl text-primary font-bold  md:pl-8'>Explore TEACH CRUNCHY</h3>
            <div className='grid grid-cols-1 gap-4 md:sm:grid-cols-2 md:gap-4 lg:sm:grid-cols-3 lg:gap-8 my-8'>
                <div class="card w-[260px] h-[316px] bg-base-100 shadow-xl bg-gradient-to-r from-[#13DE82] to-[#0AB68B] mx-auto">
                    <div class="card-body">
                        <img className='text-white' src={computer} alt="computer" />
                        <p className='flex flex-col justify-center items-center'>
                            <span className='text-2xl text-white mt-[-10px]'>Computer</span>
                            <span className='text-2xl text-white mt-[-10px]'>Science</span>
                            <span className='text-2xl text-white'>icon</span>
                        </p>
                    </div>
                </div>
                <div class="card w-[260px] h-[316px] bg-base-100 shadow-xl bg-gradient-to-r from-[#13DE82] to-[#0AB68B] mx-auto">
                    <div class="card-body">
                        <img className='text-white' src={computer} alt="computer" />
                        <p className='flex flex-col justify-center items-center'>
                            <span className='text-2xl text-white'>Computer</span>
                            <span className='text-2xl text-white'>Science</span>
                        </p>
                    </div>
                </div>
                <div class="card w-[260px] h-[316px] bg-base-100 shadow-xl bg-gradient-to-r from-[#13DE82] to-[#0AB68B] mx-auto">
                    <div class="card-body">
                        <img className='text-white' src={computer} alt="computer" />
                        <p className='flex flex-col justify-center items-center'>
                            <span className='text-2xl text-white'>Computer</span>
                            <span className='text-2xl text-white'>Science</span>
                        </p>
                    </div>
                </div>
                <div class="card w-[260px] h-[316px] bg-base-100 shadow-xl bg-gradient-to-r from-[#13DE82] to-[#0AB68B] mx-auto">
                    <div class="card-body">
                        <img className='text-white' src={computer} alt="computer" />
                        <p className='flex flex-col justify-center items-center'>
                            <span className='text-2xl text-white'>Computer</span>
                            <span className='text-2xl text-white'>Science</span>
                        </p>
                    </div>
                </div>
                <div class="card w-[260px] h-[316px] bg-base-100 shadow-xl bg-gradient-to-r from-[#13DE82] to-[#0AB68B] mx-auto">
                    <div class="card-body">
                        <img className='text-white' src={computer} alt="computer" />
                        <p className='flex flex-col justify-center items-center'>
                            <span className='text-2xl text-white'>Computer</span>
                            <span className='text-2xl text-white'>Science</span>
                        </p>
                    </div>
                </div>
                <div class="card w-[260px] h-[316px] bg-base-100 shadow-xl bg-gradient-to-r from-[#13DE82] to-[#0AB68B] mx-auto">
                    <div class="card-body">
                        <img className='text-white' src={computer} alt="computer" />
                        <p className='flex flex-col justify-center items-center'>
                            <span className='text-2xl text-white'>Computer</span>
                            <span className='text-2xl text-white'>Science</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className='md:pr-12 flex justify-end'>
                <button className='btn rounded-full bg-gradient-to-r from-[#13DE82] to-[#0AB68B] border-0 text-white capitalize '>View All Categories</button>
            </div>
        </div>
    )
}

export default Categories