import React, {Component, Fragment} from 'react';
import HeaderComponent from "./Component/HeaderComponent/Header";
import YoutubeApi, {baseParams} from './Api/Youtubeapi';
import VideoList from "./Component/VideosComponent/VideoList";
import VideoDetails from "./Component/VideosComponent/VideoDetails.jsx"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            loading: false,
            selectedVideo: null
        };
    }
	componentDidMount() {
		this.formSubmit("javascript");
	}	
	formSubmit = async (term) => {
        let response = await YoutubeApi.get('/search', {
            params: {
                q: term,
                ...baseParams
            }
        });
        console.log(response);
        this.setState({
            videos: response.data.items, loading: true  ,selectedVideo: response.data.items[0] 
        });

	}
	
	
    onSelectedVideo = (video) => {
        this.setState({selectedVideo: video, loading: true/* ,onSelectedVideo:true */});

    };
    render() {
        return (
            <Fragment>
                <header>
                    <HeaderComponent fromAppFormProps={
                        this.formSubmit
                    }/>
                </header>

                <main className="container-fluid my-4 pl-4 pr-4">
                    <section id="data-list">
                        <article>
                            <div className="player_block">
                                <VideoDetails video={
                                        this.state.selectedVideo
                                    }
                                    loading={
                                        this.state.loading
                                    }/>
                            </div>
                            <div className="list_block">
                                <VideoList videos={
                                        this.state.videos
                                    }
                                    onSelectedVideo={
                                        this.onSelectedVideo
                                    }/>
                            </div>
                        </article>
                    </section>
                </main>
            </Fragment>
        );
    }
}

export default App;
