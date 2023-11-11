import { Shield, AuditingInstance } from "./interfaces";
// import { InfluencerContract, User as User } from "./influencer"; // Assuming your user class is exported as 'user'
import {
    Field,
    Mina,
    PrivateKey,
    AccountUpdate,
    method,
} from 'o1js';

const useProof = false;
const proofsEnabled = true; // Define or use directly in the LocalBlockchain instantiation

const Local = Mina.LocalBlockchain({ proofsEnabled });
Mina.setActiveInstance(Local);

const { privateKey: deployerKey, publicKey: deployerAccount } = Local.testAccounts[0];
const { privateKey: senderPrivateKey, publicKey: senderPublicKey } = Local.testAccounts[1];
