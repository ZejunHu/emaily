import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import sortType from "../sortType";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  sortBy(surveys, type) {
    function compareDateSent(a, b) {
      if (a.dateSent < b.dateSent) return 1;
      if (a.dateSent > b.dateSent) return -1;
      return 0;
    }

    function compareTitleName(a, b) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    }

    function compareMostReply(a, b) {
      if (a.yes + a.no < b.yes + b.no) return 1;
      if (a.yes + a.no > b.yes + b.no) return -1;
      return 0;
    }

    switch (type) {
      case "Latest Release":
        return surveys.sort(compareDateSent);
      case "Title Name":
        return surveys.sort(compareTitleName);
      case "Most Reply":
        return surveys.sort(compareMostReply);
      default:
        return surveys;
    }
  }

  renderSortButton() {
    return _.map(sortType, ({ name }) => {
      return (
        <p className="col m3 s4" key={name}>
          <input
            name="sort"
            type="radio"
            id={name}
            onClick={() => {
              this.props.sortSurveys(name);
            }}
          />
          <label htmlFor={name}>{name}</label>
        </p>
      );
    });
  }

  renderSurveys() {
    return this.sortBy(this.props.surveys, this.props.sort).map(survey => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">
              {survey.title}
              <button
                className="btn red right white-text"
                onClick={() =>
                  this.props.removeSurveys({ surveyId: survey._id })
                }
              >
                Remove
                <i className="material-icons right">delete_forever</i>
              </button>
            </span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="row" style={{ margin: "10px 0 5px 0" }}>
          <div>
            <label style={{ margin: "0 0 0 15px" }}>
              <i className="material-icons">sort</i>Sort By
            </label>
          </div>
          {this.renderSortButton()}
        </div>
        <div />
        <div>{this.renderSurveys()}</div>
      </div>
    );
  }
}

function mapStateToProps({ surveys, sort }) {
  return { surveys, sort };
}

export default connect(mapStateToProps, actions)(
  //withRouter(SurveyList)
  SurveyList
);
