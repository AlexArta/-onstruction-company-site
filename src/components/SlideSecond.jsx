import building1 from '../img/modernM.jpg'
import '../styles/slide.css'

const Slide = () => {
    return (
        <div className="mainContainerSecond">
            
            <div className="middleImg">
                <a href="#"><img src={building1} alt="mainPhoto" /></a>
            </div>
            <div className="listForSecond">
                <ul>
                    <li>
                        <p>Custom-designed modern buildings tailored to your specifications, ensuring unique and personalized homes.</p>
                    </li>
                    <li>
                        <p>Utilizing the latest construction technologies and eco-friendly materials for energy efficiency and durability.</p>
                    </li>
                    <li>
                        <p>End-to-end project management from concept to completion, guaranteeing quality and timely delivery.</p>
                    </li>
                    <li>
                        <p>Experienced architects and engineers dedicated to innovative solutions and sustainable development.</p>
                    </li>
                    <li>
                        <p>Flexible financing options and transparent pricing to meet your budget and expectations.</p>
                    </li>
                </ul>
            </div>
            <div className="middleImg">
                <a href="#"><img src={building1} alt="mainPhoto" /></a>
            </div>
        </div>
    )
}

export default Slide;