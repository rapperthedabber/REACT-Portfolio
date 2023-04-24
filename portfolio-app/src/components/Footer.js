import React from 'react';

function Footer() {

    const icons = [
        {
            name: 'fa-brands fa-github',
            link: 'https://github.com/rapperthedabber/'
        },
        {
            name: 'fa-brands fa-linkedin',
            link: 'https://www.linkedin.com/in/jerry-dong-002040226/'
        },
        {
            name: 'fa-solid fa-at',
            link: 'mailto: Jamesharold1738@gmail.com'
        },
        
    ]

    return (
        <footer className='footer'>
            <div className="fixed-bottom d-flex justify-content-center bg-light ">

                {icons.map(icon =>
                    <div className='px-2 gradient-text opacity-75 fs-5'>
                        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
                    </div>
                )}
            </div>
        </footer>
    );
}

export default Footer;