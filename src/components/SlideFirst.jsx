import building1 from '../img/modernB.jpg'
import '../styles/slide.css'

const Slide = () => {
    return (
        <div className="mainContainer">
            <div className="mainText">
            <h1>Modern Houses Turnkey</h1>
            <h3>Construction of Innovative Residential Complexes</h3>
                <ul>
                <li><p>Professional Design and Planning</p></li>
                    <li><p>Use of Eco-friendly and Energy-efficient Materials</p></li>
                    <li><p>Individual Approach for Every Client</p></li>
                </ul>
                <button>ORDER</button>
            </div>
            <div className="blockImg">
                <a href="#"><img src={building1} alt="mainPhoto" /></a>
            </div>
        </div>
    )
}

export default Slide;
