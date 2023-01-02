


// PACKAGES
import { Link } from 'react-router-dom';
// STYLES
import './styles.css';


export default function Hikes({ trails, getTrail, region }) {
    console.log(region);

    return (
        <main className="center-item">
            <br></br>
            <a className='link' href='/'>Home</a>
            <h2 className='hikes-title' >Welcome to the {region} Trails page</h2>
            <div className="trails">
                {trails && trails.map((trail, i) => {

                    return (

                        <div className='hikes' key={i}>
                            <Link
                                className='underlined-link'
                                onClick={() => getTrail(trail._id)}
                                to={`/trail/${trail._id}`}>
                                {trail.name}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </main>
    )
};