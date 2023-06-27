import { AnyAction, Session } from "@wharfkit/session"
import { CONTRACT } from "./config.js"

export const send = (session: Session,  to: string): AnyAction => {
    return {
        authorization: [session.permissionLevel],
        account: CONTRACT,
        name: "send",
        data: {
            to,
        },
    }
}

export const nonce = (session: Session): AnyAction => {
    return {
        authorization: [session.permissionLevel],
        account: CONTRACT,
        name: "nonce",
        data: {
            nonce: Math.floor(Math.random() * 1000000000),
        }
    }
}
