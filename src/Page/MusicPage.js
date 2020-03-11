import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { inject } from "mobx-react";
import { observer } from "mobx-react";

class MusicPage extends React.Component {
  render() {
    return (
      <h1 style={{ padding: 100 }}>
        Playing : {this.props.myMusicStore.currentMusic.name}
        <div>ID : {this.props.myMusicStore.currentMusic.id}</div>
      </h1>
    );
  }
}

export default MusicPage;

// function Child() {
//   let { id } = useParams();

//   return (
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// }
