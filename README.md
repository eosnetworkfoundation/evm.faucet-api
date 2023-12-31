# EOS EVM Faucet API

> Sends faucet tokens to any EVM address.

## Quickstart

Install **Bun**

> curl -fsSL https://bun.sh/install | bash

```bash
$ gh repo clone eosnetworkfoundation/evm.faucet-api
$ cd evm.faucet-api
$ bun install
$ bun index.ts
```

## Docker environment

```
docker build -t eos-evm-faucet .
docker run -it --rm -p 3000:3000 --env-file .env eos-evm-faucet
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