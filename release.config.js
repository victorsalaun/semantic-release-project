
const config = {
    branches: [
        'master',
        {
            name: 'develop',
            prerelease: true
        },
        {
            name: 'semantic-release',
            prerelease: true
        }
    ],
    plugins: [
        '@semantic-release/commit-analyzer', // https://github.com/semantic-release/commit-analyzer
        '@semantic-release/release-notes-generator', //https://github.com/semantic-release/release-notes-generator
        '@semantic-release/github', // https://github.com/semantic-release/github
        '@semantic-release/changelog', [
            // https://github.com/semantic-release/git
            '@semantic-release/git',
            {
                assets: ['CHANGELOG.md'],
            },
        ]
    ],
}

module.exports = config