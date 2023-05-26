import "../CSS files/AboutUs.css";

const WhatDo = ({ closeModal }) => {
  return (
    <>
      <div className="MainWrapper">
        <div className="ModelContent">
          <h1>What Do We Do ?</h1>
          <p>
            LinkedUs is a proposed web-based platform designed to provide an
            interface for job seekers and potential employers. One can know
            what's new in the market and another created the market.The portal
            provides a doorway for seekers to find the convenient job according
            to the skills and knowledge they prosper at. Similarly , the
            providers can post their vacant jobs with description and view the
            list of applicants. From there the employers can choose whom to hire
            for their vacant job.
          </p>
          <button id="ViewMore" onClick={() => closeModal()}>
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default WhatDo;
