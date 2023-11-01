import React from 'react';
import PropTypes from 'prop-types';

const Cart = ({cartCourse,cartCredit,totalPrice, remaining}) => {
    return (
        <div className='bg-white px-3 rounded-lg'>
            <h2 className='text-[#2F80ED] text-lg font-bold pt-4 mb-2'>Credit Hour Remaining {remaining} hr</h2>
            <hr className='border-b-[1.5px] border-solid bg-[#1c1b1b33]' />
            <h1 className='text-[#1C1B1B] text-base font-bold my-3'>Course Name</h1>
            <ol className='list-decimal list-inside'>
            {
                cartCourse.map((Course,idx)=> <li className='my-3 text-[#716c6cac]' key={idx}>{Course.title}</li>)
            }
            </ol>
            <hr className='border-b-[1.5px] border-solid bg-[#1c1b1b33]' />
            <h3 className='text-[#1c1b1bcc] text-base my-3 font-medium'>Total Credit Hour : {cartCredit}</h3>
            <hr className='border-b-[1.5px] border-solid bg-[#1c1b1b33]' />
            <h3 className='text-[#1c1b1bcc] text-base font-semibold my-3 pb-3'>Total Price : {totalPrice} USD</h3>
        </div>
    );
};
Cart.propTypes = {
    cartCourse: PropTypes.array,
    cartCredit: PropTypes.number,
    totalPrice: PropTypes.number,
    remaining: PropTypes.number
  };

export default Cart;