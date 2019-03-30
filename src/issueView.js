import React, { Component } from "react";
import { Media, Container, Row, Col } from "reactstrap";
import "./issueView.css";
import ReactMarkdown from "react-markdown";
import LabelsView from "./labelsView";

export default class issueView extends Component {
  render() {
    return (
      <Container>
        <Row className="issueBox">
          <Col xs="9" className="issueContent text-left py-4 pl-4 pr-0">
            <div>
              <h3>
                #{this.props.number} {this.props.title}
              </h3>
            </div>
            <div>
              <ReactMarkdown source={this.props.body} />
            </div>
          </Col>
          <Col xs="3" className="issueUser text-right py-4 pr-4 pl-0">
            <img
              src={this.props.user.avatar_url}
              className=" border rounded my-1"
            />
            <h6 className="my-1">@{this.props.user.login}</h6>
            {this.props.labels.map(label => (
              <LabelsView {...label} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}
