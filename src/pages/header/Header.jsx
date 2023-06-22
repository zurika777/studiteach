import { Navigation } from '../../global';
export function Header() {
    return (
        <header>
            <h1>My App</h1>
            <Navigation customClass="headerNav"/>
        </header>
    );
}