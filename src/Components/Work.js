import React from 'react';
import PickMeals from "../Assets/pick-meals-image.png"
import ChooseMeals from "../Assets/choose-image.png"
import DeliveryMeals from "../Assets/delivery-image.png"

const Work = () => {
      const workInfoData = [
           {
             image: PickMeals,
             title:"Pick Meals",
             text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

           },
           {
            image: ChooseMeals,
            title:"Choose How Often",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

          },
          {
            image: DeliveryMeals,
            title:"Fast Deliveries",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

          },


      ];


  return  (
  <div className='work-section-wrapper'>
    <div className='work-section-top'>
        <p className="primary-subheading">Work</p>
        <h1 className="primary-subheading">How it Works</h1>
        <p className="primary-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </div>
    <div className="work-section-bottom">
        {
          workInfoData.map((data)  =>(
            <div className="work-section-info">
                <div className='info-boxes-img-container'>
                    <img src={data.image} alt="" />
                </div>
                 <h2>{data.title}</h2>
                 <p>{data.text}</p>
                </div>
          ))
        }



    </div>
    
    
    
    </div>
  );
}

export default Work;