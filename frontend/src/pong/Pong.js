import { useEffect, useRef, useState } from 'react';
import useInterval from './useInterval.js';
import Timer from './Timer.js';
import './pong.css'

const CANVAS_WIDTH = 1080;
const CANVAS_HEIGHT = 600;

function Pong() {

    const canvasRef = useRef();
    const [gameRunning, setGameRunning] = useState(false);
    const [speed, setSpeed] = useState(null);
    const [scoreP1, setScoreP1] = useState(0);
    const [scoreP2, setScoreP2] = useState(0);
    const [winner, setWinner] = useState('');

    function startGame() {
        if (gameRunning)
            return ;
        console.log("Start Game !");
        setGameRunning(true);
        setSpeed(1000);
    }

    function stopGame() {
        if (gameRunning) {
            setSpeed(null);
            setWinner('');
            setGameRunning(false);
        }
    }

    function drawButton() {
        const start = <button onClick={startGame}>Start Game</button>;
        const stop = <button onClick={stopGame}>Stop</button>;
        if (!gameRunning)
            return (start);
        return (stop);
    }

    function gameLoop() {
        if (!gameRunning)
            return ;
        console.log("game is looping...");
    }

    useEffect(() => {
        /*const context = canvasRef.current.getContext("2d")
        if (!gameRunning)
            context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)*/
    }, [scoreP1, scoreP2, winner, gameRunning]);

    useInterval(() => gameLoop(), speed)
    return (
        <>
            <div className="board d-flex justify-content-center">
                <div className="text-center">
                    <Timer gameRunning={gameRunning}/>
                    <h1 id="score">{scoreP1} {scoreP2}</h1>
                </div>
                <div className="canvas">
                    <canvas
                        className="border"
                        width={CANVAS_WIDTH}
                        height={CANVAS_HEIGHT}
                        ref={canvasRef} >
                        Sorry, your browser does not support canvas HTML...
                    </canvas>
                </div>
                <div className="text-center">
                    {drawButton()}
                </div>
            </div>
        </>
    );
}

export default Pong;
