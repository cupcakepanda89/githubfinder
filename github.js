class GitHub {
    constructor() {
        // https://github.com/settings/applications/1127286
        this.client_id = '7e3584c9d90c6443619a';
        this.client_secret = '0f243d8ad9097a02b24d3d3a63ace328acacefbd';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile : profile
        }
    }
}