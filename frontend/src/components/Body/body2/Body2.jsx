import React from 'react'
import { MdSpaceDashboard } from "react-icons/md";
import { MdTipsAndUpdates } from "react-icons/md";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { MdCheckBox } from "react-icons/md";
import Card from './card/Card';
import "../body2/Body2.css"
import { useState } from 'react';
function Body2() {
    const [selectedCard, setSelectedCard] = useState(null)
    const cards = [{
        icon: <MdSpaceDashboard />,
        heading: "Unified Dashboard",
        para: "One central place for room details, fee status, complaints, leave requests, and more."
        ,
    },
    {
        icon: <FaScrewdriverWrench />,
        heading: "Effortless Maintainence",
        para: "Submit and track maintenance requests easily. Get notified on progress updates"
        ,
    }
        , {
        icon: <MdTipsAndUpdates />,
        heading: "Instant Updates",
        para: "Receive real-time announcements and notifications directly from hostel administration."
        ,
    },
    {
        icon: <MdPayment />,
        heading: "Secure Payments",
        para: "View dues and make hostel fee payments securely through integrated options."
        ,
    },
    {
        icon: <IoPeopleCircleSharp />,
        heading: "Visitor Management",
        para: "Easily pre-approve and manage guest entries following hostel guidelines."
        ,
    },
    {
        icon: <MdCheckBox />,
        heading: "Community Events",
        para: "Stay informed about upcoming hostel events, workshops, and social gatherings."
        ,
    },
    ]

    return (
        <div className='container'>
            <div className="section">Designed for Modern Students & Staff</div>
            <p className='p'>
                Manage everything from payments to maintenance requests with unparalleled ease and efficiency.
            </p>

            <div className="grid">
                {cards.map((card, index) => (
                    <div className="feature_card" key={index}>
                        <Card
                            icon={card.icon}
                            heading={card.heading}
                            para={card.para}
                            isSelected={selectedCard === index} // Compare with the current index
                            onClick={() => setSelectedCard(index)} // Set selected card when clicked
                        />

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Body2