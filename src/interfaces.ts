//Full Mina Nodes that are implemented as Smart Contracts are on other chains such as Ethereum
import { Field, SmartContract, state, State, method } from 'o1js';

export class Shield extends SmartContract {
    @state(Field) num = State<Field>();

    init() {
        super.init();
        this.num.set(Field(3));
    }

    @method
    update(shield: Field) {
        const currentState = this.num.get();
        this.num.assertEquals(currentState);
        shield.assertEquals(currentState.mul(currentState));
        this.num.set(shield);
    }
}

 interface shieldInterface {
    staticAnalysis: string;
    simulation: string;
    mintSimulation: string;
    walletFraudDetection: string;
    walletBurnerCheck: string;
    communityDBCheck: string;
    checkTornadoCash: string;
    checkTornadoCashHop: string;
    checkTornadoCashTransactions: string;
    clientProactiveTrace: string;
    [key: string]: any
}

interface auditing {
    formalSpecification: string;
    formalVerification: string;
    certoraProver: boolean;
    constraintSolver: string;
    gambitMutation: string;
    memorySplitter:string;
    boundaryChecking: string;
    loopInvariants: string;
    orca: boolean;
    specLibrary: string;
    specificationFuzzing: string;
    sourceCodeDetector: string;
    commonDetections: string;
    [key: string]: any;

}

// const shield: Shield = {
//     // staticAnalysis: 'SweeperBot',
//     simulation: '' ,
//     mintSimulation: '',
//     walletBurnerCheck: '',
//     walletFraudDetection: '',
//     communityDBCheck: '',
//     checkTornadoCash: '',
//     checkTornadoCashHop: '',
//     checkTornadoCashTransactions: '',
//     clientProactiveTrace: '',
//     // [flashmint: 'MEV']: 3156,

// }

const auditing: auditing = {
    formalSpecification: '',
    formalVerification: '',
    certoraProver: true,
    constraintSolver: '',
    gambitMutation: '',
    memorySplitter: '',
    boundaryChecking: '',
    loopInvariants: '',
    orca: false,
    specLibrary: '',
    specificationFuzzing: '',
    sourceCodeDetector: '',
    commonDetections: '',
}

export { shieldInterface as shieldInstance, auditing as AuditingInstance };