import React, { useState } from 'react';
import './head.css'
import Change from './Change';
import { BiCurrentLocation } from "react-icons/bi";
function Head() {
    const [data , setData] = useState('');
    
    return (
        <div class="main__container">
        <div className="left__div">
            <div className="top">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRltPMGDF7UGsme8WBuFxEwG8H-Ys4nW7TbOBFXG4H36Q11Ccbmc0tvVK_RU4N9-EI2GQ&usqp=CAU" alt="" />

<div className="buttons">
    <button class="login">
        Login
    </button><button className="signup">
        Signup
    </button>
</div>
            </div>

            <div className="restaurant__near">
                <h1><Change /></h1>
                <p>Order food from favourite restaurants near you.</p>
            </div>
            <div className="input__class"><form>
                <input value={data} onChange={(e)=>{
                   setData(e.currentTarget.value)
                } }type="text" placeholder="Enter your delivery location" />
               <BiCurrentLocation /> <button>FIND FOOD</button></form>
            </div>
            <div className="bottom">
                <p>POPULAR CITIES IN INDIA</p>
                <span>  Ahmedabad</span>
                <span>  Bangalore</span>
                <span>  Chennai</span>
                <span>  Delhi</span>
                <span>  Gurgaon</span>
                <span>  Hyderabad</span>
                <span>  Kolkata</span>
                <span>  Mumbai</span>
                <span>  Pune</span>
                <span>  & more.</span>
            </div>
        </div>
        <div className="right__div">
            <img src="https://web.archive.org/web/20210903175246im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq" alt="" />
        </div>
        </div>
    )
}

export default Head;