
import "../home/home.scss"
import Header from '../header/header';
import Footer from '../footer/footer';
import myPhoto from "../file/photo_2025-02-04_19-58-15.jpg"
import js from "../file/icons8-javascript-96.png"
import nodejs from "../file/icons8-nodejs-96.png"
import react from "../file/icons8-react-native-96.png"
import sass from "../file/icons8-sass-96.png"
import html from "../file/icons8-html-96.png"
import ex from "../file/icons8-express-js-80.png"
import adbxd from "../file/icons8-adobe-xd-96.png"
import mysql from "../file/icons8-mysql-96.png"
import nextjs from "../file/icons8-nextjs-96.png"
import python from "../file/icons8-python-96.png"
import ts from "../file/icons8-typescript-96.png"
import up from "../file/icons8-up-48.png"


import { Link } from 'react-router-dom';



function Home() {

  const textTs = `
  //warning : dont forget to change the € letters to $ 
  import { TonClient, WalletContractV4, internal, toNano } from "ton";
  import { mnemonicToWalletKey } from "ton-crypto";
  import * as dotenv from "dotenv";
  
  dotenv.config();
  
  async function main() {
      const client = new TonClient({ endpoint: "https://toncenter.com/api/v2/jsonRPC" });
      const mnemonic = process.env.MNEMONIC?.split(" ") || [];
      const key = await mnemonicToWalletKey(mnemonic);
      const wallet = WalletContractV4.create({ workchain: 0, publicKey: key.publicKey });
      const walletContract = client.open(wallet);
      const seqno = await walletContract.getSeqno();
      const message = internal({ to: "EQC...", value: toNano("0.01"), bounce: false });
      const transfer = walletContract.createTransfer({ seqno, secretKey: key.secretKey, messages: [message] });
      await walletContract.send(transfer);
  }
  
  main();
  
  `;
  
  const textPy = `
  //warning : dont forget to change the € letters to $ 
  import bcrypt
  
  def encrypt_password(password: str) -> str:
      salt = bcrypt.gensalt()
      hashed_password = bcrypt.hashpw(password.encode(), salt)
      return hashed_password.decode()
  
  def verify_password(password: str, hashed_password: str) -> bool:
      return bcrypt.checkpw(password.encode(), hashed_password.encode())
  
  if __name__ == "__main__":
      password = input("Enter a password: ")
      encrypted = encrypt_password(password)
      print("Encrypted password:", encrypted)
      
      # Verify password
      check = input("Re-enter password to verify: ")
      if verify_password(check, encrypted):
          print("Password is correct!")
      else:
          print("Incorrect password!")
  
  `;
  
  const textReact = `
  //warning : dont forget to change the € letters to $ 
  import React, { useState } from "react";
  import { TonClient, WalletContractV4, internal, toNano } from "ton";
  import { mnemonicToWalletKey } from "ton-crypto";
  
  const TonWallet = () => {
    const [balance, setBalance] = useState("Loading...");
    const [status, setStatus] = useState("");
  
    const connectWallet = async () => {
      try {
        const client = new TonClient({ endpoint: "https://toncenter.com/api/v2/jsonRPC" });
        const mnemonic = "your mnemonic here".split(" ");
        const key = await mnemonicToWalletKey(mnemonic);
        const wallet = WalletContractV4.create({ workchain: 0, publicKey: key.publicKey });
        const walletContract = client.open(wallet);
        const balance = await walletContract.getBalance();
        setBalance(balance.toString());
      } catch (error) {
        console.error("Error connecting to wallet:", error);
        setBalance("Error");
      }
    };
  
    const sendTransaction = async () => {
      try {
        const client = new TonClient({ endpoint: "https://toncenter.com/api/v2/jsonRPC" });
        const mnemonic = "your mnemonic here".split(" ");
        const key = await mnemonicToWalletKey(mnemonic);
        const wallet = WalletContractV4.create({ workchain: 0, publicKey: key.publicKey });
        const walletContract = client.open(wallet);
        const seqno = await walletContract.getSeqno();
        const message = internal({ to: "EQC...", value: toNano("0.01"), bounce: false });
        const transfer = walletContract.createTransfer({ seqno, secretKey: key.secretKey, messages: [message] });
        await walletContract.send(transfer);
        setStatus("Transaction sent successfully!");
      } catch (error) {
        console.error("Transaction error:", error);
        setStatus("Transaction failed");
      }
    };
  
    return (
      <div>
        <h2>TON Wallet</h2>
        <p>Balance: {balance}</p>
        <button onClick={connectWallet}>Connect Wallet</button>
        <button onClick={sendTransaction}>Send Transaction</button>
        <p>{status}</p>
      </div>
    );
  };
  
  export default TonWallet;
  
  `
  
  
  const textExpress = `
  //warning : dont forget to change the € letters to $ 
  import express from "express";
  import bcrypt from "bcrypt";
  import bodyParser from "body-parser";
  import mongoose from "mongoose";
  
  const app = express();
  const PORT = 5000;
  
  mongoose.connect("mongodb://localhost:27017/usersDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const userSchema = new mongoose.Schema({
    username: String,
    password: String,
  });
  
  const User = mongoose.model("User", userSchema);
  
  app.use(bodyParser.json());
  
  app.post("/register", async (req, res) => {
    try {
      const { username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ error: "Error creating user" });
    }
  });
  
  app.listen(PORT, () => {
    console.log('Server running on port € {PORT}');
  });
  
  `;
  
  
  const textSass = `
  //warning : dont forget to change the € letters to $ 
  €primary-color: #3498db;
  €secondary-color: #2ecc71;
  €font-stack: 'Arial, sans-serif';
  
  body {
    font-family: €font-stack;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
  }
  
  .container {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
  }
  
  .button {
    background-color: €primary-color;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  
    &:hover {
      background-color: darken(€primary-color, 10%);
    }
  }
  
  .alert {
    padding: 15px;
    background-color: €secondary-color;
    color: white;
    border-radius: 5px;
  }
  `;
  
  const returnup =()=> {
    
      window.scrollTo({ top: 0, behavior: 'smooth' });
    
  }

  return (
    <>
        <Header />
        <main className='main-home'>
            <section className='info'>
                <div className="myPhoto">
                    <img src={myPhoto} alt="myPhoto" className='img-myPhoto'/>
                </div>
                <div className="mine-info">
                    <h2>Hassan Mohammadi</h2>
                    <h3><strong>Developer Web full stack (junior)</strong></h3>
                    <p>Hello! I'm a full-stack web developer with a passion for creating seamless online experiences. From front-end design to back-end functionality, I thrive on bringing ideas to life through code. Let's build something amazing together!</p>
                    <a href="https://drive.google.com/file/d/1bXyMK1f8-xLtW-hTYCzEU8Nkf4PxvYd_/view?usp=sharing" className='download-mycv'>⬇️ Download My Cv</a>
                </div>
            </section>
            <section className="examples">
                <div className="container-of-ex">
                    <div className='text-of-ex' id='typescript'>
                            <strong className="string-ts">TON Blockchain Wallet Transaction Script:</strong> <br /><br />
                                    <p className='p-ex'>
                                    This script allows you to send TON (Toncoin) from your wallet using TypeScript. Below is a breakdown of how it works:

                                    <br />
                                    <br />
                                    1. Importing Required Libraries
                                    <br />

                                    TonClient, WalletContractV4, internal, and toNano from "ton" → These help interact with the TON blockchain. <br />

                                    mnemonicToWalletKey from "ton-crypto" → Converts a mnemonic phrase into a wallet key. <br />

                                    dotenv → Loads environment variables from a .env file. <br />

                                    <br />
                                    2. Loading Environment Variables
                                    <br />

                                    The script loads your MNEMONIC (a secret phrase for your wallet) from an .env file using dotenv.config(). <br />

                                    <br />
                                    3. Connecting to the TON Blockchain
                                    <br />

                                    TonClient is initialized with an API endpoint (https://toncenter.com/api/v2/jsonRPC). <br />

                                    This connects the script to the TON blockchain. <br />

                                    <br />
                                    4. Generating the Wallet Key
                                    <br />

                                    The mnemonic phrase is converted into a public and secret key pair using mnemonicToWalletKey(). <br />

                                    WalletContractV4.create() initializes a wallet using the public key. <br />

                                    <br />
                                    5. Fetching Wallet Sequence Number (seqno)
                                    <br />

                                    The script retrieves the seqno (sequence number) using walletContract.getSeqno(). <br />

                                    The seqno ensures transactions are executed in the correct order. <br />

                                    <br />
                                    6. Creating a Transaction
                                    <br />

                                    The script prepares a message (internal) to send 0.01 TON to an address ("EQC..."). <br />

                                    The transaction is created using walletContract.createTransfer(). <br />

                                    <br />
                                    7. Sending the Transaction
                                    <br />

                                    The transfer is sent to the blockchain using walletContract.send(transfer). <br />

                                    <br />
                                    8. Executing the Script
                                    <br />

                                    The main() function runs the entire process. <br />

                                    It connects the wallet, prepares the transaction, and sends it. <br />

                                    <br />
                                    </p>
                    </div>
                    <div className='code-of-ex'>
                        <textarea readOnly value={textTs} className='textEx'></textarea>
                    </div>
                </div>
                <div className="container-of-ex">
                    <div className='text-of-ex' id='python'>
                            <strong className='string-py'>Using python to Hash user password :</strong><br /><br />
                            <p className="p-ex">
                            The user enters a password, and it gets hashed using bcrypt.<br />

                            The hashed password is displayed (for demonstration purposes).<br />

                            The user re-enters the password, and the program checks whether it matches the stored hash.<br />

                            If the passwords match, it prints "Password is correct!".<br />

                            If they do not match, it prints "Incorrect password!".<br /><br />

                            Security Benefits:<br />
                            ✅ Secure password storage (hashed, not stored as plain text).<br />
                            ✅ Random salt prevents identical passwords from having the same hash.<br />
                            ✅ Verification ensures correct authentication.<br /><br />

                            This is a basic but secure way to handle passwords in a backend system. 🚀
                            </p>
                    </div>
                    <div className='code-of-ex'>
                        <textarea readOnly value={textPy} className='textEx'></textarea>
                    </div>
                    
                </div>
                <div className="container-of-ex">
                    <div className="text-of-ex" id='react'>
                        <strong className='string-react'>
                        This React component is a simple TON blockchain wallet interface that allows users to connect to their wallet, check their balance, and send transactions.
                        </strong>
                        <p className='p-ex'>
                        <br /><br />

                        1️⃣ **Import Required Libraries**<br />
                        - `useState` is a React hook used for managing component states.<br />
                        - `TonClient` is used to interact with the TON blockchain.<br />
                        - `WalletContractV4` is the wallet contract model for TON.<br />
                        - `internal, toNano` help in creating transactions and converting TON to nanoTON.<br />
                        - `mnemonicToWalletKey` converts a mnemonic phrase into a cryptographic key.<br /><br />

                        2️⃣ **Define the `TonWallet` Component**<br />
                        - `balance` stores the user's wallet balance and initially displays `"Loading..."`.<br />
                        - `status` stores the transaction status message.<br /><br />

                        3️⃣ **Function to Connect Wallet & Get Balance**<br />
                        ✅ Steps:<br />
                        1. Creates a `TonClient` instance to interact with the TON blockchain.<br />
                        2. Loads the **mnemonic phrase** and splits it into an array.<br />
                        3. Converts the **mnemonic phrase into a cryptographic key** using `mnemonicToWalletKey()`.<br />
                        4. Creates a **wallet contract instance** using `WalletContractV4.create()`.<br />
                        5. **Opens the wallet** using `client.open(wallet)`.<br />
                        6. Retrieves **wallet balance** using `walletContract.getBalance()`.<br />
                        7. Updates the balance state using `setBalance()`.<br />
                        8. If an error occurs, it logs the error and sets balance to `"Error"`.<br /><br />

                        4️⃣ **Function to Send a Transaction**<br />
                        ✅ Steps:<br />
                        1. Creates a **TonClient instance** for interacting with the blockchain.<br />
                        2. Loads the **mnemonic phrase** and converts it into a key.<br />
                        3. Creates and opens the **wallet contract**.<br />
                        4. Retrieves the **sequence number (seqno)** of the last transaction.<br />
                        5. Creates a **transaction message** containing:<br />
                        - **Recipient address** (`"EQC..."`, which should be replaced with the actual address).<br />
                        - **Amount to send** (`0.01 TON`, converted to nanoTON with `toNano("0.01")`).<br />
                        - **Bounce disabled** (`false` prevents funds from bouncing back).<br />
                        6. Prepares the **transaction transfer** request.<br />
                        7. Sends the transaction to the blockchain.<br />
                        8. Updates the **status message** (`setStatus("Transaction sent successfully!")`).<br />
                        9. If an error occurs, it logs the error and sets status to `"Transaction failed"`.<br /><br />

                        5️⃣ **UI Rendering (React JSX)**<br />
                        ✅ Steps:<br />
                        1. Displays a **title (`h2`)** for the wallet.<br />
                        2. Shows **wallet balance (`p`)** dynamically with `Balance: balance`.<br />
                        3. Adds a **"Connect Wallet" button** that calls `connectWallet()`.<br />
                        4. Adds a **"Send Transaction" button** that calls `sendTransaction()`.<br />
                        5. Displays the **transaction status (`p`)** dynamically.<br /><br />

                        🚀 **Summary**<br />
                        ✅ **Connects to a TON wallet** using a mnemonic phrase.<br />
                        ✅ **Fetches wallet balance** and displays it.<br />
                        ✅ **Sends a transaction** of `0.01 TON` to a specified address.<br />
                        ✅ **Displays status messages** for transactions and errors.<br /><br />

                        💡 **Possible Improvements**<br />
                        - **Do not hardcode the mnemonic phrase.** Store it securely.<br />
                        - **Allow users to input the recipient address and amount.**<br />
                        - **Improve error handling** for invalid mnemonics, network errors, or insufficient funds.<br /><br />

                        This is a **simple but functional TON wallet interface** in React. 🚀<br />
                        </p>

                    </div>
                    <div className="code-of-ex">
                        <textarea readOnly value={textReact} className="textEx"></textarea>
                    </div>
                </div>
                <div className="container-of-ex">
                    <div className="text-of-ex" id='express'>
                        <strong className="string-express">
                        This Express.js application provides a simple backend for **user registration** with **MongoDB** and **bcrypt password encryption**.<br /><br />
                        </strong>
                        <p className="p-ex">
                        1️⃣ **Import Required Libraries**<br />
                                - `express` - Web framework for building the server.<br />
                                - `bcrypt` - Library for hashing passwords securely.<br />
                                - `body-parser` - Middleware to parse incoming JSON requests.<br />
                                - `mongoose` - Library for connecting to MongoDB and handling database operations.<br /><br />

                                2️⃣ **Initialize Express App & Set Port**<br />
                                - Creates an `Express` application using `express()`.<br />
                                - Defines the server port as `5000`.<br /><br />

                                3️⃣ **Connect to MongoDB**<br />
                                - Connects to a **MongoDB database** named `"usersDB"` using Mongoose.<br />
                                - Uses `useNewUrlParser` and `useUnifiedTopology` options to avoid warnings.<br /><br />

                                4️⃣ **Define User Schema & Model**<br />
                                ✅ Defines a **user schema** (`userSchema`) with two fields:<br />
                                - `username` - Stores the user's name as a string.<br />
                                - `password` - Stores the hashed password as a string.<br />
                                ✅ Creates a **User model** from the schema, which interacts with the `users` collection in MongoDB.<br /><br />

                                5️⃣ **Middleware: `body-parser`**<br />
                                - Adds `bodyParser.json()` middleware to parse JSON request bodies.<br /><br />

                                6️⃣ **User Registration Endpoint (`POST /register`)**<br />
                                ✅ Steps:<br />
                                1. Extracts **username** and **password** from `req.body`.<br />
                                2. Hashes the **password** using `bcrypt.hash(password, 10)`. The `10` is the salt rounds for added security.<br />
                                3. Creates a **new user document** using the `User` model.<br />
                                4. Saves the **user** to the database (`newUser.save()`).<br />
                                5. Sends a **201 Created** response with ` message: "User created successfully" `.<br />
                                6. If an error occurs, sends a **500 Internal Server Error** response with ` error: "Error creating user" `.<br /><br />

                                7️⃣ **Start the Express Server**<br />
                                - Calls `app.listen(PORT, () = )`.<br />
                                - Logs the server start message to the console.<br /><br />

                                🚀 **Summary**<br />
                                ✅ **Connects to MongoDB** using Mongoose.<br />
                                ✅ **Defines a User model** with `username` and `password` fields.<br />
                                ✅ **Hashes passwords** securely using bcrypt.<br />
                                ✅ **Handles user registration** via a `/register` endpoint.<br />
                                ✅ **Starts an Express server** on port 5000.<br /><br />

                                💡 **Possible Improvements**<br />
                                - Add **error handling** for duplicate usernames.<br />
                                - Implement **user login** with password verification.<br />
                                - Store **MongoDB credentials securely** instead of hardcoding them.<br /><br />

                                This is a **basic and secure user registration system** using Express, MongoDB, and bcrypt! 🚀<br />
                        </p>
                    </div>
                        <div className="code-of-ex">
                            <textarea readOnly value={textExpress} className="textEx"></textarea>
                        </div>
                </div>
                <div className="container-of-ex">
                    <div className="text-of-ex" id='sass'>
                        <strong className="string-sass">
                        This SASS (SCSS) code defines a simple styling structure for a webpage using variables and nested rules. Here's a breakdown:
                        </strong>

                        <p className="p-ex">
                        <br />
                        🔹 Variables (€primary-color, €secondary-color, €font-stack) are defined for reusability.

                        <br />
                        🔹 The body tag applies the Arial font, a light gray background, and removes margins and padding.

                        <br />
                        🔹 .container is a centered div with a maximum width of 1200px and 20px padding.

                        <br />
                        🔹 .button is a clickable button with:
                          ✔ A blue background (€primary-color)
                          ✔ White text
                          ✔ Padding for spacing
                          ✔ Rounded corners (border-radius: 5px)
                          ✔ Smooth transition when hovered

                        <br />
                        🔹 Inside .button, the &:hover rule makes the background darker when hovered.

                        <br />
                        🔹 .alert is a green notification box (€secondary-color) with padding, white text, and rounded corners.

                        <br />
                        🚀 This SASS file makes styling more efficient by using variables and nesting! 🚀
                        </p>

                    </div>
                    <div className="code-of-ex">
                        <textarea readOnly value={textSass} className="textEx"></textarea>
                    </div>
                </div>
            </section>
            <section className="skills">
                <h1>My Skills:</h1>
                <div className="lang-icons">
                    <Link to={"https://en.wikipedia.org/wiki/Sass_(style_sheet_language)"} className='iconLinks'><img src={sass} alt={"Sass"} />Sass</Link>
                    <Link to={"https://en.wikipedia.org/wiki/HTML"} className='iconLinks'><img src={html} alt={"HTML"} />HTML</Link>
                    <Link to={"https://en.wikipedia.org/wiki/JavaScript"} className='iconLinks'><img src={js} alt={"Js"} />JavaScript</Link>
                    <Link to={"https://en.wikipedia.org/wiki/TypeScript"}  className='iconLinks'><img src={ts} alt={"Ts"} />TypeScript</Link>
                    <Link to={"https://en.wikipedia.org/wiki/React_(software)"}  className='iconLinks'><img src={react} alt={"React"} />React</Link>
                    <Link to={"https://en.wikipedia.org/wiki/Node.js"} className='iconLinks'><img src={nodejs} alt={"Node JS"} />Node Js</Link>
                    <Link to={"https://en.wikipedia.org/wiki/Express.js"} className='iconLinks'><img src={ex} alt={"Express JS"} />Express Js</Link>
                    <Link to={"https://en.wikipedia.org/wiki/Next.js"} className='iconLinks'><img src={nextjs} alt={"Next JS"} />Next Js</Link>
                    <Link to={"https://en.wikipedia.org/wiki/Python_(programming_language)"} className='iconLinks'><img src={python} alt={"Python"} />Python</Link>
                    <Link to={"https://en.wikipedia.org/wiki/MySQL"} className='iconLinks'><img src={mysql} alt={"MySQL"} />MySQL</Link>
                    <Link to={"https://en.wikipedia.org/wiki/Adobe_XD"} className='iconLinks'><img src={adbxd} alt={"Adobe Xd"} />Adobe Xd</Link>
                </div>
            </section>
            <div id='returnback'>
                <img src={up} alt="up" className='returnback-img' onClick={returnup}/>
            </div>
        </main>
        <Footer />
        
    </>
  )
}

export default Home;
