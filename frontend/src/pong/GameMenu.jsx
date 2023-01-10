import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";

function GameMenu() {
    const [activeGames, setActiveGames] = useState([]);
    const [userInQueue, setUserInQueue] = useState(false);
    const user = useSelector((state) => state.userProvider.user);

    function createGame() {

    }

    const onHandleGame = useCallback((event) => {
        event.preventDefault();
        if (queue.empty()) {
            /* createGame
            */
            axios({
                url: "http://localhost:3001/games/",
                method: "POST",
                data: {
                    player1Id: user.intra_id
                }
            }).then(res => {
                setUserInQueue(true);
                queue.enqueue(user);
                console.log(res)
            }).catch(err => console.error(err))
        } else {
            queue.enqueue(user);
        }
    }, [setUserInQueue, user]);

    useEffect(() => {

    }, [onHandleGame]);

    return (
        <div className="d-flex justify-content-center">
            <div className="align-items-center">
                {   activeGames.length ?
                        <div className="">
                        </div>
                    :
                        <p className="">There is actually no game...</p>
                }
                {
                    userInQueue ?
                        <p>Game created, waiting for someone to join...</p>
                    :
                        <button className="" onClick={ (event) => onHandleGame(event) }>Find Game</button>
                }
            </div>
        </div>
    )
}

export default GameMenu;
