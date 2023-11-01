import {FaDollarSign, FaBookOpen } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Course = ({course,handleSelect}) => {
    return (
        <div className='lg:w-[300px] bg-[#FFF] rounded-xl p-3'>
            <img className='w-full lg:w-[280px] lg:h-[144px] rounded-lg' src={course.course_img} alt="" />
            <h1 className='text-[#1C1B1B] font-semibold text-lg mt-3'>{course.title}</h1>
            <p className='text-[#1c1b1b99] text-sm font-normal my-2'>{course.description}</p>
            <div className='flex justify-between my-2'>
            <p className='flex items-center gap-2'>
                    <span className='text-sm'><FaDollarSign /></span><span className='text-[#1c1b1b99] font-medium'>Price : {course.price}</span>
                </p>
                <p className='flex items-center gap-3'>
                    <span><FaBookOpen></FaBookOpen></span>  <span className='text-[#1c1b1b99] font-medium'>Credit : {course.credit}hr</span>
                </p>
            </div>
            <button onClick={()=> handleSelect(course)} className='bg-[#2F80ED] rounded-lg text-white text-center w-full text-lg font-semibold py-1 mt-3'>Select</button>
        </div>
    );
};

Course.propTypes = {
    handleSelect: PropTypes.func,
    course:PropTypes.object
  };

export default Course;