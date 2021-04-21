import React from 'react'
import breakfast from '../images/breakfast.png'


export default function Home() {
    return (
        <section className="home bd-container" id="home">
            <div className="home_container bd-grid">
                <img className='home_img' src={breakfast} alt=""/>
                <div className="home_data">
                    <span className="home_special">Now</span>
                    <h1 className="home_title">$0 Delivery Fee</h1>
                    <p className="home_description">
                        Lorem ipsum dolor sit amet <br/>   consectetur adipisicing elit. <br/> amet, quisquam vel libero !
                    </p>
                    <div className='button-wrapper'>
                      <a href="#" className="button">Order Now</a>
                    </div>               
                </div>
            </div>
        </section>
    )
}
