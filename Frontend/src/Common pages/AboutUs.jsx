import React, { useState } from "react";
import "../CSS files/AboutUs.css";
import { motion } from "framer-motion";
import Navigation_Bar from "../Components/Navigation_Bar";
import Footer from "../Components/Footer";
import WhatDo from "../Components/WhatDo";
import HowHelp from "../Components/HowHelp";
import MoreInfo from "../Components/MoreInfo";

export default function AboutUs() {
  const [showModal, setShowModel] = useState(false);
  const [showModal2, setShowModel2] = useState(false);
  const [showModal3, setShowModel3] = useState(false);

  const closeModal = () => setShowModel(false);
  const closeModal2 = () => setShowModel2(false);
  const closeModal3 = () => setShowModel3(false);

  return (
    <>
      <div className="layout">
        <Navigation_Bar />
        {showModal && <WhatDo closeModal={closeModal} />}
        {showModal2 && <HowHelp closeModal2={closeModal2} />}
        {showModal3 && <MoreInfo closeModal3={closeModal3} />}

        <div className="AboutUsOverall">
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="Mid"
          >
            <p>About Us</p>
            <img src="\Images\\AboutUs.png" alt="img" id="imagee" />
          </motion.div>

          <div className="Bottom">
            <motion.div
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className="AboutUs1"
            >
              <h1>What Do We Do ?</h1>
              <div className="paragraph">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolores fugit quos sit amet ipsam possimus dolore vitae
                  quisquam totam iure, nesciunt exercitationem, quibusdam libero
                  ducimus fuga! Incidunt libero itaque quam!
                </p>
              </div>
              <button
                class="Viewmore "
                id="ViewMore1"
                onClick={() => setShowModel(true)}
              >
                View More
              </button>
            </motion.div>
            <motion.div
              initial={{ x: -400 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className="AboutUs1"
            >
              <h1>How Can We Help ?</h1>
              <div className="paragraph">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  officia at commodi, accusantium, doloribus repellat quae
                  dignissimos pariatur, tenetur doloremque perferendis
                  voluptatem molestias itaque earum eveniet quaerat optio
                  nesciunt porro.
                </p>
              </div>
              <button
                class="Viewmore"
                id="ViewMore2"
                onClick={() => setShowModel2(true)}
              >
                ViewMore
              </button>
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit praesentium aliquid delectus, voluptatem
                  quisquam, nemo cumque officia quis vitae, quas a distinctio.
                  Magnam facilis et voluptatem quo consequuntur corporis
                  officiis.
                </p>
              </div>
              <button
                class="Viewmore"
                id="ViewMore3"
                onClick={() => setShowModel3(true)}
              >
                ViewMore
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
