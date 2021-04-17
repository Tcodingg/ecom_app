import React from 'react'
import {FaCarSide} from 'react-icons/fa'
import {RiEBike2Fill} from 'react-icons/ri'
import {GiCardPickup} from 'react-icons/gi'


export default function Services() {
    return (
    <section className="services section bd-container">
        <div className="services_container bd-grid">
            <div className="services_content">
            <div className="services_icon">
                <FaCarSide />
                </div>
                <h2 className="services_title">
                    Drive-Thru
                </h2>
                <p className="services_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti quaerat necessitatibus beatae officia iste.
                </p>
            </div>

            <div className="services_content">
                <div className="services_icon">
                <RiEBike2Fill />
                </div>
                <h2 className="services_title">
                    Delivery
                </h2>
                <p className="services_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti quaerat necessitatibus beatae officia iste.
                </p>
            </div>

            <div className="services_content">
            <div className="services_icon">
                <GiCardPickup />
                </div>
                <h2 className="services_title">
                    Take-out
                </h2>
                <p className="services_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti quaerat necessitatibus beatae officia iste.
                </p>
            </div>
            
        </div>
    </section>
    )
}
