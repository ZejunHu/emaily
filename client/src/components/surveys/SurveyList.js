import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
//import { withRouter } from "react-router-dom";

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
          <p className="col m3 s4">
            <input
              name="sort"
              type="radio"
              id="Latest Release"
              onClick={() => {
                this.props.sortSurveys("Latest Release");
              }}
            />
            <label htmlFor="Latest Release">Latest Release</label>
          </p>
          <p className="col m3 s4">
            <input
              name="sort"
              type="radio"
              id="Title Name"
              onClick={() => {
                this.props.sortSurveys("Title Name");
              }}
            />
            <label htmlFor="Title Name">Title Name</label>
          </p>
          <p className="col m3 s4">
            <input
              name="sort"
              type="radio"
              id="Most Reply"
              onClick={() => {
                this.props.sortSurveys("Most Reply");
              }}
            />
            <label htmlFor="Most Reply">Most Reply</label>
          </p>
        </div>
        <div>{this.renderSurveys()}</div>
        {console.log(this.props.sort)}
        {console.log(this.props.surveys)}
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
