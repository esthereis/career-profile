import "./App.css";
import Repositories from "./components/Repositories";
import Certificates from "./components/Certificates";
import SideProfile from "./SideProfile";

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
