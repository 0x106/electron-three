import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Menu from '../components/Menu';
import {Scene, addCube, addSphere} from '../components/Scene';

import './styles.scss';

class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = { headerMessage: 'Editor Demo' }
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  // When a button is clicked we tell the THREE manager to add either a cube or
  // a sphere. Our React component only contains an entry point for the Three
  // scene - so we have to pass messages down to it, rather than via components.
  onButtonClick(id: String) {
    this.setState({ headerMessage: "Click and drag on the screen to move around." })
    id === 'Cube' ? addCube() : addSphere()
  }

  componentDidMount() {
    // When the component first loads we attach the three js scene to a div.
    Scene(this.sceneRoot)
  }

  render() {
    return (
      <div className="grid-container">

        <div className="header">
          <h1>{this.state.headerMessage}</h1>
        </div>

        <div className="content">
          <div className="menu">

            <Menu onButtonClick={this.onButtonClick}/>

          </div>
          <div className="editor">
            <div className="editor__canvas" ref={element => this.sceneRoot = element} />
          </div>

        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
