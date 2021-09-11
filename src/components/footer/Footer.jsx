import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footercontainer">
                <div className="row">

                    <div className="footer-col">
                        <h4>Comunidade</h4>
                        <ul>
                            <li><a href="">Sobre nós</a></li>
                            <li><a href="">Seja membro</a></li>
                            <li><a href="">Política de Privacidade</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Ajuda</h4>
                        <ul>
                            <li><a href="">Serviços</a></li>
                            <li><a href="">Doações</a></li>
                            <li><a href=""></a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Acompanhe</h4>
                        <div className= "social-link-footer">
                            <a href="http:///www.instagram.com/hoev_oficial/" target="_blank">
                                <i className="bottomIcon fab fa-instagram-square" /></a>
                            <a href="https://web.facebook.com/hoevofiicial/?ref=pages_you_manage&_rdc=1&_rdr" target="_blank">
                                <i className="bottomIcon fab fa-facebook" /></a>
                            <a href="https://www.youtube.com/channel/UC1wX21rVWNAhwtfOfgcUVpA" target="_blank">
                                <i className="bottomIcon fab fa-youtube" /></a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </footer>
    )
}
