import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.github.com/repos/da1fujimoto/image_count_test/git/trees/master?recursive=1'
});