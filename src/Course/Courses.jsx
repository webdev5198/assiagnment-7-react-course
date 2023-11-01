import React, { useEffect, useState } from 'react';
import Course from './Course'
import PropTypes from 'prop-types';

const Courses = ({handleSelect}) => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('courses.json')
        .then(response => response.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className='grid grid-cols-1  w-[90%] mx-auto md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-[77%]'>
            {
                courses.map((course,idx) => <Course key={idx} course={course} handleSelect={handleSelect}></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    handleSelect: PropTypes.func
  };
export default Courses;