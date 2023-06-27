import { banner } from "./src/banner.js";
import { PORT } from "./src/config.js";
import { createSession } from "./src/createSession.js";
import { nonce, send } from "./src/actions.js";

export default {
    port: PORT,
    cors: true,
    Headers: {
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
    },
    async fetch(request: Request) {
        const session = createSession();
        const url = new URL(request.url);
        if ( request.method == "GET" ) {
            if ( url.pathname == "/" ) return toText(banner());
            const info = await session.client.v1.chain.get_info();
            return toJSON(info.toJSON());
        }
        if ( request.method === "POST" ) {
            const json: any = await request.json();
            const to = json.to;
            if ( !json.to ) throw "[to] is required";
            const actions = [ send(session, to), nonce(session, ) ];
            const response = await session.transact({actions}, {})
            return toJSON(response.response);
        }
        return toText("OK");
    },
};

export function toJSON(data: any, status = 200) {
    return new Response(JSON.stringify(data), {status, headers: {
        'Content-Type': 'application/json'
    }});
}

export function toText(data: any, status = 200) {
    return new Response(data, {status, headers: {
        'Content-Type': 'text/plain;charset=utf-8',
    }});
}
