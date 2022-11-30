import { useEffect, useRef, useState } from 'react';
import useInterval from './useInterval.js';
import Timer from './Timer.js';
import './pong.css'

const CANVAS_WIDTH = 1080;
const CANVAS_HEIGHT = 600;
const PAD_WIDTH = 15;
const PAD_HEIGHT = 100;
const PAD_SPEED = 15;
const BALL_SPEED = 2;
const BALL_RAD = 10;

function Pong() {

    const [gameRunning, setGameRunning] = useState(false);
    const [ballLaunched, setBallLaunched] = useState(false);
    const [scoreP1, setScoreP1] = useState(0);
    const [scoreP2, setScoreP2] = useState(0);
    const [P1PadX, setP1PadX] = useState(0);
    const [P1PadY, setP1PadY] = useState(0);
    const [P2PadX, setP2PadX] = useState(0);
    const [P2PadY, setP2PadY] = useState(0);
    const [ballX, setBallX] = useState(0);
    const [ballY, setBallY] = useState(0);
    const [dirX, setDirX] = useState(0);
    const [dirY, setDirY] = useState(0);
    const [winner, setWinner] = useState('');
    const [speed, setSpeed] = useState(null);
    const canvasRef = useRef();

    function drawButton() {
        const start = <button onClick={startGame}>Start Game</button>;
        const stop = <button onClick={stopGame}>Stop</button>;
        if (!gameRunning)
            return (start);
        return (stop);
    }

    function initElements(ballPos) {
        setP1PadX(0);
        setP1PadY((canvasRef.current.height / 2) - (PAD_HEIGHT / 2));
        setP2PadX(canvasRef.current.width);
        setP2PadY((canvasRef.current.height / 2) - (PAD_HEIGHT / 2));
        setDirX(0);
        setDirY(0);
        if (ballPos === "P1") {
            setBallX(PAD_WIDTH);
            setBallY((canvasRef.current.height / 2) - (BALL_RAD / 2));
        } else {
            setBallX(canvasRef.current.width - PAD_WIDTH - BALL_RAD);
            setBallY((canvasRef.current.height / 2) - (BALL_RAD / 2));
        }
    }

    function drawElements(context) {
        // mid-line
        context.fillStyle = "white";
        context.fillRect((canvasRef.current.width / 2) - (PAD_WIDTH / 2),0,
            PAD_WIDTH, canvasRef.current.height);
        // starting pad P1
        context.fillRect(P1PadX, P1PadY, PAD_WIDTH, PAD_HEIGHT);
        // starting pad P2
        context.fillRect(P2PadX, P2PadY, - PAD_WIDTH, PAD_HEIGHT);
        // starting ball
       context.fillRect(ballX, ballY, BALL_RAD, BALL_RAD);
        // context.arc(ballX, ballY, BALL_RAD, 0, 2 * Math.PI, false);
        // context.fill();
    }

    function movePadUp(player) {
        if (player === "P1" && P1PadY > 0) {
            setP1PadY(P1PadY - PAD_SPEED);
        } else if (player === "P2" && P2PadY > 0) {
            setP2PadY(P2PadY - PAD_SPEED);
        }
    }

    function movePadDown(player) {
        if (player === "P1" && (P1PadY + PAD_HEIGHT) < canvasRef.current.height) {
            setP1PadY(P1PadY + PAD_SPEED);
        } else if (player === "P2" && (P2PadY + PAD_HEIGHT) < canvasRef.current.height) {
            setP2PadY(P2PadY + PAD_SPEED);
        }
    }

    function scoreAndResetBall(player) {
        setBallLaunched(false);
        if (player === "P1") {
            setScoreP1(scoreP1 + 1);
            initElements("P2");
        } else {
            setScoreP2(scoreP2 + 1);
            initElements("P1");
        }
    }

    function collisions() {
        if ((ballY - BALL_RAD) >= P1PadY && (ballY + BALL_RAD) <= (P1PadY + PAD_HEIGHT)
            && (ballX - BALL_RAD) <= P1PadX) {
            setDirX(1);
            if (ballY < (P1PadY + PAD_HEIGHT / 2)) {
                setDirY(0.5); // randomize this value ?
            } else if (ballY > (P1PadY + PAD_HEIGHT / 2)) {
                setDirY(- 0.5);
            }
        } else if ((ballY + BALL_RAD) >= P2PadY && (ballY + BALL_RAD) <= (P2PadY + PAD_HEIGHT)
            && (ballX + BALL_RAD) >= P2PadX - PAD_WIDTH) {
            setDirX(-1);
            if (ballY < (P2PadY + PAD_HEIGHT / 2)) {
                setDirY(0.5);
            } else if (ballY > (P2PadY + PAD_HEIGHT / 2)) {
                setDirY(-0.5);
            }
        } else if (ballY <= 0) {
            setDirY(0.5);
        } else if (ballY >= canvasRef.current.height) {
            setDirY(- 0.5);
        } else if (ballX <= - BALL_RAD) {
            scoreAndResetBall("P2");
        } else if (ballX >= canvasRef.current.width) {
            scoreAndResetBall("P1");
        }
    }

    function moveBall() {
        setBallX(ballX + BALL_SPEED * dirX);
        setBallY(ballY + BALL_SPEED * dirY);
    }

    /* ajouter un nouveau param player une fois les sockets implémentés */
    function processKeyPress(key) {
        if (!gameRunning) {
            return ;
        } else if (!ballLaunched && key.keyCode === 32 /* space */ ) {
            setBallLaunched(true);
            if (ballX === PAD_WIDTH) {
                setDirX(1);
            } else {
                setDirX(- 1);
            }
        }
        if (key.keyCode === 38 /* up */) {
            movePadUp("P2");
        }
        if (key.keyCode === 40 /* down */) {
            movePadDown("P2");
        }
        if (key.keyCode === 90 /* 'z' */) {
            movePadUp("P1");
        }
        if (key.keyCode === 83 /* 's' */) {
            movePadDown("P1");
        }
    }

    function gameLoop() {
        if (gameRunning && ballLaunched) {
            collisions();
            moveBall();
        }
    }

    function startGame() {
        if (!gameRunning) {
            setGameRunning(true);
            initElements("P1");
            setScoreP1(0);
            setScoreP2(0);
            setWinner('');
            setSpeed(1 / 60); // 1 / 60 = deltatime
        }
    }

    function stopGame() {
        if (gameRunning) {
            setSpeed(0);
            setWinner('');
            setGameRunning(false);
            setBallLaunched(false);
        }
    }

    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        context.fillStyle = "black";
        if (gameRunning) {
            context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
            context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            drawElements(context);
        } else {
            context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
    }, [scoreP1, scoreP2, P1PadY, P2PadY, ballX, ballY, winner, gameRunning, ballLaunched, dirX, dirY, drawElements]);

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
