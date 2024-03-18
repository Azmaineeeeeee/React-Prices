import PropTypes from 'prop-types';
import { FaCheckCircle } from "react-icons/fa";

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='bg-sky-600 rounded-xl p-4 text-center m-8 my-2 mt-10 flex flex-col'>
            <h2>
                <span className="text-5xl text-white font-extrabold">{price}</span>
                <span className="text-2xl text-sky-200">/mon</span>
            </h2>
            <h4 className='text-2xl text-white'>{name}</h4>
            {
                features.map((feature,index) => 
                <ol key={index} className='p-4 text-sky-100 text-left'>
                    <div className='flex gap-3'>
                    <FaCheckCircle className='text-xl' />
                    <li>{feature}</li>
                    </div>
                </ol>
                )
            }
            <div className="flex-grow" /> 
            <div className=" bottom-4 w-full"> 
                <button className="btn btn-outline mt-4 rounded-full text-white border-white w-full font-bold text-lg">Grab Now!</button>
            </div>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        features: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default PriceOption;
