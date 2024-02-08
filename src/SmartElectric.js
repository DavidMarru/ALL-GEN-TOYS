import ProductCard from "./ProductCard";
import CategoryTemplate from "./categoryTemplate";
import KidT3Image from './images/KidT3.png';


const SmartElectric = () => {
    return ( 
        <div className="display" id="SmartElectric">
            <CategoryTemplate
                        categoryTittle="Smart Electric"
                        vales="FOR THE TEK LOVERS"
                
            />
                <div className="Smart-product">
                <div className="grid-container">
                    <ProductCard 
                        productId = "11"
                        imagePath = {KidT3Image}
                        name="1970 Red Car"
                        description="Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum.."
                        rating="Rating: 4/5"
                        price="30.99"
                    />
                
                    <ProductCard
                        productId = "12"
                        imagePath = {KidT3Image}
                        name="1970 Red Car"
                        description="Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum.."
                        rating="Rating: 4/5"
                        price="30.99"
                    />
            
                    <ProductCard
                        productId = "13"
                        imagePath = {KidT3Image}
                        name="1970 Red Car"
                        description="Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum.."
                        rating="Rating: 4/5"
                        price="30.99"
                    />
            
                    <ProductCard
                        productId = "14"
                        imagePath = {KidT3Image}
                        name="1970 Red Car"
                        description="Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum.."
                        rating="Rating: 4/5"
                        price="30.99"
                    />
            </div>    
            </div>    
        </div>
     );
}
 
export default SmartElectric;