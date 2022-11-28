import { useEffect, useRef, useState } from 'react';
import useInterval from './useInterval.js';
import Timer from './Timer.js';
import './pong.css'

const CANVAS_WIDTH = 1080;
const CANVAS_HEIGHT = 600;
const PAD_WIDTH = 15;
const PAD_HEIGHT = 100;
const BALL_SIZE = PAD_WIDTH;

function Pong() {

    const [gameRunning, setGameRunning] = useState(false);
    const [ballLaunched, setBallLaunched] = useState(false);
    const [speed, setSpeed] = useState(null);
    const [scoreP1, setScoreP1] = useState(0);
    const [scoreP2, setScoreP2] = useState(0);
    const [winner, setWinner] = useState('');
    const [dir, setDir] = useState([0, -1]);
    const canvasRef = useRef();

    function drawButton() {
        const start = <button onClick={startGame}>Start Game</button>;
        const stop = <button onClick={stopGame}>Stop</button>;
        if (!gameRunning)
            return (start);
        return (stop);
    }

    function drawElements(context) {
        // mid-line
        context.fillStyle = "white";
        context.fillRect((canvasRef.current.width / 2) - (PAD_WIDTH / 2),0,
            PAD_WIDTH, canvasRef.current.height);
        // starting pad P1
        context.fillRect(0,(canvasRef.current.height / 2) - (PAD_HEIGHT / 2),
            PAD_WIDTH, PAD_HEIGHT);
        // starting pad P2
        context.fillRect(canvasRef.current.width, (canvasRef.current.height / 2) - (PAD_HEIGHT / 2),
            - PAD_WIDTH, PAD_HEIGHT);
        // starting ball
        context.fillRect(PAD_WIDTH,(canvasRef.current.height / 2) - (BALL_SIZE / 2),
            BALL_SIZE, BALL_SIZE);
    }

    function moveBall() {

    }

    function processKeyPress(key) {
        if (gameRunning && !ballLaunched && key.keyCode === 32 /* space */ ) {
            setBallLaunched(true);
            moveBall();
        }
    }

    function gameLoop() {
        if (gameRunning) {

        }
    }

    function startGame() {
        if (!gameRunning) {
            console.log("Start Game !");
            setGameRunning(true);
            setSpeed(1000);
        }
    }

    function stopGame() {
        if (gameRunning) {
            setSpeed(null);
            setWinner('');
            setGameRunning(false);
        }
    }

    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        context.fillStyle = "black";
        context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        if (gameRunning) {
            drawElements(context);
        }
    }, [scoreP1, scoreP2, winner, gameRunning, ballLaunched]);

    useInterval(() => gameLoop(), speed);

    return (
        <>
            <div className="board d-flex justify-content-center">
                <div className="text-center">
                    <Timer gameRunning={gameRunning}/>
                    <h1 id="score">{scoreP1} {scoreP2}</h1>
                </div>
                <div className="canvas" role="button" tabIndex="0" onKeyDown={key => processKeyPress(key)}>
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
