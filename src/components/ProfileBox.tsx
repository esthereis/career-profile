import { FiLinkedin, FiMail, FiGithub } from 'react-icons/fi';

type Props = {
  src: string;
};

export default function ProfileBox({ src }: Props) {
  return (
    <div className='profile-box'>
      <div className='data-container'>
        <img src={src} alt='profile-picture' className='profile-picture' />
        <h1>Esther Reis</h1>
        <p> Junior Front End Developer</p>
        <p>Almere, Netherlands</p>
      </div>

      <div className='icons-line'>
        <FiLinkedin />
        <FiMail />
        <FiGithub />
      </div>

      <div className='data-container'>
        <h1>Technologies</h1>
        <p>React</p>
        <p>TypeScript</p>
        <p>JavaScript</p>
        <p>Vite</p>
        <p>Git</p>
        <p>GitHub</p>
        <p>Html</p>
        <p>Css</p>
        <p>C</p>
      </div>
    </div>
  );
}
