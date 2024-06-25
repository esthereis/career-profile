import './App.css';
import ProfileBox from './components/ProfileBox';
import Repositories from './components/Repositories';
import Certificates from './components/Certificates';

function App() {
  return (
    <div className='container'>
      <ProfileBox src='https://cdn.lospec.com/gallery/pikachu-122671.png' />

      <div className='main-content'>
        <Repositories />
        <Certificates />
      </div>
    </div>
  );
}

export default App;
