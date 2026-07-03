import { GithubIntergration } from './GithubIntergration.js';
import './Elements/githubIssues.js';
import './Elements/githubRepos.js';
import './Elements/githubLogin.js';
import './Elements/github_mde_editor.js';
import './Elements/github_labels.js';

//make a startup call to the render service once the site has loaded
let github_intergration = new GithubIntergration();

github_intergration.initializeRenderService().then((result) => {
    console.log(result);
});