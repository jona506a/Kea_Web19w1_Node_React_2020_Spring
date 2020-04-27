const ghpages = require('gh-pages');

ghpages.publish('build', {
    branch: 'master',
    message: 'auto-commit',
    repo: 'https://github.com/anderslatif/anderslatif.github.io',
    dest: "myapp"
}, (error) => {
    if (error) {
        console.log(error);
    }
});

