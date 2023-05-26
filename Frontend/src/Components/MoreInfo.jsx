import "../CSS files/AboutUs.css";

const MoreInfo = ({ closeModal3 }) => {
  return (
    <>
      <div className="MainWrapper">
        <div className="ModelContent">
          <h1>More Information</h1>
          <p>
            LinkedUs will digitalize the employment search and hire procedure
            with an easy to use interface as well.LinkedUs is expected to offer
            the bridge between the two sides of this seeking and providing road.
            Considering the increased use of technology in the job market, this
            project is a valuable addition to the growing number of job portals
            and career websites available .
          </p>
          <button id="ViewMore" onClick={() => closeModal3()}>
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default MoreInfo;
