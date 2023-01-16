import { v4 } from 'uuid'
import {Socket} from "socket.io";
import {AuthenticatedSocket} from "./AuthenticatedSocket";

export class Room {
    public readonly id: string = v4();
    public readonly createdAt: Date = new Date();
    public readonly clients: Map<Socket['id'], AuthenticatedSocket> = new Map<Socket['id'], AuthenticatedSocket>();
}
