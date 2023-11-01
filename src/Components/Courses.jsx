import dollar from "../assets/dollar-sign 1.svg"
import book from "../assets/book.png"
import { useState } from "react";
import { useEffect } from "react";
import CourseCart from "./CourseCart";
import toast, { Toaster } from 'react-hot-toast';
// import { data } from "autoprefixer";
const Courses = () => {

    const [courses, setCourse] = useState([])
    const [selectCourse, setSelectCourse] = useState([])
    const [totalCredit, setTotalCredit] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [remainingCredit, setremainingCredit] = useState(20)
   

    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setCourse(data))
    }, [])

    
    const handleSelectButton= (course)=>{
        
        let credit = course.credit;
        selectCourse.forEach(item=>{
            credit = credit+item.credit;
        })
        

        let price = course.price;
        selectCourse.forEach(item=>{
            price = price+item.price;
        })
        
        const priceFixed = price.toFixed(2);
        const isCourseExists = selectCourse.find(item=>item.id==course.id);
        if(isCourseExists){
            return toast.error(<span className="text-2xl">Course Already Exists</span>)
        }
        else{
            if(credit>20){
                return toast((t) => (
                    
                    <span className="text-2xl w-auto text-center">
                      You cross your credit limit. You have 20 Credit.
                      <br />
                      <button className="mt-2 bg-[#2F80ED] text-white font-semibold px-3 py-3 rounded-2xl" onClick={() => toast.dismiss(t.id)}>
                        Dismiss
                      </button>
                    </span>
                  ));
            }
            else{
                setTotalCredit(credit)
            }
    
            setTotalPrice(priceFixed)
    
            
            setremainingCredit(remainingCredit-course.credit)
            setSelectCourse([...selectCourse, course])
        }
        
    }
  
    
    return (
        <div className='flex w-[90%] mx-auto mt-8 gap-6 lg:gap-14 justify-center flex-col lg:flex-row'>
            <div className="course-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-14 lg:mb-[5rem]">
                {
                    courses.map(course=>(
                        <div key={course.id} className="course-card w-[19.5rem] h-[25.125rem] rounded-xl bg-white">
                    <div className="pt-4">
                    <img className="w-[17.5rem] h-[9rem] mx-auto rounded-lg" src={course.image} alt={course.title} />
                    </div>
                    <div>
                        <h2 className="text-[#1C1B1B] inter text-lg font-semibold mt-4 px-4">{course.title}</h2>
                        <p className="mt-3 text-[#1c1b1baf] inter text-sm px-4">{course.description}</p>
                        <div className="flex px-4 justify-between mt-5">
                            <img src={dollar} alt="" />
                            <p className="text-[#1C1B1B99] inter font-medium">Price : {course.price}</p>
                            <img src={book} alt="" />
                            <p className="text-[#1C1B1B99] inter font-medium">Credit : {course.credit}hr</p>
                        </div>

                        <button onClick={()=>handleSelectButton(course)} className="w-[17.5rem] h-[2.5rem] rounded-lg border-[#2F80ED] bg-[#2F80ED] capitalize flex justify-center items-center mx-auto mt-[1.63rem] text-white inter text-lg font-semiiii
                        ">Select</button><Toaster/>
                    </div>
                </div>
                    ))
                }
            </div>
            <div>
            <CourseCart key={selectCourse.id} selectCourse={selectCourse} totalCredit={totalCredit} totalPrice={totalPrice} remainingCredit={remainingCredit}></CourseCart>
            </div>
        </div>
    );
};

export default Courses;