import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import PriceOption from './priceOption';

const PriceOptions = () => {
    const [options,setOption] = useState([])

    useEffect(() => {
        fetch('../../../public/priceoptions.json')
            .then(res => res.json())
            .then(data =>  setOption(data))
     }, []);
    
    return (
        <div>
           <h2 className='text-5xl text-center mt-10 font-extrabold text-blue-900'>Best Prices in the Town!</h2> 
           <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
           {
            options.map((option) => (<PriceOption key={option.id} option={option}></PriceOption>) )
           }
           </div> 
        </div>
    );
};
PriceOptions.propTypes = {
    priceOption: PropTypes.object
}

export default PriceOptions;