interface influencer {
    id: string;
    fullName: string;
    userName: string;
    email: string;
    password: string;
    [posts:string]:any;
    comments: [Comment];
    likes: [string];
    follows: [string];
    followers: [string];
    messages: [string];
    chats: [string];
    notifications: [string];
    description: string;
    type: boolean;
    ownedBy: string;
    createdAt: string;
    xpRewarded: string;
    startDate: string;
    endDate: string;
    levels:[string];
    enabled: boolean;
    drops: [string];
    eventType: string;
    callData: string; // CCIP chain.link function 

}

// const influnecer: Influencer[] = []
// arr.push()
// arr.push()
// arr.push()

interface user {
    provider: {
        type: string,
        required: true,
    };
    providerId: {
        required: true,
        unique: true
    };
    publicKey: {
        required:true
    };
    displayName: {
        type: string,
        required: true,
    };
    firstName: {
        type: string,
        required: true,
    };
    lastName:{
        type:string,
        required: true,
    };
    username: {
        type: string,
    }
    email: {
        type: string,
        required: true,
        unique: true,
    };
    password: {
        type: string,
        required: true,
    };
    phone: {
        type: string,
    };
    image: {
        type: string,
    }
    specialities: [{
        type: string,
    }];
    socialMedia:{
        discord: string,
        teleagram: string,
        twitter: string,
        linkedIn: string,
    };
    customImage:{
        type:string,
    };
    createdAt:{
        type: {
            type: string,
            default: Date,
        };
    shortBio: {
        type:string,
    },
    posts:{
        type:{
            schema: object,
        },
        ref: 'post',
    }
    }
    comments: [{
        type:{
            schema: object,
        },
        ref: 'comment'
    }];
    likes: [{
        type:{
            schema: object,
        },
        ref: 'like',
    }];
    follows: [{
        type: {
            schema: object,
        },
        ref: 'followed'
    }];
    followers: [{
        type: {
            schema: object,
        },
        ref: 'follows'
    }];
    messages: [{
        type: {
            schema: object,
        }
        ref: 'message',
    }];
    chats: [{
        type: {
            schema: object,
        },
        ref: 'chat',
    }];
    notifications: [{
        type: {
            schema: object,
        }
        ref: 'notification'
    }]
}

// const arr.user[] = []
