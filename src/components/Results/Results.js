import './Results.css'

export const Results = (props) => {

    const { repos } = props
    console.log("Repos:", repos.data)

    
        
    
    
    const listRepos = 
            repos.length !== 0 ? (
                repos.data.map((item) => (

                    
                    <li key={item.id} >
                        
                        <div className='item'>
                            <div className='top' >
                                <div className='title'><a className="" href={item.html_url} target='_blank' >{item.name}</a></div>
                                <div className='date'><p>{item.created_at.slice(0, 10)}</p></div>
                            </div>
                            <div className='under' >
                                <p>{item.language}</p>
                            </div>
                            
                            
                        </div>
                    </li> 
                ))
            ) : (
            <li>No repos</li>
            );
        
        return (<ul>{listRepos}</ul>
        
    );
}