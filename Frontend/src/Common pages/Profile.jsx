import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation_Bar from "../Components/Navigation_Bar";
import Footer from "../Components/Footer";
import "../CSS files/Profile.css";
import avatar from "../assets/profile.png";

const Profile = () => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  const storedSkillKey = `skill_${email}`;
  const storedBasicInfoKey = `basicInfo_${email}`;
  const storedImageUrlKey = `imageUrl_${email}`;
  const storedSkill = localStorage.getItem(storedSkillKey) || "";
  const storedBasicInfo = localStorage.getItem(storedBasicInfoKey) || "";
  const storedImageUrl = localStorage.getItem(storedImageUrlKey) || "";
  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(storedImageUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [skill, setSkill] = useState(storedSkill);
  const [basicInfo, setBasicInfo] = useState(storedBasicInfo);
  const [isSubmitted, setIsSubmitted] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = () => {
    setIsLoading(true);
    axios
      .get("http://localhost:3000/api/Profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const { name, email, image, skill, basicInfo } = res.data;
        setData({ name, email, image });
        if (skill) {
          setSkill(skill);
        }
        if (basicInfo) {
          setBasicInfo(basicInfo);
        }
        if (image && image.data) {
          const imageUrl = `http://localhost:3000/api/Profile/image/${image.data}`;
          setImageUrl(imageUrl);
          localStorage.setItem(storedImageUrlKey, imageUrl);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const uploadImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    try {
      setIsLoading(true);
      const res = await axios.post(
        "http://localhost:3000/api/Profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.data.image && res.data.image.data) {
        const imageUrl = `http://localhost:3000/api/Profile/image/${res.data.image.data}`;
        setImageUrl(imageUrl);
        localStorage.setItem(storedImageUrlKey, imageUrl);
      }

      console.log("Image uploaded successfully");
    } catch (error) {
      console.log("Error uploading image: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    axios
      .post(
        "http://localhost:3000/api/Profile/save",
        { skill, basicInfo },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log("Data saved successfully");
        localStorage.setItem(storedSkillKey, skill);
        localStorage.setItem(storedBasicInfoKey, basicInfo);
        setIsEditMode(false); // Disable edit mode after saving
      })
      .catch((error) => {
        console.log("Error saving data: ", error);
      });
  };

  const handleEdit = () => {
    setIsSubmitted(false);
    setIsEditMode(true);//enable edit mode
  };

  const renderImage = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    } else if (imageUrl) {
      return <img src={imageUrl} alt="" className="profile_image" />;
    } else {
      return (
        <img src={avatar} alt="Default Profile" className="profile_image" />
      );
    }
  };

  return (
    <>
      <div className="layout">
        <Navigation_Bar home="Home" profile="Profile" />
        <div className="profile_container">
          <div className="profile_left">
            <label htmlFor="file-upload" className="Name">
              {renderImage()}
            </label>

            <input
              name="photo"
              type="file"
              id="file-upload"
              accept=".jpeg,.png,.jpg"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <button onClick={uploadImage} className="profile_upload">
              Upload
            </button>

            <div className="Name">Name: {data && data.name}</div>
            <div className="Email">Email: {data && data.email}</div>
          </div>
        </div>
      </form>

      <form method="POST" action="/login" onSubmit={handleSubmit}>
        <h1>Skills</h1>
        {/* Conditionally render the input field or the stored skill */}
        {isEditMode ? (
          <input
            type="text"
            name="skill"
            placeholder="Enter your Skills"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />
        ) : (
          <div>{skill}</div>
        )}

        <h1>Basic Information</h1>
        {/* Conditionally render the input field or the stored basicInfo */}
        {isEditMode ? (
          <input
            type="text"
            id="pass"
            name="basicInfo"
            placeholder="Enter your basic Information"
            value={basicInfo}
            onChange={(e) => setBasicInfo(e.target.value)}
          />
        ) : (
          <div>{basicInfo}</div>
        )}

        {isSubmitted ? (
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        ) : (
          <div>
            <button type="submit">Save</button>
            <button type="button" onClick={handleEdit}>
              Cancel
            </button>
          </div>
        )}
      </form>

      <Footer />
    </div>
  );
};

export default Profile;
