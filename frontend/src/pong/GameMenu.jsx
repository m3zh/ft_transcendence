import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import Pong from "./Pong.jsx";
import useSocketManager from 'socket.io-client'

function GameMenu() {
    const [activeGames, setActiveGames] = useState([]);
    const [userInQueue, setUserInQueue] = useState(false);
    const [gamesInQueue, setGamesInQueue] = useState([]);
    const user = useSelector((state) => state.userProvider.user);

    const onHandleGame = useCallback((event) => {
        event.preventDefault();
        if (gamesInQueue.length === 0) {
// PROBLEME : SI LA QUEUE EST VIDE, ON APL LA CALLBACK ?? JSP A TEST
            /* createGame  */
            axios({
                url: "http://localhost:3001/games",
                method: "POST",
                data: {
                    player1Id: user.intra_id,
                    player1: user.username
                }
            }).then(res => {
                setUserInQueue(true);
            }).catch(err => console.error(err))
        } else {
            // trouver la game la plus ancienne inqueue, la dequeue
            // et dequeue l'user qui l'a créé
            axios({
                url: "http://localhost:3001/games/queue",
                method: "GET",
            }).then(res => {
                axios({
                    url: "http://localhost:3001/games/update/" + res.data[0].id,
                    method: "PUT",
                    data: {
                        player2Id: user.intra_id,
                        player2: user.username
                    }
                }).then(res => {
                    setUserInQueue(true);
                }).catch(err => console.error(err))
            }).catch(err => console.error(err))
        }

        /* update queue */
        axios({
            url: "http://localhost:3001/games/queue",
            method: "GET"
        }).then(res => {
            setGamesInQueue(res.data);
        }).catch(err => console.error(err))
    }, [gamesInQueue, user]);

    useEffect(() => {

        /* updateActiveGames
        axios({
            url: "http://localhost:3001/games/active",
            method: "GET"
        }).then(res => {
            setActiveGames(res.data);
        }).catch(err => console.error(err))
        * */
    }, [onHandleGame]);

    const sm = useSocketManager();

    const onPing = () => {
        console.log("pinging...")
        sm.emit({
            event: 'ping',
        });
    };

    return (
        <div className="d-flex justify-content-center">
            <div className="align-items-center">
                {
                    0 === 1 ?
                            <Pong />
                    :
                        <div className="gameMenu">
                            {   activeGames.length ?
                                    <div className="activeGames">
                                        { activeGames.map((game =>
                                                <div className="activeGame">
                                                    <p>{game.player1}  vs  {game.player2}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                :
                                    <p className="">There is actually no game...</p>
                            }
                            {
                                userInQueue ?
                                    <p>Game created, waiting for someone to join...</p>
                                :

                                    <button className="" onClick={onHandleGame}>Find Game</button>
                            }
                            <button onClick={onPing}>ping</button>

                        </div>
                }
            </div>
        </div>
    )
}

export default GameMenu;
