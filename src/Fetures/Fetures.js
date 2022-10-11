import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
const Fetures = ({feture}) => {
    return (
        <div className='flex items-center pl-7 pt-1 '>
            <CheckCircleIcon className="h-4 w-6 text-blue-500" />
            <p className='ml-2 text-white'>{feture}</p>
        </div>
    );
};

export default Fetures;