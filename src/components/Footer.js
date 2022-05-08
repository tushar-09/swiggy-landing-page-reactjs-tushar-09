import React from "react";
import ButtonName from "./ButtonName";
import "./Footer.css";
import List from './List';
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="flex">
          <div>
            <p>COMPANY</p>
            <a>About us</a>
            <a>Team</a>
            <a>Careers</a>
            <a>Swiggy Blog</a>
            <a>Bug Bounty</a>
            <a>Swiggy Super</a>
            <a>Swiggy Corporate</a>
            <a>Swiggy Instamart</a>
          </div>
          <div>
            <p>CONTACT</p>
            <a>Help & Support</a>
            <a>Partner with us</a>
            <a>Ride with us</a>
          </div>
          <div>
            <p>LEGAL</p>
            Terms & Conditions
            <a>Refund & Cancellation</a>
            <a>Privacy Policy</a>
            <a>Cookie Policy</a>
            <a>Offer Terms</a>
            <a>Phishing & Fraud</a>
          </div>
          <div>
            <ButtonName />
          </div>
        </div>
      </footer>
      <List />
      <footer className="footer">
        <div className="flex">
          <div>
            <a href="#">
              <img
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
                }
                width="142px"></img>
            </a>
          </div>
          <div>
            <a href="#">
              <p>© 2021 Swiggy</p>
            </a>
          </div>
          <div>
            <a href="#">
              <img
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc"
                }
                width="24px"
                height="24px"></img>
              &nbsp; &nbsp;{" "}
              <img
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd"
                }
                width="24px"
                height="24px"></img>
              &nbsp; &nbsp;
              <img
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh"
                }
                width="24px"
                height="24px"></img>
              &nbsp; &nbsp;
              <img
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv"
                }
                width="24px"
                height="24px"></img>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
