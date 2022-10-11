import React from 'react';
import PricingOption from '../PricinOption/PricingOption';

const Pricing = () => {
    const pricingOption = [
        {id:1, name:'Free',price:0, features: [
            'Awesum Features',
            'Extra Features',
            'Unnecessary Features',
            'Will Never Use Features',
            'Hudai Features'
        ]
    },
        {
            id: 2, name: 'Medium', price: 9.99, features: [
                'Awesum Features',
                'Extra Features',
                'Unnecessary Features',
                'Will Never Use Features',
                'Hudai Features'
            ]
    },
        {
            id: 3, name: 'Premium', price: 19.99, features: [
                'Awesum Features',
                'Extra Features',
                'Unnecessary Features',
                'Will Never Use Features',
                'Hudai Features'
            ]
}
    ]
    return (
        <div>
            <h2 className='text-6xl font-bold bg-indigo-600 text-white p-12'>Best Deal of the Town</h2>
            <div className='grid md:grid-cols-3 gap-5 w-9/12 m-auto mt-5'>
                {
                    pricingOption.map(option => <PricingOption key={option.id} option={option}>

                    </PricingOption>)
                }
            </div>
           
        </div>
    );
};

export default Pricing;