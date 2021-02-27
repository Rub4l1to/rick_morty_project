import React, { useEffect, useState } from 'react'

const Header = ({ handleFilter }) => {

    const [targetCharacter, setTargetCharacter] = useState("");

    useEffect(() => {
        handleFilter(targetCharacter);
        return () => {}
    }, [targetCharacter])

    return (
        <header className="header">
            <nav className="nav">
                <img className="nav__logo" src="img/logo.png" alt="logo" />
            </nav>
            <div className="search">
                <article className="search__box">
                    <input type="text" onChange={(e) => setTargetCharacter(e.target.value)} className="search__seeker" placeholder="Buscar..." />
                </article>
            </div>
        </header>
    )
}

export default Header;