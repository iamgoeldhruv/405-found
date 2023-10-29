

import './footer.css'
export default function Footer() {
    return (
        <div className='footer-main'>
            <div className='footer-start'>
                <p style={{ fontSize: "48px", fontWeight: "bolder", color: "#AAA8AD", margin: "10px" }}>EtherFlow is built upon</p>
                <p className='footer-start-1' >
                    <img  src='/solidty.svg' alt='img1' />
                    <img src='/django.svg' alt='img1' />
                    <img src='/react.svg' alt='img1'  />
                    <img src='/reacts.svg' alt='img1' />
                </p>
            </div>
            <hr className='hr1'/>
            <div className='footer-mid-main'>
                <div className='footer-mid'>
                    <p> <img src="/ETHERFLOW_LOGO.svg" alt="" /> </p>

                    <div className='footer-mid-1'>
                        <li>Protocol</li>
                        <li>Docs</li>
                        <li>Security</li>
                        <li>FAQ</li>
                    </div>

                </div>

                <div className='footer-mid'>
                    <div className='footer-end-left'><img alt='img1' src='/socialicons.svg' /></div>
                    <div className='footer-end'>
                        <div className='footer-end-right'>
                            <li>Branding</li>
                            <li>Blog</li>
                        </div>
                        <div className='footer-end-right'>
                            <li>Privacy Policy</li>
                            <li>Terms & conditions</li>
                            <li>Contact</li>
                        </div>
                    </div>
                </div>


            </div>
            <div>
                <p>© 2023. EtherFlow Co. All rights reserved. </p>
            </div>
        </div>
    )
}