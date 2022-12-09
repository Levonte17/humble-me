import linked from '../assets/linked.png';
import insta from '../assets/insta.png';
import facebook from '../assets/facebook.jpg';
import emaillll from '../assets/emaillll.png';
import call from '../assets/call.png';

function Footer(props) {
    
    return(
        <div className="footer">

<hr/>

<p>
    Copyright &copy; All Rights Reserved Brush Cutz 2022 
<br/>
    This Site Was Made By Digital Investors Hub
<br/>
<br/>
    Follow Us:
</p>

 <h1>
    <img 
        className="footer" 
        src={call} 
        alt="foot"
    />

    <img 
        className="footer" 
        src={emaillll} 
        alt="foot"
    />

    <img 
        className="footer" 
        src={facebook} 
        alt="foot"
    />

    <img 
        className="footer" 
        src={insta} 
        alt="foot"
    />

    <img 
        className="footer" 
        src={linked} 
        alt="foot"
    />
</h1>


</div>
    )
};

export default Footer;
        