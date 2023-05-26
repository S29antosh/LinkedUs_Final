import "../CSS files/AboutUs.css";

const HowHelp = ({ closeModal2 }) => {
  return (
    <>
      <div className="MainWrapper">
        <div className="ModelContent">
          <h1>How Can We Help You ?</h1>
          <p>
            <ul>
              LinkedUs is a website that serves as a platform to connect job
              seekers with potential employers. Some of the common features of a
              job portal site are:
              <li>
                Authentication: Each user can register for their account and
                serve the website using his Login credentials.{" "}
              </li>
              <li>
                Job Listings: The site has a comprehensive list of job openings
                that job seekers can browse through.
              </li>
              <li>
                Job Search: The users are able to search for the job they want
                through Job title,salary, and other criteria.
              </li>
              <li>
                Candidate Profiles: Job seekers have the ability to create
                profiles where their personal information is stored.{" "}
              </li>
              <li>
                Job Posting: The Recruiter can post for the new Job openings
                with its description.
              </li>
            </ul>
          </p>
          <button id="ViewMore" onClick={() => closeModal2()}>
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default HowHelp;
