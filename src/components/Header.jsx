import Container from './Container';
import {NavLink as RouterLink} from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

const Header = () => {

    const getClassName = props => {
        return `${props.isActive ? 'font-bold' : ''} hover:underline text-2xl hover:text-sky-400 hover:scale-150 transition duration-300`
    }

    return <Container>
        <nav className="flex gap-10">
            <RouterLink className={getClassName} to="/">Home</RouterLink>
            <RouterLink className={getClassName} to="/About">About</RouterLink>
            <RouterLink className={getClassName} to="/Books">Books</RouterLink>
        </nav>
        <Breadcrumbs />
    </Container>
}

export default Header;