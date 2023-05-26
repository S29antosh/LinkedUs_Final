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
    <div className="profile">
      <Navigation_Bar />

      <form method="POST" encType="multipart/form-data">
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

<Footer />
</div>
);
};

export default Profile;

