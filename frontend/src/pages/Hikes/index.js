
// STYLES
import './styles.css';


export default function Hikes({trails}) {


    return (
        <main className="center-item">
            
            <h1>This is the Hike page.</h1>
            <div className="trails">
                {trails && trails.map((trail, i) => {
                return (
                    <div key={i}>
                    {trail.name}
                    </div>
                )
                })}
            </div>
        </main>
    )
};