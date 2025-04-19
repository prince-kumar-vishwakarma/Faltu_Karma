import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/Footer/Footer';
import { IoBedSharp } from "react-icons/io5";
import { MdSevereCold } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import Card2 from './card2/Card2';
import "./pricing.css";

const Pricing = () => {
  const cards = [
    {
      img: [<IoBedSharp />, <MdSevereCold />],
      heading: "Standard Double(AC)",
      para: "2 Beds|Shared Bathroom|Air Conditioning",
      price: 10000,
      sem: "Per Semester"
    },
    {
      img: <IoBedSharp />,
      heading: "Standard Double(Non-AC)",
      para: "2 Beds|Shared Bathroom|Common Area Access",
      price: 8000,
      sem: "Per Semester"
    },
    {
      img: [<FaBed />, <MdSevereCold />],
      heading: "Single Occupancy(AC)",
      para: "1 Bed|Private or Shared Bathroom|Air Conditioning",
      price: 18000,
      sem: "Per Semester",
    },
    {
      img: <FaBed />,
      heading: "Single Occupancy(Non-AC)",
      para: "1 Bed|Private or Shared Bathroom|Increased privacy",
      price: 15000,
      sem: "Per Semester",
    },
  ];

  return (
    <div>
      <Header />
      <div className="pricing-main">
        <div className="pricing-header">
          <h3>Flexible Pricing for Your Stay</h3>
          <p>Build your ideal campus living package. Choose your room, and add-on services.</p>
        </div>
        <div className='pricing-subheader'>
          <h3>Accommodation Options</h3>
          <p>Select the room type that best suits your budget and preferences. Prices shown per semester.</p>
        </div>
        <div className="pricing-cards">
          {cards.map((card, index) => (
            <div className="pricing-card-container" key={index}>
              <Card2
                img={card.img}
                heading={card.heading}
                para={card.para}
                price={card.price}
                sem={card.sem} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Pricing;
