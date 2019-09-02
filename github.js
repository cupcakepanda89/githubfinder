class GitHub {
    constructor() {
        // https://github.com/settings/applications/1127286
        this.client_id = '7e3584c9d90c6443619a';
        this.client_secret = '0f243d8ad9097a02b24d3d3a63ace328acacefbd';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        // fetch users api
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // fetch users repos api
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile : profile,
            repos : repos
        }
    }
}