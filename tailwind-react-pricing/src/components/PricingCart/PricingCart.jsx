import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCart = ({pricing}) => {
    const {name, desciption, price_usd,features}= pricing;
    // console.log(object);
    return (
        <div className='border p-4 bg-amber-600 rounded-2xl '>
            <h1 className="text 8xl te  ">name {name}</h1>
            <h3 className="class 3xl">$ {price_usd}</h3>
            

            <div className='bg-amber-400 rounded-2xl p-2'>
                <p>{pricing.description}</p>
                {
                    features.map( (feature,index)=><PricingFeatures key={index} feature={feature}></PricingFeatures>)
                }
            </div>

        </div>
        
    );
};

export default PricingCart;