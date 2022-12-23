

import { Link } from 'react-router-dom';
// STYLES
import './styles.css';


export default function Hikes({trails}) {


    return (
        <main className="center-item">
            
            <h1>This is the Hike page.</h1>
            <div className="trails">
                {trails && trails.map((trail, i) => {

                return (

                    <Link>
                        <div key={i}>
                        {trail.name}
                        </div>
                    </Link>
                )
                })}
            </div>
        </main>
    )
};