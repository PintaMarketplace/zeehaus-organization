import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import SectionLogo from "./SectionLogo";

export default function CoinVideo() {
  return (
    <div>
      <Grid>
        <Row className="org-section" middle="xs" center="xs">
          <Col xs={12} className="text">
            <Row center="xs">
              <Col
                xs={12}
                sm={12}
                md={8}
                lg={6}
                style={{ padding: 0, paddingTop: "2rem" }}
              >
                <SectionLogo />
                <h1 className="center">Video</h1>
                <h3>
                  Watch a quick introductory video to learn more about Zeehaus
                  Coins.
                </h3>
                <span className="gray-line" />
                <div
                  style={{
                    background: "#f8f8f8",
                    padding: "2rem",
                    borderRadius: 20,
                  }}
                >
                  <iframe
                    width="100%"
                    height={400}
                    src="https://www.youtube.com/embed/H7z5aEZBbLQ"
                    frameBorder="0"
                    autoPlay
                    allowFullScreen
                  />
                </div>
              </Col>
            </Row>
          </Col>
          {/* <Col xs={12} md={6}>
              <img
                style={{ height: '60vh' }}
                className="org-section-img"
                src="https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
            </Col> */}
        </Row>
      </Grid>
    </div>
  );
}
