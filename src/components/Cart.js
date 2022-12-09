import { Link } from 'react-router-dom';

function Cart({user}) {

    if(!user)
    return(
            <p className='if'> 
                Cart Not Available 
            </p>
        )

    return(

    <section className='cart'>
            <Link to="/people">
                <div className='cart'>
                    GO TO CART
                </div>
            </Link>
    </section>
    )
};

export default Cart;