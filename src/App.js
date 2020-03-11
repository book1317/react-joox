import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { inject, Provider } from "mobx-react";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./scrollbarStyles.css";
import HomePage from "./Page/HomePage";
import MusicPage from "./Page/MusicPage";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Player from "./components/Player/Player";
import LoadingScreenCustom from "./components/LoadingScreenCustom/LoadingScreenCustom";
import MyMusicStore from "./MobX/MyMusicStore";

let myMusicStore = new MyMusicStore();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
  }

  onCollapse = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header collapse={this.onCollapse} />
            <Sidebar collpase={this.state.collapse} />
            <Provider myMusicStore={myMusicStore}>
              <Player />
            </Provider>

            <Switch>
              <Route exact path="/">
                <Provider myMusicStore={myMusicStore}>
                  <LoadingScreenCustom>
                    <HomePage />
                  </LoadingScreenCustom>
                </Provider>
              </Route>
              <Route path="/music/:id">
                <LoadingScreenCustom>
                  <MusicPage myMusicStore={myMusicStore} />
                </LoadingScreenCustom>
              </Route>
              <Route path="/music">
                <LoadingScreenCustom>
                  <MusicPage myMusicStore={myMusicStore} />
                </LoadingScreenCustom>
              </Route>
              <Route path="/vip">
                <LoadingScreenCustom>
                  <div>
                    <h1 style={{ padding: 100 }}>VIP</h1>
                  </div>
                </LoadingScreenCustom>
              </Route>
              <Route path="/artist">
                <h1 style={{ padding: 100 }}>Artist</h1>
              </Route>
              <Route path="/album">
                <h1 style={{ padding: 100 }}>Album</h1>
              </Route>
              <Route path="/playlist">
                <h1 style={{ padding: 100 }}>Playlist</h1>
              </Route>
              <Route path="/topchart">
                <h1 style={{ padding: 100 }}>Top Chart</h1>
              </Route>
              <Route path="/radio">
                <h1 style={{ padding: 100 }}>Radio</h1>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
