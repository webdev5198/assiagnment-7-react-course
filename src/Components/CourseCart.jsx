/* eslint-disable react/prop-types */


const CourseCart = ({selectCourse, totalCredit, totalPrice, remainingCredit}) => {
    // eslint-disable-next-line react/prop-types
    // console.log(selectCourse.length)
    
    return (
        <div>
            <div className="w-[19.5rem]  rounded-xl bg-white">
                <h1 className="text-[#2F80ED] inter text-lg font-bold pl-6 pt-6">Credit Hour Remaining {remainingCredit} hr</h1>
                <hr className="mx-6 mt-4" />
                <h1 className="text-[#1C1B1B] inter text-xl font-bold pl-6 pt-4">Course Name</h1>
                <div className="mt-[1.3rem] ml-6 pr-7">
                <ol className="text-[#1C1B1B99] inter text-base list-decimal pl-6">{
                    selectCourse.map((course, index)=>(
                        <li key={index}>{course.title}</li>
                    ))
                }</ol>
                </div>
                <hr className="mx-6 mt-6" />
                <h3 className="text-[#1C1B1BCC] inter font-medium my-4 ml-6">Total Credit Hour : {totalCredit}</h3>
                <hr className="mx-6 mt-4" />
                <h3 className="text-[#1C1B1BCC] inter font-semibold my-4 ml-6 pb-6">Total Price : {totalPrice} USD</h3>


            </div>
            
            
        </div>
    );
};

export default CourseCart;