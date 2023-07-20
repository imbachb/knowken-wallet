# Knowledge Token Wallet

## Setup and start canisters

Install all JavaScript dependencies

```bash
npm install
```

Start dfx replica

```bash
dfx start --clean --background
```

Set up canisters

```bash
dfx canister create internet_identity --no-wallet
dfx canister create backend --no-wallet
dfx canister create frontend --no-wallet

dfx build internet_identity
dfx build backend
dfx build frontend
```

Deploy the canisters in the replica

```bash
dfx deploy internet_identity --no-wallet
dfx deploy backend --no-wallet
dfx deploy frontend --no-wallet
```

When the process completes you'll have a frontend canister running locally. To find the frontend canister's ID, run

```
dfx canister id frontend
```

It will output something similar to `br5f7-7uaaa-aaaaa-qaaca-cai`. Copy this ID and open it in the browser using `http://<canister ID>.localhost:4943`, eg. `http://br5f7-7uaaa-aaaaa-qaaca-cai.localhost:4943`.

During local development the deployment of the frontend canister is not necessary. Simply run

```bash
npm run dev
```
