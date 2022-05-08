import React from 'react';
import Feature from './Feature';
import './feature.css';

function FeatureName(){
    const name1={
        src:"https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf",
        height:"200px",
        width:"100px",
        head:"No Minimum Order",
        para:"Order in for yourself or for the group, with no restrictions on order value"
    }
    const name2={
        src:"https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy",
        width:"110px",
        height:"205px",
        head:" Live Order Tracking",
        para:"Know where your order is at all times, from the restaurant to your doorstep"

    }
    const name3={
        src:"https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn",
        width:"120",
        height:"180",
        head:"Lightning-Fast Delivery",
        para:"Experience Swiggy's superfast delivery for food delivered fresh & on time"

    }
    return(
        <div className="feature">
            <Feature data={name1}></Feature>
            <Feature data={name2}></Feature>
            <Feature data={name3}></Feature>

        </div>
    )
}
export default FeatureName;