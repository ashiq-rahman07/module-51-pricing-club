import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Fetures from '../Fetures/Fetures';

const PricingOption = ({ option }) => {
    const { features } = option;
    return (
        <div className='bg-green-800 p-3 rounded'>
            <div>
                <p className=' text-white   mb-3'>
                    <span className='text-4xl'>{option.price}</span>
                     <span>/month</span>
                     </p>
                <p className='text-2xl text-white  mb-2'>  {option.name}</p>
            </div>
            {
                features.map((feture, idx) => <Fetures key={idx} feture={feture}></Fetures>)
            }
            <button className='bg-purple-900 rounded-sm py-2 text-white font-bold text-sm px-4 mt-4 w-full'>Buy Now</button>

        </div>
    );
};

export default PricingOption;