import React, {Component, Fragment} from 'react';

class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        };
    }
    handleChange = (e) => {
        this.setState({term: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.HeaderFormProps(this.state.term);

    }
    render() {
        return (
            <Fragment>
                <div className="searchBlock">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <form className="form-inline"
                                    onSubmit={
                                        this.handleSubmit
                                }>
                                    <div className="input-group">
                                        <input type="text" placeholder="Search...." className="form-control"
                                            value={
                                                this.state.term
                                            }
                                            onChange={
                                                this.handleChange
                                            }/>
                                        <span className="input-group-btn">
                                            <button type="submit"
                                                style={
                                                    {border: "none"}
                                            }>
                                                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon"
                                                    style={
                                                        {height: '36px'}
                                                }>
                                                    <g className="style-scope yt-icon">
                                                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" className="style-scope yt-icon"/>
                                                    </g>
                                                </svg>
                                            </button>
                                        </span>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default SearchComponent;
