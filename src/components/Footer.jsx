import React from 'react';

function Footer(props) {
    return (
        <footer className='footer-section'>
            <div className="container">
                <div className="row text-white text-center">
                    <div className="col-12">
                        <div className="copy-right">
                            &copy; Copyright 2022 {" "}|
                            <a href="/#">&nbsp;BothOfUs</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

