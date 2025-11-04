import { Check } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({feature}) => {
    return (
        <p className='flex mr-5 '><Check></Check>{feature}</p>
    );
};

export default PricingFeatures;