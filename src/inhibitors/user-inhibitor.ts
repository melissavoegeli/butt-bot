import { Inhibitor } from 'discord-akairo';
import { Message } from 'discord.js';

class UserInhibitor extends Inhibitor {
    usersToIgnore: string[];

    constructor() {
        super('user', { });

        const rawUsers = process.env.USERS_TO_IGNORE || "";
        this.usersToIgnore = rawUsers.split(',');

        console.log(`Ignoring messages from ids: ${ JSON.stringify(this.usersToIgnore )}`);
    }

    exec(message: Message, args: any) : any {
        return !this.usersToIgnore.includes(message.author.id);
    }
}

module.exports = UserInhibitor;