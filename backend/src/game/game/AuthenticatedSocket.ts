import {Socket} from "socket.io";
import {Room} from "./Room";
import {ServerEvents} from "./Events";

export type AuthenticatedSocket = Socket & {
    data: {
        room: null | Room;
    };

    emit: <T>(ev: ServerEvents, data: T) => boolean;
};