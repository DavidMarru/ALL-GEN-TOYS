import fidgetSpinner1 from './images/fidgetSpinner1.png.png';
import { HashLink as NavLink } from 'react-router-hash-link';
import "./showCase.css";
const ShowCase1 = () => {
    return ( 
        <div className="SC-container">
            <div className="SC-content">
                <div className="sc-left">
                    <h3 className='our-products'>OUR PRODUCTS PROMISE</h3>
                <div className="SC-text">
                    <h3>DARK STAR FIDGET SPINNER</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum hic vel quis quas maiores laudantium quod facilis nam nostrum repellendus, dolore unde sequi, molestiae, in reiciendis accusantium dolor blanditiis quae?</p>
                    <NavLink to='#UniversalToys'>EXPLORE</NavLink>
                </div>
                </div>
                <div className="sc-right">
                <div className="SC-image">
                    <p>DARK STAR FIDGET SPINNER</p>
                </div>
                </div>

            </div>
        </div>
     );
}
 
export default ShowCase1;