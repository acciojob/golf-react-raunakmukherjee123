// import React, { Component, useState } from "react";
// import '../styles/App.css';

// class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             renderBall: false,
//             posi : 0,
//             ballPosition: { left: "0px" }
//         };
//         this.renderChoice = this.renderBallOrButton.bind(this)
//         this.buttonClickHandler = this.buttonClickHandler.bind(this)
//     };

//     buttonClickHandler() {
   
//    }
//     renderBallOrButton() {
// 		if (this.state.renderBall) {
// 		    return <div className="ball" style={this.state.ballPosition}></div>
// 		} else {
// 		    return <button onClick={this.buttonClickHandler} >Start</button>
// 		}
//     }

//     // bind ArrowRight keydown event
//     componentDidMount() {
      
//     }

//     render() {
//         return (
//             <div className="playground">
//                 {this.renderBallOrButton()}
//             </div>
//         )
//     }
// }


// export default App;
import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 5,
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
	     this.onMove = this.onMove.bind(this);
    };

    buttonClickHandler() {
	   this.setState({renderBall:true})
   }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={{left:this.state.posi}}></div>
		} else {
		    return <button className="start" onClick={this.buttonClickHandler} >Start</button>
		}
    }
onMove() {
    this.setState({ posi:this.state.posi+5 });
  }

    // bind ArrowRight keydown event
    componentDidMount() {
	    const onMove = this.onMove
       window.addEventListener("keydown", function (e) {
      const key = e.key;
      if (key === "ArrowRight") {
        onMove();
      }
    });
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
