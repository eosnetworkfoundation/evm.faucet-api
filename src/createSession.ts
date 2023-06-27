import { ChainDefinitionType, Session } from "@wharfkit/session";
import { WalletPluginPrivateKey } from "@wharfkit/wallet-plugin-privatekey";
import { CHAIN_ID, PERMISSION, ACTOR, CHAIN_URL } from "./config.js";

interface CreateSessionOptions {
    actor?: string;
    privateKey?: string;
    permission?: string;
    chain?: ChainDefinitionType;
    url?: string;
}

export function createSession(options: CreateSessionOptions = {}) {
    // required
    const actor = options.actor ?? ACTOR;
    const privateKey = options.privateKey ?? process.env.PRIVATE_KEY;
    if (!actor) throw new Error('--actor is required (env=ACTOR)');
    if (!privateKey) throw new Error('--privateKey is required (env=PRIVATE_KEY)');

    // optional
    const permission = options.permission ?? PERMISSION;
    const chain = options.chain ?? {
        id: CHAIN_ID,
        url: options.url ?? CHAIN_URL,
    }

    return new Session({
        chain,
        actor,
        permission,
        walletPlugin: new WalletPluginPrivateKey(privateKey),
    })
}