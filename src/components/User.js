import { login, logout } from '../Firebase';
function User({user}) {
    return(

    <section className='section'>
    { 
        user ? 
        <>
        <div className='nav-logo'>
            <p>
            Welcome Back - 
            {user.displayName}
            </p>
        </div>

        <div className='logout'
            onClick={logout}>
            LOGOUT
        </div>
        </>
    :
    <div className='logout'
        onClick={login}>
        LOGIN
    </div>
    }
</section>
    )
};

export default User;
