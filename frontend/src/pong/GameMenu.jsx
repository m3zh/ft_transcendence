function GameMenu() {
    const [activeGames, setActiveGames] = []

    return (
        <div className="d-flex justify-content-center">
            <div className="align-items-center">
                { activeGames ?
                        <div className="">
                        </div>
                    :
                        <p className="">There is actually no game...</p>
                }
                <button className="">Find Game</button>
            </div>
        </div>
    )
}

export default GameMenu;
