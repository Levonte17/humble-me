import clothes from '../assets/clothes.png';

function Clothing(props) {
    return(
        <div className="products">
            <img src={clothes} className="products" alt="products" />
        </div>

    )
};
export default Clothing;