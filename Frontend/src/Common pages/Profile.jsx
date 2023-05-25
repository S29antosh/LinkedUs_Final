import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation_Bar from "../Components/Navigation_Bar";
import Footer from "../Components/Footer";
import "../CSS files/Profile.css";
import avatar from "../assets/profile.png";

const Profile = () => {
  const token = localStorage.getItem("token");
  const storedImageUrlKey = `imageUrl_${localStorage.getItem("email")}`;
  const storedImageUrl = localStorage.getItem(storedImageUrlKey) || "";
  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(storedImageUrl);
  const [isLoading, setIsLoading] = useState(false);

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
        const { name, email, image } = res.data;
        setData({ name, email, image });
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
        <Navigation_Bar />
        <div className="profile_container">
          <div class="profile_left">
            <div className="profile_image"></div>
            <div className="profile_name">Name Here</div>
            <div className="profile_upload">Upload</div>
          </div>

          <div className="profile_right">
            <div className="Applied_dialog">
              <div className="text_applicationstatus"></div>
              Basic Information{" "}
            </div>
            <div className="match_dialog">Other Skills</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
