import { Session } from "@wharfkit/session";
import { CONTRACT } from "./config.js";

export async function get_history(session: Session, limit = 8): Promise<any> {
    return session.client.v1.chain.get_table_rows({
        code: CONTRACT,
        scope: CONTRACT,
        table: "history",
        json: true,
        limit,
        reverse: true,
    })
}

export async function get_stats(session: Session, limit = 2): Promise<any> {
    return session.client.v1.chain.get_table_rows({
        code: CONTRACT,
        scope: CONTRACT,
        table: "stats",
        json: true,
        limit,
        reverse: true,
    })
}

export async function get_balance(session: Session, address: string) {
    if ( address.length <= 12 ) return get_balance_eos(session, address);
    return get_balance_evm(session, address);
}

export async function get_balance_eos(session: Session, address: string) {
    const response = await session.client.v1.chain.get_currency_balance("eosio.token", address, "EOS");
    if ( !response.length ) return 0.0
    return response[0].value;
}

export async function get_balance_evm(session: Session, address: any) {
    address = address.replace("0x", "");
    const response = await session.client.v1.chain.get_table_rows({
        code: "eosio.evm",
        scope: "eosio.evm",
        table: "account",
        index_position: "secondary",
        lower_bound: address,
        upper_bound: address,
        json: true,
        limit: 1,
        key_type: "sha256",
    })
    if (response.rows.length === 0) return 0.0
    return parseInt(response.rows[0].balance, 16) / 10 ** 18;
}
