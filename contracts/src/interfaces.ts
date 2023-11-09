//Full Mina Nodes that are implemented as Smart Contracts are on other chains such as Ethereum
interface Shield {
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

interface Auditing {
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

const shield: Shield = {
    staticAnalysis: 'SweeperBot',
    simulation: '' ,
    mintSimulation: '',
    walletBurnerCheck: '',
    walletFraudDetection: '',
    communityDBCheck: '',
    checkTornadoCash: '',
    checkTornadoCashHop: '',
    checkTornadoCashTransactions: '',
    clientProactiveTrace: '',
    // [flashmint: 'MEV']: 3156,

}

const auditing: Auditing = {
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