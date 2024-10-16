import "./App.css";
import Repositories from "./components/sections/Repositories";
import Certificates from "./components/sections/Certificates";
import SideProfile from "./components/sections/SideProfile";

function App() {
  return (
    <div className="container">
      <SideProfile />

      <div className="main-content">
        <Repositories />
        <Certificates />
      </div>
    </div>
  );
}

export default App;
