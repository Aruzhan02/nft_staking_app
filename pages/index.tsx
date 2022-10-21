import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className="containerAru">
			<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet"></link>
				<link href="https://fonts.googleapis.com/css2?family=Paytone+One&display=swap" rel="stylesheet"></link>
			<div className="leftSide">
				{/* Top Section */}
				
				<h1 className="h1Aru">Thirdweb Deploy <br></br>Custom Staking <br></br>Contract</h1>
				<div className="forButtons">
					<div
						className="mint_bTn"
						role="button"
						
					>
						{/* Mint a new NFT */}
							<img className = "image" src="1.png" alt="drop" />
							<h3 className="h3Aru">Mint a new NFT</h3>
							<p className="para">
								Use the NFT Drop Contract to claim an NFT from the collection.
							</p>
							<button onClick={() => router.push(`/mint`)} className="btn">Mint</button>
					</div>

					<div
						className="stake_btn"
						role="button"
						
					>
						{/* Staking an NFT */}
						<img className = "image" src="2.png" alt="drop" />
						<h3 className="h3Aru">Stake Your NFTs</h3>
						<p className="para">
							Use the custom staking contract deployed via <b>thirdweb Deploy</b>
						</p>
						<button onClick={() => router.push(`/stake`)} className="btn">Stake</button>
					</div>
				</div>
			</div>
			<div className="rightSide">
				<img className="back" src="back.png" alt="" />
				<h3 className="Aru">Aruzhan Amanova</h3>
			</div>
    </div>
  );
};

export default Home;