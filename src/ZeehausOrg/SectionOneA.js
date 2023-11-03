import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import { List } from "./Element";
import SectionLogo from "./SectionLogo";

export default function SectionOneA() {
  return (
    <div>
      <Grid>
        <Row className="org-section" middle="xs">
          <Col xs={12} md={6}>
            <img
              className="org-section-img"
              src="https://pinta-digital.s3.us-west-2.amazonaws.com/production/zeehaus_org_images/1.jpg"
            />
          </Col>
          <Col xs={12} md={6} className="text">
            <Row>
              <Col
                xs={12}
                sm={12}
                md={8}
                mdOffset={1}
                style={{ padding: 0, paddingTop: "0rem" }}
              >
                <SectionLogo />
                <h1>Today’s Challenges</h1>
                <span className="gray-line" />
                <h2>Challenges faced by buyers and real estate investors</h2>
                <List>Digital Currency Risky & Volatile</List>
                <List>Can’t Afford to Buy a Home</List>
                <List>Significant Capital Required to Invest</List>
                <br />
                <h2>Industry-wide challenges</h2>
                <List>
                  Millennials cut off home buying because of huge student loans
                  and lack of down payments.
                </List>
                <List>
                  Rising property values globally, resulting in a serious
                  housing crisis.
                </List>
                <List>
                  Lack of liquidity: Real estate requires significant capital &
                  long-term commitments
                </List>
                <List>
                  Buying rental property is complex with time-consuming tenant
                  management
                </List>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
