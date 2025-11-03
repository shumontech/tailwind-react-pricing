import React, { use } from 'react';
import PricingCart from '../PricingCart/PricingCart';

const PricingOptions = ({pricingPromise}) => {
    const pricingData= use(pricingPromise);
    console.log(pricingData);
    return (
        <div>
            <h2 className='text-5xl mb-3'>Get Your Membership</h2>
            <div className='grid md:grid-cols-3 gap-3'>
                 {
                pricingData.map(pricing=><PricingCart
                    key={pricing.id}
                    pricing={pricing}></PricingCart>)
            }
            </div>
            
        </div>
    );
};

export default PricingOptions;