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
                  LinkedUs is a proposed web-based platform designed to provide
                  an interface for job seekers and potential employers. One can
                  know what's new in the market and another created the
                  market.The portal provides a doorway for seekers to find the
                  convenient job according to the skills and knowledge they
                  prosper at. Similarly , the providers can post their vacant
                  jobs with description and view the list of applicants. From
                  there the employers can choose whom to hire for their vacant
                  job.
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
                  <ul>
                    LinkedUs is a website that serves as a platform to connect
                    job seekers with potential employers. Some of the common
                    features of a job portal site are:
                    <li>
                      Authentication: Each user can register for their account
                      and serve the website using his Login credentials.{" "}
                    </li>
                    <li>
                      Job Listings: The site has a comprehensive list of job
                      openings that job seekers can browse through.
                    </li>
                    <li>
                      Job Search: The users are able to search for the job they
                      want through Job title,salary, and other criteria.
                    </li>
                    <li>
                      Candidate Profiles: Job seekers have the ability to create
                      profiles where their personal information is stored.{" "}
                    </li>
                    <li>
                      Job Posting: The Recruiter can post for the new Job
                      openings with its description.
                    </li>
                  </ul>
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
                  LinkedUs will digitalize the employment search and hire
                  procedure with an easy to use interface as well.LinkedUs is
                  expected to offer the bridge between the two sides of this
                  seeking and providing road. Considering the increased use of
                  technology in the job market, this project is a valuable
                  addition to the growing number of job portals and career
                  websites available .
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
