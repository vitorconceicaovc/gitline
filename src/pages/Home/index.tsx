import { Link } from 'react-router-dom';
import './Home.css';
import { Footer } from '../../components/Footer/Footer';
import  Gitlogo  from '../../Assets/git_logo.png';
import Wave from '../../Assets/wave.svg';

export const Home = () => {
    return (
        <section className='home' >
            <Footer/>
            <div className="info">
                <h1 className='title'>GitLine</h1>
                <h1 className='subtitle'>A melhor app de todas</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magni, 
                    dolorem accusamus quae quia dicta blanditiis aspernatur at? Cupiditate.
                </p>
                <Link className="demo" to="/demo">Get started</Link>
            </div>
            <div className="image">
                <div className="icons">
                    <img src={Gitlogo} alt="" />
                    <img src={Gitlogo} alt="" />
                    <img src={Gitlogo} alt="" />
                    <img src={Gitlogo} alt="" />
                    <img src={Gitlogo} alt="" />
                </div>
                <img className='gitlogo' src={Gitlogo} alt="" />
            </div>
            
        </section>
    );
}