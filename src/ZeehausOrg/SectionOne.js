import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";

export default function SectionOne() {
  return (
    <div>
      <Grid>
        <Row className="org-section" middle="xs">
          <Col xs={12} md={6} className="text">
            <h1>Zeehaus Foundation Mission</h1>
            <span className="gray-line" />

            <Row>
              <Col
                xs={12}
                sm={12}
                md={8}
                style={{ padding: 0, paddingTop: "2rem" }}
              >
                <p>
                  Our mission is to help solve the housing crisis facing our
                  community by building a sustainable model for homeownership.
                </p>
                <p>
                  With Zeehaus Coins, we are here to build a new way to lower
                  the burdens of owning a home and simplify ways to purchase
                  fractional ownership.
                </p>
                <p>
                  Explore how Zeehaus uses innovative technologies, blockchain,
                  and Zeehaus Coins to help achieve homeownership!
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <img
              style={{ height: "60vh" }}
              className="org-section-img"
              src="https://pinta-digital.s3.us-west-2.amazonaws.com/production/zeehaus_org_images/2.jpg"
            />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
