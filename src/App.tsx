import "./App.css";
import ProfileData from "./components/ProfileData";
import Repositories from "./components/Repositories";
import Certificates from "./components/Certificates";
import EditableProfileData from "./components/EditableProfileData";

function App() {
  return (
    <div className="container">
      <ProfileData src="https://cdn.lospec.com/gallery/pikachu-122671.png" />
      <EditableProfileData />

      <div className="main-content">
        <Repositories />
        <Certificates />
      </div>
    </div>
  );
}

export default App;
