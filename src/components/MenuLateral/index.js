import { useLocation } from 'react-router-dom';
import './style'
import { Div } from './style';
import Link from '../StyledLink';

const MenuLateral = () => {
    
    // const location = useLocation()
    // const verificaNota = () => {
    //     if(location.pathname === '/'){
    //         let dado = document.createElement('p')
    //         dado.textContent = 'home'
            
    //     }
    // }

    return ( 
        <Div>
            <Link to={'/'}>Home</Link>
            <Link to={'/Game'}>Game</Link>
            <Link to={'/Console'}>Console</Link>
            <Link to={'/Artigo'}>Artigos</Link>
            {/* <p>{verificaNota()}</p> */}
        </Div>
     );
}
 
export default MenuLateral;