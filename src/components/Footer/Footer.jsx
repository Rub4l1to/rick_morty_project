import React, { useState } from 'react'

const Footer = () => {
    const [date, setDate] = useState(new Date());

    return (
        <footer className="footer">
            <div className="footer__foot">
                <p className="footer__text">&copy; Adrián Pérez García {date.getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer;