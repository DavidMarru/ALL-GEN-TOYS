const CategoryTemplate = ({categoryTittle,vales}) => {
    return ( 
        <div className="category-container">
            <h2 className="C-Tittle">{categoryTittle}</h2>
            <h2 className="C-Vales">{vales}</h2>
        </div>
    );
}
export default CategoryTemplate;