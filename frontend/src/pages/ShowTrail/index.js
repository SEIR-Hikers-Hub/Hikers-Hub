import { Link } from 'react-router-dom';
// STYLES
import './styles.css';

export default function ShowTrail({ getTrails, shownTrail, region }) {

    return (
        <main className="center-item">

            <h2>{shownTrail.name}</h2>
            <img src={shownTrail.image}></img>
            <h3>Location:</h3><p>{shownTrail.location}</p>
            <h3>Difficulty:</h3><p>{shownTrail.difficulty}</p>
            <h3>Description:</h3><p>{shownTrail.description}</p>
            <h3>Terrain:</h3><p>{shownTrail.terrain}</p>
            <h3>Activity:</h3><p>{shownTrail.activity}</p>
            <h3>Waterfalls?:</h3><p>{shownTrail.waterfalls}</p>
            <h3>Total Distance:</h3><p>{shownTrail.distance} Miles</p>
            <h3>{shownTrail.reviews}</h3>

            <Link onClick={() => getTrails(region)} to='/hikes' >Return to {region} Trails</Link>
        </main>
    )
};