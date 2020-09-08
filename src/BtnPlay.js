import React from 'react';
import { motion } from "framer-motion";
import "./BtnPlay.scss"
import ReactHowler from "react-howler";
import "./audio/FFIV-Victory.mp3";


class BtnPlay extends React.Component {
    constructor (props) {
        super(props)
    
        this.state = {
          playing: false
        }
        this.handlePlay = this.handlePlay.bind(this)
        this.handlePause = this.handlePause.bind(this)
    }
    handlePlay () {
        this.setState({
          playing: true
        })
        console.log('Play!')
    }
    
    handlePause () {
        this.setState({
            playing: false
        })
        console.log('Pause!')
    }

    render () {
        return (
            <>
                <h2>Simple Buttons</h2>
                <div className="row">
                    <ReactHowler
                        src={["./audio/FFIV-Victory.mp3"]}
                        playing={this.state.playing}
                    >
                    </ReactHowler>
                    <motion.div
                        className="playBtn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1, backgroundColor: '#ff444f' }}
                        onClick={this.handlePlay}
                    >
                        Play
                    </motion.div>
                    <motion.div
                        className="playBtn"
                        onClick={this.handlePause}
                    >
                        Pause
                    </motion.div>            
                </div>
            </>
        )
    }    
} 

export default BtnPlay