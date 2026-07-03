import { GithubIntergration } from './Github Intergration/GithubIntergration.js';
import './Github Intergration/Elements/githubIssues.js';
import './Github Intergration/Elements/githubRepos.js';
import './Github Intergration/Elements/githubLogin.js';
import './Github Intergration/Elements/github_mde_editor.js';
import './Github Intergration/Elements/github_labels.js';

//make a startup call to the render service once the site has loaded
let github_intergration = new GithubIntergration();

github_intergration.initializeRenderService().then((result) => {
    console.log(result);
});