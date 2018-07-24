
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import uid from 'uid';
import { fetchSurveys } from '../../actions';
import toBoolean from '../../utils/validateBoolean';

class SurveyList extends Component {

    constructor() {
        super(); 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            indices: [],
            scoreschallengecompleted: [],
			complete: false,
			score: 0
		}
    }

    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.map((survey, idx) => {
            return (     
                <div className="card darken-1" key={idx}>
                    <div className="card-content">    
                        <a>{ survey.category }</a>
                        <p>{ survey.question }</p>
                        <div className="switch">
                            <label> False
                                <input type="checkbox" id={idx} onChange={this.handleChange}/>
                                <span className="lever"></span>
                            True </label>
                        </div>
                    </div>
                </div>                          
            );
        });
    }

    renderScore() {
        return this.state.scoreschallengecompleted.map((score, idx) => {
            return (
                <div key={idx}>
                    <a className="collection-item">
                        <i className="material-icons">filter_9_plus</i> SCORE: { score.scorecompleted }
                    </a>
                </div>
            );
        });
    }

    handleChange(event) {
        const checked = event.target.checked;
        const index = parseInt(event.target.id);
        const objectSurvey = this.props.surveys[index];
        const updated = this.state.indices;
        const filter = updated.filter(idxAnswer => idxAnswer.id == index);

        if(filter.length > 0) {
            (filter[0].correct_answer != checked) ? this.setState({ score: this.state.score - 1 }) : this.setState({ score: this.state.score + 1 });
        } else if(checked == toBoolean(objectSurvey.correct_answer.toLowerCase())) {
            updated.push({id: index, correct_answer: checked});
            this.setState({ indices: updated, score: this.state.score + 1 });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const updatedResult = this.state.scoreschallengecompleted;
        updatedResult.push({ _id: uid(10), scorecompleted: this.state.score })
        this.setState({ scoreschallengecompleted: updatedResult, indices:[], score:0 });
    }

    render() {
        return(
            <div className="row">
                <div className="col s12 md12">
                    <div className="col s8 md8">
                        <form onSubmit = { this.handleSubmit }>
                            { this.renderSurveys() }
                            <button className="btn waves-effect right waves-light" type="submit" name="action">Send answers
                                <i className="material-icons right">send</i>
                            </button>
                            <Link to="/" className="red btn-flat white-text">
                                CANCEL <i className="material-icons right">cancel</i>
                            </Link>    
                        </form>
                    </div>
                    <div className="col s4 md4">
                        <div class="collection">
                            { this.renderScore() }
                        </div>
                    </div>
                </div>
            </div>
                
        );
    }
}

const mapStateToProps = ({ surveys }) => {
    return { surveys };
};

export default connect(mapStateToProps, { fetchSurveys }) (SurveyList);