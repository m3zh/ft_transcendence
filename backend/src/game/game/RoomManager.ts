import {Server} from "socket.io";
import {Room} from "./Room";

export class RoomManager {
    public server: Server;

    private readonly lobbies: Map<Room['id'], Room> = new Map<Room['id'], Room>();
/*
    public initializeSocket(client: AuthenticatedSocket): void
    {
    }

    public terminateSocket(client: AuthenticatedSocket): void
    {
    }

    public createLobby(mode: LobbyMode, delayBetweenRounds: number): Lobby
    {
    }

    public joinLobby(lobbyId: string, client: AuthenticatedSocket): void
    {
    }

 */
}
