import React, {Component, Fragment} from 'react';
import SearchComponent from "../SearchComponent/Search";
import './Header.style.css';
class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log(this.props);

        return (
            <Fragment>
                <section className="headerBlock">
                    <article>
                        <div className="logo"
                            style={
															{
																fontWeight: "bolder"
															}
                        }>
                            <span style={
                                {
                                    fontSize: "20px",
                                    cursor: "pointer",
                                    paddingLeft: "30px"
                                }
                            }>&#9776;
                            </span>
                            <img src="youtubeIcon.png" alt="YoutubeIcon"
                                style={
                                    {paddingLeft: "38px"}
                                }/>
                            Youtube</div>
                        <div className="search"><SearchComponent HeaderFormProps={
                                this.props.fromAppFormProps
                            }/></div>
                        <div className="menuBlock">
                            <span>
                                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon"
                                    style={
                                        {height: "27px"}
                                }>
                                    <g className="style-scope yt-icon">
                                        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z" className="style-scope yt-icon"/>
                                    </g>
                                </svg>
                            </span>
                            <span>
                                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon"
                                    style={
                                        {height: '27px'}
                                }>
                                    <g className="style-scope yt-icon">
                                        <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" className="style-scope yt-icon"/>
                                    </g>
                                </svg>
                            </span>
                            <span>
                                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon"
                                    style={
                                        {height: "27px"}
                                }>
                                    <g className="style-scope yt-icon">
                                        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" className="style-scope yt-icon"/>
                                    </g>
                                </svg>
                            </span>
                            <span>
                                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon"
                                    style={
                                        {height: '27px'}
                                }>
                                    <g className="style-scope yt-icon">
                                        <path d="M12,0 C18.62375,0 24,5.37625 24,12 C24,18.62375 18.62375,24 12,24 C5.37625,24 0,18.62375 0,12 C0,5.37625 5.37625,0 12,0 Z M12,10.63625 C13.66,10.63625 15,9.29625 15,7.63625 C15,5.97625 13.66,4.63625 12,4.63625 C10.34,4.63625 9,5.97625 9,7.63625 C9,9.29625 10.34,10.63625 12,10.63625 Z M12,12.40875 C8.33375,12.40875 5.455,14.18125 5.455,15.8175 C6.84125,17.95 9.26875,19.3625 12,19.3625 C14.73125,19.3625 17.15875,17.95 18.545,15.8175 C18.545,14.18125 15.66625,12.40875 12,12.40875 Z" className="style-scope yt-icon"/>
                                    </g>
                                </svg>
                                {/*css-build:shady*/}
                                <yt-formatted-string id="text" className="style-scope ytd-button-renderer style-suggestive size-small">Sign in</yt-formatted-string>
                                <paper-ripple className="style-scope paper-button">
                                    {/*css-build:shady*/}
                                    <div id="background" className="style-scope paper-ripple"/>
                                    <div id="waves" className="style-scope paper-ripple"/>
                                </paper-ripple>

                            </span>
                        </div>
                    </article>
                </section>
            </Fragment>
        );
    }
}

export default HeaderComponent;
