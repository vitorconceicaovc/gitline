import axios  from "axios";
import { useState } from "react";
import { Results } from "../Results/Results";
import './SearchBar.css'
import {FaSearch} from 'react-icons/fa'

export const SearchBar = () => {


    const [SearchInput, setSearchInput] = useState('')

    const [repos, setRepos] = useState([])


    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handleClick = async () => {
        

        try {

            const result = await axios(`https://api.github.com/users/${SearchInput}/repos`)

            setRepos(result)
            
        } catch (err) {
            console.log(err)
        }

       
    }

    return (
        <>
            <div className="searchbar">
                <input type="text" placeholder="search" value={SearchInput} onChange={handleChange}/>
                <button className="sbutton" onClick={handleClick} ><FaSearch/></button>
                
            </div>
            
            <Results repos={repos} />
        </>
    );
}