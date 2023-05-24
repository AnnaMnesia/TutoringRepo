import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <main>
                <nav>
                    <NavLink to='/'>INDEX</NavLink>
                    <NavLink to='about'>ABOUT</NavLink>
                    <NavLink to='characterList'>CHARACTER</NavLink>
                </nav>
            </main>
            <Outlet/>
        </div>
    )
}

export default Home;