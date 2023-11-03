import React from "react";
import { Row, Col, Grid } from "react-flexbox-grid";
import MobileDetect from "mobile-detect";
import Colors from "./Colors";
import ReactSimpleExpander from "./ReactSimpleExpander";
import LogoWhite from "./../Icon.png";
import "./style.css";

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const styles = {
  footer: {
    textAlign: "left",
    padding: "50px 20px",
    paddingBottom: "0px",
    background: "#fff",
    marginTop: 20,
    borderRadius: "0",
    boxShadow: "none",
    borderTop: "1px solid #ddd",
  },
  footerFirmName: {
    fontSize: "fff2rem",
    color: "#fff",
    fontWeight: "bolder",
    display: "flex",
    justifyContent: isMobile ? "center" : "flex-start",
    margin: "20px 0",
    marginBottom: "0",
    cursor: "default",
    paddingTop: 4,
  },
  socialIcons: {
    background: "transparent",
    color: "#aaa",
    margin: "10px",
    padding: "0",
    fontSize: "30px",
    width: "25px",
    height: "25px",
    lineHeight: "25px",
    textAlign: "center",
    textDecoration: "none",
    borderRadius: "50%",
  },
  footerHeads: {
    fontSize: "22px",
    color: Colors.blue,
    textAlign: isMobile ? "center" : "left",
  },
  footerSubHeads: {
    color: "#284e75",
    textAlign: "left",
  },
  copyright: {
    background: "#fff",
    color: "#888",
    overflow: "hidden",
    padding: 0,
  },
};
const redirectTo = (path, props) => {
  window.location.href = path;
  //   window.scrollTo(0, 0);
};

