import MobileDetect from "mobile-detect";
import React, { useState } from "react";
import logo from "./../Icon.png";
import "./style.css";
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();
export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="org-nav">
      <div className="org-nav-top">
        <a href="https://zeehaus.com">
          <img src={logo} alt="zeehaus.com" />
        </a>
        {isMobile && (
          <span className="fas fa-bars" onClick={() => setOpen(true)} />
        )}
      </div>
      {!isMobile && (
        <div className="org-nav-bottom">
          <div className="org-nav-element">
            <a
              href="https://zeehaus.com/coin"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              Zeehaus Coin
            </a>
          </div>
          <div className="org-nav-element">
            <a href="#">Blockchain</a>
            <div>
              <a
                target={"_blank"}
                rel="noopener noreferrer"
                href="https://zeehaus.com/risk_and_protection#blockchain"
              >
                Property & Protection
              </a>
              <a
                target={"_blank"}
                rel="noopener noreferrer"
                href="https://zeehaus.com/blockchain"
              >
                Public Ledger
              </a>
            </div>
          </div>
          <div className="org-nav-element">
            <a
              target={"_blank"}
              rel="noopener noreferrer"
              href="https://zeehaus.com/common/dao"
            >
              DAO & Smart Contract
            </a>
          </div>
          <div className="org-nav-element">
            <a
              target={"_blank"}
              rel="noopener noreferrer"
              href="https://zeehaus.com/about_us"
            >
              About Zeehaus
            </a>
          </div>
          <div className="org-nav-element">
            <a
              target={"_blank"}
              rel="noopener noreferrer"
              href="https://zeehaus.com/faq"
            >
              FAQ
            </a>
          </div>
          <div className="org-nav-element">
            <a
              target={"_blank"}
              rel="noopener noreferrer"
              href="https://zeehaus.com/submit_inquiry#coin"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
      <div className={open ? "menu-drawer drawer-open" : "menu-drawer"}>
        <span
          className="close fas fa-times"
          onClick={() => setOpen(false)}
        ></span>
        {isMobile && (
          <div className="org-nav-bottom">
            <div className="org-nav-element">
              <a
                target={"_blank"}
                rel="noopener noreferrer"
                href="https://zeehaus.com/coin"
              >
                Zeehaus Coin
              </a>
            </div>
            <div className="org-nav-element">
              <a href="#">Blockchain</a>
              <div>
                <a
                  target={"_blank"}
                  rel="noopener noreferrer"
                  href="https://zeehaus.com/risk_and_protection#blockchain"
                >
                  Property & Protection
                </a>
                <a
                  target={"_blank"}
                  rel="noopener noreferrer"
                  href="https://zeehaus.com/blockchain"
                >
                  Public Ledger
                </a>
              </div>
            </div>
            <div className="org-nav-element">
              <a
                target={"_blank"}
                rel="noopener noreferrer"
                href="https://zeehaus.com/common/dao"
              >
                DAO & Smart Contract
              </a>
            </div>
            <div className="org-nav-element">
              <a
                target={"_blank"}
                rel="noopener noreferrer"
                href="https://zeehaus.com/about_us"
              >
                About Zeehaus
              </a>
            </div>
            <div className="org-nav-element">
              <a
                target={"_blank"}
                rel="noopener noreferrer"
                href="https://zeehaus.com/faq"
              >
                FAQ
              </a>
            </div>
            <div className="org-nav-element">
              <a
                target={"_blank"}
                rel="noopener noreferrer"
                href="https://zeehaus.com/submit_inquiry#coin"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
