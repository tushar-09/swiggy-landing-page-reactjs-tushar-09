import React from 'react';
import ButtonName from './ButtonName';
import './Pocket.css';
function Pocket(){
    return(
     <div className="pocket">
     <div className="wrap">
     <h2>
     Restaurants in your pocket
     </h2>
     <p>Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</p>
     <ButtonName />
     </div>
     <div className="wrap">
         <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"} height="489px" width="384px"/>
     </div>
     <div class="wrap">
         <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn"} height="489px" width="384px"></img>
     </div>
     </div>
    )
}
export default Pocket;