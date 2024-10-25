import { useRef, useState } from "react";
import "../../styles/image.css";
import { FiEdit2 } from "react-icons/fi";

export default function ProfileImage() {
  const [selectedImage, setSelectedImage] = useState(
    "https://www.kindpng.com/picc/m/548-5489417_sims-plumbob-pixel-art-hd-png-download.png"
  );

  const ref: React.MutableRefObject<undefined> = useRef();

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
    <div className="image-container">
      <input
        className="input centered-element"
        type="file"
        name="image"
        accept="image/png, image/gif, image/jpeg"
        onChange={(e) => {
          handleFileChange(e);
        }}
        ref={ref}
      />

      <img
        src={selectedImage}
        alt="profile-image"
        className="profile-image centered-element"
        onClick={() => ref.current.click()}
      />

      <button
        className="edit-button centered-element"
        onClick={() => ref.current.click()}
      >
        <FiEdit2 size={40} color="white" />
      </button>
    </div>
  );
}
