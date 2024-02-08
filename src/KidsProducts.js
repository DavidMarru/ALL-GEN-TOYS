import ProductCard from "./ProductCard";
import CategoryTemplate from "./categoryTemplate";
import KidT3Image from './images/KidT3.png';
import lego from './images/kids lego toys 8a6fcc7f-04ac-4966-934f-30ddc8a0cbb5.png';
import KidsT5 from './images/kids Play 100-P 306cbc93-5436-4d70-ba71-225895250206.png';
import KidT1Image from './images/KidT1.png';

const KidsProducts = () => {
    return ( 

<div className="display" id="KidsProducts">
            <CategoryTemplate
                        categoryTittle="Kids Toys"
                        vales="FOR MOMENTS WELL TREASURED"
                
            />
                <div className="grid-container">
                    <ProductCard
                        productId = "3"
                        imagePath = {KidT3Image}
                        name="1965 Red Car"
                        description="Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum.."
                        rating="Rating: 4/5"
                        price="24.99"
                    />
                
                    <ProductCard
                        productId = "4"
                        imagePath = {lego}
                        name="Lego 100"
                        description="Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum.."
                        rating="Rating: 4/5"
                        price="12.99"
                    />

                        <ProductCard
                        productId = "1"
                        imagePath = {KidT1Image}
                        name="Product 1"
                        description="Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum.."
                        rating="Rating: 4/5"
                        price="24.99"/>            
                    <ProductCard
                        productId = "6"
                        imagePath = {KidsT5}
                        name="Dream Train"
                        description="Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum.."
                        rating="Rating: 4/5"
                        price="149.99"
                    />
            </div>        
        </div>
    );
}
 
export default KidsProducts;