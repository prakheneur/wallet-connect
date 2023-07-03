import React from "react";
import { TransactionBlock, tx } from "@mysten/sui.js";
import { useWallet } from "@suiet/wallet-kit";
import "./App.css";
import { ConnectButton } from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css"; // don't forget to import default stylesheet
import Form from "./Form";

function createListingTxnBlock(x, y) {
  // define a programmable transaction block
  const txb = new TransactionBlock();

  // contract address might be wrong
  const contractAddress =
    "0x4bf85e1981fd08fccf09d93f1337197df89abd186a79504925fc422f4c091acb";
  const contractModule = "advertisement";
  const contractMethod = "create";

  const duration_ms = x;
  const fee = y;

  // need to fill
  const nftDescription = "Hello, Suiet NFT";
  const nftImgUrl =
    "https://xc6fbqjny4wfkgukliockypoutzhcqwjmlw2gigombpp2ynufaxa.arweave.net/uLxQwS3HLFUailocJWHupPJxQsli7aMgzmBe_WG0KC4";

  txb.moveCall({
    target: `${contractAddress}::${contractModule}::${contractMethod}`,
    arguments: [
      tx.pure(duration_ms),
      tx.pure(fee),
      tx.pure(nftDescription),
      tx.pure(nftImgUrl),
    ],
  });

  return txb;
}

function App() {
  const wallet = useWallet();

  async function handleFormSubmit(formData) {
    if (!wallet.connected) return;

    const txb = createListingTxnBlock(formData.duration_ms, formData.fee);
    try {
      // call the wallet to sign and execute the transaction
      const res = await wallet.signAndExecuteTransactionBlock({
        transactionBlock: txb,
      });
      console.log("listing created successfully!", res);
      alert("Congrats! your advertisement is listed!");
    } catch (e) {
      alert("Oops, listing failed");
      console.error("listing failed", e);
    }
    console.log("Form data:", formData);
  }

  return (
    <div className="App">
      {wallet.status === "connected" ? (
        <Form onFormSubmit={handleFormSubmit} />
      ) : (
        <>
          <h1 className="title">Hello, Suiet Wallet Kit</h1>
          <ConnectButton />
        </>
      )}
    </div>
  );
}

export default App;
