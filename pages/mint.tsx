import { useAddress, useMetamask, useNFTDrop } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Mint: NextPage = () => {
  const router = useRouter();
  // Get the currently connected wallet's address
  const address = useAddress();

  // Function to connect to the user's Metamask wallet
  const connectWithMetamask = useMetamask();

  // Get the NFT Collection contract
  const nftDropContract = useNFTDrop(
    "0x322067594DBCE69A9a9711BC393440aA5e3Aaca1"
  );

  async function claimNft() {
    try {
      const tx = await nftDropContract?.claim(1);
      console.log(tx);
      alert("NFT Claimed!");
      router.push(`/stake`);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <div>
			<div className="mainpart">
				<h1 className="h1Arr">Mint An NFT!</h1>


				<div className="TipaSlider667">
					<img className="slide1" src="slider1.png" alt="" />
					<img className="slide2" src="slider2.png" alt="" />
					<img className="slide3" src="slider3.png" alt="" />
				</div>


				<p className="para mt">
					Here is where we use our <b>NFT Drop</b> contract to allow users to mint
					one of the NFTs that we lazy minted.
				</p>
			
				<div className="btns">
				{!address ? (
					<button
						className="btn bb"
						onClick={connectWithMetamask}
					>
						Connect Wallet
					</button>
				) : (
					<button
						className="btn bb"
						onClick={() => claimNft()}
					>
						Claim An NFT
					</button>
				)}
				</div>
			</div>
    </div>
  );
};

export default Mint;
/*
import { useAddress, useMetamask, useContract } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Mint: NextPage = () => {
  const router = useRouter();
  // Get the currently connected wallet's address
  const address = useAddress();

  // Function to connect to the user's Metamask wallet
  const connectWithMetamask = useMetamask();

  // Get the NFT Collection contract
  const { contract } = useContract("0xBA2FbC8f85690ffF49b8c33357d6e0D9D6136a01", "nft-drop")
  //const nftDropContract = useNFTDrop(
   // "0xBA2FbC8f85690ffF49b8c33357d6e0D9D6136a01"
  //);

  async function claimNft() {
    try {
      const tx = await contract?.claim(1);
      console.log(tx);
      alert("NFT Claimed!");
      router.push(`/stake`);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Mint An NFT!</h1>

      <p className={styles.explain}>
        Here is where we use our <b>NFT Drop</b> contract to allow users to mint
        one of the NFTs that we lazy minted.
      </p>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

      {!address ? (
        <button
          className={`${styles.mainButton} ${styles.spacerBottom}`}
          onClick={connectWithMetamask}
        >
          Connect Wallet
        </button>
      ) : (
        <button
          className={`${styles.mainButton} ${styles.spacerBottom}`}
          onClick={() => claimNft()}
        >
          Claim An NFT
        </button>
      )}
    </div>
  );
};

export default Mint;*/