import React from "react";
import './topbar.css'

export default function Topbar() {
    return (
      <div className="top">
          <div className="topLeft">
              <a href="http:///www.instagram.com/hoev_oficial/" target="_blank">
                <i className="topIcon fab fa-instagram-square"/></a>
              <a href="https://web.facebook.com/hoevofiicial/?ref=pages_you_manage&_rdc=1&_rdr" target="_blank">
                <i className="topIcon fab fa-facebook"/></a>
              <a href="https://www.youtube.com/channel/UC1wX21rVWNAhwtfOfgcUVpA" target="_blank">
              <i className="topIcon fab fa-youtube"/></a>
          </div>
          <div className="topCenter">
              <ul className="topList">
                  <li className="topListItem">Home</li>
                  <li className="topListItem">Comunidade</li>
                  <li className="topListItem">Serviços</li>
                  <li className="topListItem">Contatos</li>
              </ul>
          </div>
          <div className="topRight">
              <i className="searchIcon fas fa-search"></i>
          </div>
      </div>
    );
}
  