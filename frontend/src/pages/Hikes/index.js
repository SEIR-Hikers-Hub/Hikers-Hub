


// PACKAGES
import { Link } from 'react-router-dom';
// STYLES
import './styles.css';


export default function Hikes({ trails, getTrail, region }) {
    console.log(region);

    return (
        <main className="center-item">

            <h2>Welcome to the {region} Trails page</h2>
            <div className="trails">
                {trails && trails.map((trail, i) => {

                    return (

                        <div key={i}>
                            <Link
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