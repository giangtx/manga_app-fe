import React from 'react'
import './css/b88.css'
class B88 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            droidX: 0,
            mouseX: 0,
            toTheRight: true,
            speed: 2,
            accelMod: 1
        }
    }

    // Keep track of the mouse position.
    handleMouseMove(event) {
        this.setState({
            mouseX: event.pageX
        })
    }

    // Speed Mod Bar
    // handleSpeedChange(e) {
    //     if(parseFloat(e.target.value)) {
    //         this.setState({
    //             speed: e.target.value
    //         })
    //     }
    // }

    // // Acceleration Mod Bar
    // handleAccelChange(e) {
    //     if(parseFloat(e.target.value)) {
    //         this.setState({
    //             accelMod: e.target.value
    //         })
    //     }
    // }

    // Get moving!
    movement() {
        let {droidX, mouseX, speed, accelMod} = this.state;

        // Need a pretty strict if statement to make sure React doesn't end up in a 
        // render loop with all the state changes / re-rendering going on.
        if(Math.abs(Math.round(droidX)-mouseX) !== 1){
          
            let distance = mouseX - droidX;
            let acceleration = Math.abs(distance * accelMod) / 100;

            // Move to the right
            if (droidX < mouseX) {
                this.setState({
                    droidX: droidX+(speed*acceleration),
                    toTheRight: true
                });
            }
          
            // Move to the left
            else {
                this.setState({
                    droidX: droidX-(speed*acceleration),
                    toTheRight: false
                });
            }
        }
    }

    // Get some initial movement on first mount. 
    componentWillMount() {
        this.setState({
            mouseX: 300
        });
    }

    // Set up the mouse event listener and fire up the movement function.
    componentDidMount() {
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        setInterval(this.movement.bind(this), 1);
    }
  
    // Clean up.
    componentWillUnmount() {
        document.removeEventListener('mousemove', (e) => this.handleMouseMove(e));
    }

    // Away we go.
    render() {
      let {speed, accelMod, droidX, mouseX, toTheRight} = this.state;
      
      return (
        <div className="relax">
          {/* <div className="config">
            <div className='control-wrap'>
              <p>Speed: {speed}</p>
                <input
                  type="range"
                  min="0"
                  max="11"
                  step="0.1"
                  value={speed}
                  onChange={this.handleSpeedChange.bind(this)} />
            </div>
            <div className='control-wrap'>
              <p>Acceleration: {accelMod}</p>
                <input
                  type="range"
                  min="0"
                  max="3"
                  step="0.1"
                  value={accelMod}
                  onChange={this.handleAccelChange.bind(this)} />
            </div>
          </div> */}
          
          <div className={"bb8 "} style={{WebkitTransform: `translateX(${droidX}px)` }}>
            <div className={'antennas ' + (toTheRight ? 'right' : '')}
                 style={{WebkitTransform: `translateX(${(mouseX - droidX) / 25}px) rotateZ(${(mouseX - droidX) / 80 }deg)`}}>
              <div className="antenna short"></div>
              <div className="antenna long"></div>
            </div>
            <div className="head"
                 style={{WebkitTransform: `translateX(${(mouseX - droidX) / 15}px) rotateZ(${(mouseX - droidX) / 25}deg)`}}>
              <div className="stripe one"></div>
              <div className="stripe two"></div>
              <div className={'eyes ' + (toTheRight ? 'right' : '')}>
                <div className="eye one"></div>
                <div className="eye two"></div>
              </div>
              <div className={'stripe detail ' + (toTheRight ? 'right' : '')}>
                <div className="detail zero"></div>
                <div className="detail zero"></div>
                <div className="detail one"></div>
                <div className="detail two"></div>
                <div className="detail three"></div>
                <div className="detail four"></div>
                <div className="detail five"></div>
                <div className="detail five"></div>
              </div>
              <div className="stripe three"></div>
            </div>
            <div className="ball" style={{WebkitTransform: `rotateZ(${droidX / 2}deg)`}}>
              <div className="lines one"></div>
              <div className="lines two"></div>
              <div className="ring one"></div>
              <div className="ring two"></div>
              <div className="ring three"></div>
            </div>
            <div className="shadowbb"></div>
          </div>
          
        </div>
      );
    }
}
export default B88;
