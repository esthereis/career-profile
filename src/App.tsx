import './App.css';
import ProfileBox from './components/ProfileBox';
import Repositories from './components/Repositories';

function App() {
  return (
    <div className='container'>
      <ProfileBox src='https://cdn.lospec.com/gallery/pikachu-122671.png' />

      <div className='main-content'>
        <Repositories />
      </div>
    </div>
  );
}

export default App;
