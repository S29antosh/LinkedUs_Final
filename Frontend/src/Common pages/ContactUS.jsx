import React, { useState } from "react";
import "../CSS files/ContactUs.css";
import { motion } from "framer-motion";
import Navigation_Bar from "../Components/Navigation_Bar";
import Footer from "../Components/Footer";

export default function ContactUs() {
  return (
    <>
      <div className="layout">
        <Navigation_Bar />
        <div className="AboutUsOverall">
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="Mid"
          >
            <p id="Contact">Contact Us</p>
            <img src="\Images\\Contact.png" alt="img" id="imageee" />
          </motion.div>

          <div className="Bottom">
            <motion.div
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className="AboutUs1"
            >
              <h1>Email</h1>
              <div className="paragraph">
                <p>
                  <ul>
                    <li>Santosh: ymanoutube@gmail.com</li>
                    <li>Anuja:</li>
                    <li>Krishita: pandeykrishita02@gmail.com</li>
                    <li>Aayush: aayushpokhreld@gmail.com</li>
                    <li>Sunidhi: sunidhisharma3002@gmail.com</li>
                  </ul>
                </p>
              </div>
              <img src="\Images\\Email.png" alt="img" id="email" />
            </motion.div>
            <motion.div
              initial={{ x: -400 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className="AboutUs1"
            >
              <h1>Phone Number ?</h1>
              <div className="paragraph">
                <p>
                  <ul>
                    <li>Santosh: ymanoutube@gmail.com</li>
                    <li>Anuja:</li>
                    <li>Krishita: pandeykrishita02@gmail.com</li>
                    <li>Aayush: aayushpokhreld@gmail.com</li>
                    <li>Sunidhi: sunidhisharma3002@gmail.com</li>
                  </ul>
                </p>
              </div>
              <img src="\Images\\Phone.png" alt="img" id="phone" />
            </motion.div>
            <motion.div
              initial={{ x: -600 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className="AboutUs1"
            >
              <h1>More information..</h1>
              <div className="paragraph">
                <p>
                  <ul>
                    <li>Santosh: ymanoutube@gmail.com</li>
                    <li>Anuja:</li>
                    <li>Krishita: pandeykrishita02@gmail.com</li>
                    <li>Aayush: aayushpokhreld@gmail.com</li>
                    <li>Sunidhi: sunidhisharma3002@gmail.com</li>
                  </ul>
                </p>
              </div>
              <img src="\Images\\Viewmore.png" alt="img" id="more" />
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
