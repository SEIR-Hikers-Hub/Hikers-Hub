

// STYLES
import './styles.css';

export default function ShowTrail({shownTrail}) {

    return (
        <main className="center-item">

            <h2>{shownTrail.name}</h2>
            <img src={shownTrail.image}></img>
            <h2>{shownTrail.location}</h2>
            <h2>{shownTrail.difficulty} difficulty</h2>
            <h2>{shownTrail.description}</h2>
            <h2>Terrain: {shownTrail.terrain}</h2>
            <h2>Activity: {shownTrail.activity}</h2>
            <h2>Waterfalls? {shownTrail.waterfalls}</h2>
            <h2>Total distance(In miles): {shownTrail.distance}</h2>
            <h2>{shownTrail.reviews}</h2>
        </main>
    )
};