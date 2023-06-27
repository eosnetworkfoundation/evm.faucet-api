# EOS EVM Faucet API

> Sends faucet tokens to any EVM address.

## Quickstart

```bash
$ gh repo clone eosnetworkfoundation/evm.faucet-api
$ cd evm.faucet-api
$ npm install
$ npm start
```

## HTTP Request

```http
POST http://localhost:3000 HTTP/1.1
content-type: application/json

{
    "to": "0xaa2F34E41B397aD905e2f48059338522D05CA534"
}
```

## Response

```json
{
  "transaction_id": "f9b9e9ae065658a9a66f7ecbaa168000cc7323e74ce44bb288467df49f1f3e86",
  "processed": {
    "id": "f9b9e9ae065658a9a66f7ecbaa168000cc7323e74ce44bb288467df49f1f3e86",
    "block_num": 84178493,
    "block_time": "2023-06-27T01:49:22.500",
    "producer_block_id": null,
    "receipt": {
      "status": "executed",
      "cpu_usage_us": 482,
      "net_usage_words": 23
    },
    ...
  }
}
```