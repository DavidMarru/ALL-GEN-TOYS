import ProductCard from './ProductCard';
import KidT1Image from './images/KidT1.png';
import KidT2Image from './images/KidT2.png';


const WhatsNew = () => {
    return (
        <div className="WHATS-HOT" id='WhatsNew'>
            <div className="product-tital" id="page-titals">
                <h2>WHAT'S HOT </h2>
            </div>

            <div className="whats-hot-product">
                <div className="featurer-1" id="features">
                    <ProductCard
                        productId = "1"
                        imagePath = {KidT1Image}
                        name="Product 1"
                        description="Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum.."
                        rating="Rating: 4/5"
                        price="24.99"
                                  />
                  </div>

                <div className="featurer-2" id="features">
                    <ProductCard
                        productId = "2"
                        imagePath= {KidT2Image}
                        name="DLR"
                        description="Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum.."
                        rating="Rating: 4/5"
                        price="134.99"
                    />
                </div>
            </div>
        </div>
    );
}

export default WhatsNew;
