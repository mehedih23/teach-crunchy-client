import React from 'react'
import banner from '../../assets/images/image 1.png'
import './Banner.css'

const Banner = () => {
    return (
        <div class="hero h-4/5 bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse w-full lg:justify-between">
                <div>
                    <img src={banner} className="max-w-sm rounded-lg" alt='banner' />
                </div>
                <div>
                    <h1 class="text-4xl font-bold">
                        Join the IT industry in <br />
                        Africa in non-coding <br />
                        tech roles
                    </h1>
                    <p class="py-6">
                        Build non-coding tech skills for the IT industry <br />
                        Get ready for an intern level role
                    </p>
                    <button class="btn bg-gradient-to-r from-[#13DE82] to-[#0AB68B] border-0 text-neutral rounded-full">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Banner