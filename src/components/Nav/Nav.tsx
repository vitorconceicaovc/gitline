import { Link } from 'react-router-dom';
import './Nav.css';

export const Nav = () => {
    return (
        <nav className='nav' >
          <div className="links">
            <Link className="home" to="/">Home</Link>
            <a className='home' href="https://www.vitorconceicao.com/" target={'_blank'} >API</a>
            <a className='home' href="https://github.com/vitorconceicaovc/gitline" target={'_blank'} >Github</a>
            <Link className="home" to="/about">About</Link>
            <Link className="demo" to="/demo">Demo</Link>
          </div>
        </nav>
    );
}