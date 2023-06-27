// Required
export const PRIVATE_KEY = process.env.PRIVATE_KEY;
export const ACTOR = process.env.ACTOR;

// Optional
export const PORT = parseInt(process.env.PORT ?? "3000");
export const PERMISSION = process.env.PERMISSION ?? 'active';
export const EVM = 'eosio.evm';
export const CONTRACT = 'eosio.faucet';
export const BROADCAST = Boolean(process.env.BROADCAST ?? 'true');
export const CHAIN_ID = process.env.CHAIN_ID ?? '73e4385a2708e6d7048834fbc1079f2fabb17b3c125b146af438971e90716c4d';
export const CHAIN_URL = process.env.CHAIN_URL ?? 'https://jungle4.api.eosnation.io';
