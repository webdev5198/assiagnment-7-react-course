import { useState } from 'react'
import Header from './Header/Header'
import Courses from './Course/Courses'
import Cart from './Cart/Cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartCourse, setCartCourse] = useState([]);
  const [cartCredit, setCartCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [remaining, setRemaining] = useState(20);

  const handleSelect=(course)=>{
    const isExist = cartCourse.find(item => item.id==course.id);
    const fixedCredit = 20;
    let credit = course.credit;
    let price = course.price;
    let remainingCredit =20;
    if(isExist){
      return toast.error("You have purchased this course already", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000, 
        hideProgressBar: false, 
        closeOnClick: true, 
        pauseOnHover: true,
        draggable: true
      })
    }
    else{
      cartCourse.forEach(item =>{
        credit +=item.credit;
        price += item.price;
      })
      remainingCredit = fixedCredit - credit;
      
    }
    if(credit>fixedCredit){
      return toast.error("You have reached the credit limit", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000, 
        hideProgressBar: false, 
        closeOnClick: true, 
        pauseOnHover: true,
        draggable: true
      });
    }
    else if(remainingCredit < 0){
      return toast.error("Remaining credit is too low. Try again", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000, 
        hideProgressBar: false, 
        closeOnClick: true, 
        pauseOnHover: true,
        draggable: true
      });
    }
    else{
      setCartCourse([...cartCourse,course]);
      setTotalPrice(price);
      setCartCredit(credit);
      setRemaining(remainingCredit);
    

    }

    
  }
  return (
    <>
    <Header></Header>
    <div className='max-w-[1200px] mx-auto lg:flex gap-6 pb-14'>
    <Courses handleSelect={handleSelect}></Courses>
    <div className='w-[90%] mx-auto lg:w-[24%] mt-5 lg:mt-0'>
    <Cart cartCourse={cartCourse} remaining={remaining} totalPrice={totalPrice} cartCredit={cartCredit}></Cart>
    </div>
    </div>
    <ToastContainer />

    </>
  )
}

export default App
