import { Footer } from "../../components/Footer/Footer";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import './Demo.css'

export const Demo = () => {

    return (
        <section>
            <div className="input-area">
                <h2>Title</h2>
                <SearchBar/>
                
            </div>
            
            <Footer/>
        </section>
    );
}