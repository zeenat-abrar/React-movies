import { NavLink } from "react-router-dom";

export default function Menu(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
<NavLink to="/" className="navbar-brand">React movies</NavLink>
<div className="collapse navbar-collapse">
<ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
<li className="nav-item">
<NavLink className="nav-link" to='/genres'>
    Genres
</NavLink>
</li>
<li className="nav-item">
<NavLink className="nav-link" to='/movies/filter'>
    Filter movies
</NavLink>
</li>
<li className="nav-item">
<NavLink className="nav-link" to='/actors'>
    Actors
</NavLink>
</li>
<li className="nav-item">
<NavLink className="nav-link" to='/movietheaters'>
    movie Theaters
</NavLink>
</li>
<li className="nav-item">
<NavLink className="nav-link" to='/movies/create'>
    create a movie
</NavLink>
</li>
</ul>
</div>
    </div>
        </nav>
    )
}