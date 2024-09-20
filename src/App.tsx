import "./App.css";
import Repositories from "./components/Repositories";
import Certificates from "./components/Certificates";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="container">
      <Profile />

      <div className="main-content">
        <Repositories />
        <Certificates />
      </div>
    </div>
  );
}

export default App;
