import "../CSS files/AboutUs.css";

const WhatDo = ({ closeModal }) => {
  return (
    <>
      <div className="MainWrapper">
        <div className="ModelContent">
          <h1>What Do We Do ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            deserunt distinctio mollitia aut at hic reprehenderit consequuntur
            eveniet voluptas itaque illum numquam eius, illo voluptatibus, quas
            asperiores vero totam repudiandae. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Optio accusantium obcaecati molestiae,
            temporibus natus officia nam ipsum velit ipsam numquam illum nihil
            voluptate veniam distinctio nisi repellendus repellat exercitationem
            dolores?
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
