import React from 'react'
import './Hero2.css'
import { assets } from '../../../assets/assets'

const Hero2 = () => {
    return (
        <div className="Hero2">
            <div className="pero">
                <div className="zero">
                    <div className="hero">
                        <div className="htext1">Get Fresh Produce Straight From Farmers</div>
                        <div className="htext2">Enjoy Premium Quality Save More And Support Local Communities</div>
                        <div className="htext3">A Marketplace Built on Trust and Authenticity
                        </div>
                        <div className="hbutton">
                            <button>Join Us</button>
                        </div>
                    </div>
                    <div className="hero-img">
                        <img src={assets.hero} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero2