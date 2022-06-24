import { Link } from 'react-router-dom';
import './Nav.css';
import { HiMenu } from 'react-icons/hi'; 



export const Nav = () => {
  return (
    <nav className='nav' >
      <div className="links">
        <Link className="home" id='pc' to="/">Home</Link>
        <a className='home' id='pc' href="https://github.com/octokit/rest.js/" target={'_blank'} >API</a>
        <a className='home' id='pc' href="https://github.com/vitorconceicaovc/gitline" target={'_blank'} >Github</a>
        <Link className="home" id='pc' to="/about">About</Link>
        <Link className="demo" id='pc' to="/demo">Demo</Link>
        <button  id='burguer'><HiMenu/></button>
      </div>
    </nav>
      
  );
}