export default class Footer extends React.Component {
  render() {
    const path = this.props.history
      ? this.props.history.location.pathname
      : null;

    return (
      <div className="footer">
        <div>
          <Row
            center="xs"
            middle="xs"
            style={{
              display:
                path === "https://zeehaus.com/how_it_works" ||
                path === "https://zeehaus.com/invest"
                  ? "auto"
                  : "none",
            }}
          >
            <p style={{ color: "#aaa" }}>
              Investment value in real estate can go up or down and may vary by
              property and by market condition. None of the discussions and
              suggestions by the marketplace, through this website or any other
              medium, should be considered as investment, tax, financial,
              accounting, legal, regulatory or compliance advice. Please consult
              a financial advisor before making investment decision at Zeehaus.
              See ‘Investment Risks’ for further information.
            </p>

            <p style={{ color: "#aaa" }}>
              Prior results do not guarantee a similar outcome. Any financial
              projections shown on the website are estimated predictions of
              performance only, are hypothetical and are not guarantees of
              future results. Estimated projections do not represent or
              guarantee the actual results of any transaction, and no
              representation is made that any transaction will, or is likely to,
              achieve results or profits similar to those shown. Any investment
              information contained herein has been secured from sources that
              Zeehaus believes are reliable, but we make no representations or
              warranties as to the accuracy of such information and accept no
              liability therefore.
            </p>

            <p style={{ color: "#aaa" }}>
              Real estate investment opportunities in Equity Sharing ownership
              are offered to investors who complete identity and required
              verifications. Even though the marketplace offers ‘trading’
              capability, it does not guarantee that each investment property
              can be sold in the secondary ‘trading’ platform. Therefore,
              investments on this website are intended for investors who do not
              need a liquid investment, as it might be subject to the entire
              holding period of the Equity Sharing Agreement length.
            </p>
          </Row>
          <Grid style={{ paddingBottom: "0px" }} asDiv={isMobile}>
            <Row center="xs" start="md" middle="xs">
              <Col md={12} style={{ padding: 0 }}>
                <Row start="xs" top="xs">
                  <Col md={3} xs={12}>
                    <Row start={"lg"} center="xs" bottom="xs">
                      <Col md={12}>
                        <div
                          style={styles.footerFirmName}
                          className="logo-extra-big"
                        >
                          <img
                            alt="s"
                            style={{
                              width: 250,
                              cursor: "default",
                              marginLeft: -5,
                            }}
                            src={LogoWhite}
                          />
                          <span className="trademark">R</span>
                        </div>
                        <p style={{ margin: 0 }}>
                          1390 Market St, Suite 200 <br />
                          San Francisco, CA 94102
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    xs={12}
                    md={7}
                    mdOffset={2}
                    style={{ paddingLeft: isMobile ? "" : "2rem" }}
                  >
                    <Row start="xs">
                      <Col md={4} xs={12}>
                        <h3 style={styles.footerHeads}>Services</h3>
                        <div
                          style={styles.footerSubHeads}
                          className="footerLinks"
                        >
                          <ul
                            className={isMobile ? "text-left" : "text-center"}
                          >
                            <li>
                              <a
                                onClick={() =>
                                  redirectTo(
                                    "https://zeehaus.com/common/dao",
                                    this.props
                                  )
                                }
                              >
                                Zeehaus DAO
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() =>
                                  redirectTo(
                                    "https://zeehaus.com/common/consensus_vote",
                                    this.props
                                  )
                                }
                              >
                                Consensus Voting
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() =>
                                  redirectTo(
                                    "https://zeehaus.com/common/coin_property_purchase",
                                    this.props
                                  )
                                }
                              >
                                Buy Coins
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() =>
                                  redirectTo(
                                    "https://zeehaus.com/buy_your_home",
                                    this.props
                                  )
                                }
                              >
                                Homebuyers
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() =>
                                  redirectTo(
                                    "https://zeehaus.com/invest_with_homebuyer",
                                    this.props
                                  )
                                }
                              >
                                Real Estate Investors
                              </a>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={4} xs={12}>
                        <h3 style={styles.footerHeads}>Learn</h3>
                        <div
                          style={styles.footerSubHeads}
                          className="footerLinks"
                        >
                          <ul
                            className={isMobile ? "text-left" : "text-center"}
                          >
                            <li>
                              <a
                                onClick={() =>
                                  redirectTo(
                                    "https://zeehaus.com/our_markets",
                                    this.props
                                  )
                                }
                              >
                                Zeehaus Markets
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() =>
                                  redirectTo(
                                    "https://zeehaus.com/risk_and_protection#blockchain",
                                    this.props
                                  )
                                }
                              >
                                Blockchain
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() =>
                                  redirectTo(
                                    "https://zeehaus.com/videos",
                                    this.props
                                  )
                                }
                              >
                                Videos
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() =>
                                  redirectTo(
                                    "https://zeehaus.com/submit_inquiry",
                                    this.props
                                  )
                                }
                              >
                                Contact Us
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() =>
                                  redirectTo(
                                    "https://zeehaus.com/faq",
                                    this.props
                                  )
                                }
                              >
                                FAQ
                              </a>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={4} xs={12}>
                        <h3 style={styles.footerHeads}>Reference</h3>
                        <div
                          style={styles.footerSubHeads}
                          className="footerLinks"
                        >
                          <ul
                            className={isMobile ? "text-left" : "text-center"}
                          >
                            <li>
                              <a
                                className="link-4"
                                onClick={() =>
                                  redirectTo(
                                    "https://zeehaus.com/privacy",
                                    this.props
                                  )
                                }
                              >
                                Privacy Policy
                              </a>
                            </li>
                            <li>
                              <a
                                className="link-4"
                                onClick={() =>
                                  redirectTo(
                                    "https://zeehaus.com/terms",
                                    this.props
                                  )
                                }
                              >
                                Terms of Service
                              </a>
                            </li>
                            <li>
                              <a
                                className="link-4"
                                onClick={() =>
                                  redirectTo(
                                    "https://zeehaus.com/cookie_policy",
                                    this.props
                                  )
                                }
                              >
                                Cookie Policy
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() =>
                                  redirectTo(
                                    "https://zeehaus.com/term/zestou",
                                    this.props
                                  )
                                }
                              >
                                Equity Sharing Terms
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() =>
                                  redirectTo(
                                    "https://zeehaus.com/coin_terms",
                                    this.props
                                  )
                                }
                              >
                                Zeehaus Coin Terms
                              </a>
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
          <br />
          <br />
        </div>
        <Grid style={styles.copyright} asDiv={isMobile}>
          <Row center="xs" style={{ borderTop: "1px solid #ddd" }}>
            <Col md={6}>
              <p style={{ color: "#888", fontSize: "1.4rem" }}>
                © {new Date().getFullYear()} Zeehausfoundation.org <br />{" "}
                Zeehaus Foundation Inc. All rights reserved.
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
