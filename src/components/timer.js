import React, {Component} from 'react';
import logo from '../style/image/mediasoft.png' 
import timer from '../style/image/timer.png'


class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggle: true,
            time: '00:00:00',
            delay: 1000,
            warning: null
        }
      }

    tick = () => {
        if(this.state.toggle){
            setTimeout(this.tick ,this.state.delay)
            this.setState({time: new Date().toLocaleTimeString()});          
        }
    }
    startCounter = () => {
        this.setState({toggle:true});
        setTimeout(this.tick, this.state.delay )
    };
    stopCounter = () => {
        this.setState({toggle:false});
    };
    incrementInterval = () => {
        this.setState({warning:null});
        this.setState(prevState => ({
        delay: (prevState.delay + 1000)
        }));
    };
    decrementInterval = () => {
        if(this.state.delay === 1000){
            this.setState({warning:<span className = 'interval warning'>Мин. интервал 1 секунда!</span>});
        }else{
            this.setState({warning:null});
        }
        if(this.state.delay<2000){
            this.setState({delay:1000});

        }else{
            this.setState(prevState => ({
                delay: (prevState.delay - 1000)
            }));
        }
    };
    resetCounter = () => {
        this.setState({toggle:true});
        setTimeout(this.tick, this.state.delay )
    }

    render(){
        return(
            <div>
                <header className = 'header'>
                    <div className = 'logo'>
                        <figure><img src = {logo} alt = 'Логотип'/></figure>
                    </div>
                    <div className = 'appName'>
                        Timer 
                        <img src = {timer} alt = 'Название'/>
                    </div>
                </header>
                <article>
                <div className = 'window'>{this.state.time}</div>
                <div><div className = 'interval'>Интервал счетчика: {this.state.delay / 1000} сек.{this.state.warning}</div></div>
                <div className = 'wrapper'>
                    <div className = 'button' onClick = {this.incrementInterval}>++</div>
                    <div className = 'button' onClick = {this.decrementInterval}>--</div>
                    <div className = 'button' onClick = {this.startCounter}>Start</div>
                    <div className = 'button' onClick = {this.stopCounter}>Stop</div>
                    <div className = 'button' onClick = {this.resetCounter}>Reset</div>
                </div>
                </article>
                <footer className = 'footer'>
                    <a href = 'https://mediasoft.team'>Mediasoft/team</a>
                    <br/>
                </footer>
            </div>
        )
    }
}

export default Counter ;