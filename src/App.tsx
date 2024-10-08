import "./App.css";
import Repositories from "./components/Repositories";
import Certificates from "./components/Certificates";
import SideProfile from "./SideProfile";

function App() {
  return (
    <div className="container">
      <SideProfile src="https://cdn.lospec.com/gallery/pikachu-122671.png" />

      <div className="main-content">
        <Repositories />
        <Certificates />
      </div>
    </div>
  );
}

export default App;
