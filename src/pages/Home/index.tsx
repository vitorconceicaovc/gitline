import { Link } from 'react-router-dom';
import './Home.css';
import { Footer } from '../../components/Footer/Footer';
import  Gitlogo  from '../../Assets/git_logo.png';
import Wave from '../../Assets/wave.svg';
import { MdTimeline, MdMobileScreenShare } from 'react-icons/md'; 
import { ImDatabase } from 'react-icons/im'; 
import { FaReact } from 'react-icons/fa'; 
import { CgProfile } from 'react-icons/cg';

export const Home = () => {
    return (
        <section className='home' >
            <Footer/>
            <div className="info">
                <h1 className='title'>GitLine</h1>
                <h1 className='subtitle'>graphical representation </h1>
                <p className='resume' >
                Gitline combines API's and graphical representation to create a visual history of a users GitHub activity.
                    
                </p>
                <Link className="demo" to="/demo">Get started</Link>
            </div>
            <div className="image">
                <div className="icons">
                    <div className="img">
                        <MdTimeline/>
                    </div>
                    <div className="img">
                        <ImDatabase/>
                    </div>
                    <div className="img">
                        <FaReact/>
                    </div>
                    <div className="img">
                        <MdMobileScreenShare/>
                    </div>
                    <div className="img">
                        <CgProfile/>
                    </div>
                </div>
                <img className='gitlogo' src={Gitlogo} alt="" />
            </div>
            <div className="wave">
                <img src={Wave} className="filter-green" alt="" />
            </div>
            
        </section>
    );
}