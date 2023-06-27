import { banner } from "./src/banner.js";
import { PORT } from "./src/config.js";
import { createSession } from "./src/createSession.js";
import { nonce, send } from "./src/actions.js";

export default {
    port: PORT,
    async fetch(request: Request) {
        const session = createSession();
        const url = new URL(request.url);
        if ( request.method == "GET" ) {
            if ( url.pathname == "/" ) return new Response(banner());
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
    },
};

export function toJSON(data: any, status = 200) {
    return new Response(JSON.stringify(data), {status, headers: {
        'Content-Type': 'application/json',
         // CORS
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
    }});
}
