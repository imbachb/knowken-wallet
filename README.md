# Knowledge Token Wallet

## Setup and start canisters

Install all JavaScript dependencies

```bash
npm install
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

Then start dfx replica

```bash
dfx start --clean --background
```

Deploy the canisters in the replica

```bash
dfx deploy internet_identity
dfx deploy background
```

You can also deploy the frontend canister. However, for local development it is not necessary. Simply run

```bash
npm run dev
```
