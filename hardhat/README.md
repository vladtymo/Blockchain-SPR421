# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```

## Environment variables

Sensitive values (RPC URL and private keys) are loaded from environment variables.

1. Copy `.env.example` to `.env`.
2. Fill in your values:

```env
GANACHE_RPC_URL=http://127.0.0.1:7545
GANACHE_PRIVATE_KEY_1=...
GANACHE_PRIVATE_KEY_2=...
GANACHE_PRIVATE_KEY_3=...
```

`.env` is gitignored and should not be committed.
