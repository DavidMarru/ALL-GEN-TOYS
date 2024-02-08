import ProductCard from "./ProductCard";
import CategoryTemplate from "./categoryTemplate";
import fidgetSpinner1 from "./images/fidgetSpinner1.png.png";
import fidgetSpinner2 from "./images/fidget spinner 35d6b5a9-7c07-4a7a-b409-9cc75f5ed653.png";
import KidT2Image from './images/KidT2.png';
import KidT4Image from './images/KidT4.png';

const UniversalToys = () => {
    return ( 
        <div className="display" id="UniversalToys">
            <CategoryTemplate
                        categoryTittle="Universal Toys"
                        vales="NEVER TO OLD A LITTLE ENTERTAINMENT "
                
            />
                <div className="grid-container">
                    <ProductCard
                        
                        productId = "10"
                        imagePath = {fidgetSpinner1}
                        name="DARK STAR FIDGET SPINNER"
                        description="Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum.."
                        rating="Rating: 4/5"
                        price="35.99"
                    />
                
                    <ProductCard
                        
                        productId = "7"
                        imagePath = {fidgetSpinner2}
                        name="LOSS TIME FIDGET SPINNER"
                        description="Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum.."
                        rating="Rating: 4/5"
                        price="35.99"
                    />
            
            <ProductCard
                        productId = "8"
                        imagePath= {KidT2Image}
                        name="DLR"
                        description="Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum.."
                        rating="Rating: 4/5"
                        price="134.99"
                    />
            
                    <ProductCard
                        productId = "5"
                        imagePath = {KidT4Image}
                        name="Yellow Car"
                        description="Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum.."
                        rating="Rating: 4/5"
                        price="30.99"
                    />
            </div>        
        </div>
     );
}



export default UniversalToys;