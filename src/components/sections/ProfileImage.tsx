import { useState } from "react";
import "../../styles/picture.css";

export default function ProfileImage() {
  const [selectedImage, setSelectedImage] = useState("");

  function fileToDataString(file: File) {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onerror = (error) => reject(error);
      reader.onload = () => resolve(reader.result as string);
    });
  }

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }
    try {
      const imgUrl = await fileToDataString(file);
      setSelectedImage(imgUrl);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <input
        type="file"
        name="image"
        accept="image/png, image/gif, image/jpeg"
        onChange={(e) => {
          handleFileChange(e);
        }}
      />
      <img src={selectedImage} alt="profile-image" className="profile-image" />
    </div>
  );
}
