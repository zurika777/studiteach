import {Navigation} from '../../global';
import {Logo} from '../../global/components/Logo'
export  function Header() {
    return (
        <header>
            <div className="hed-nav">

        <Logo/>

            <Navigation customClass="headerNav"/>
            </div>
        </header>

    );
}