import axios from 'axios';
import Logger from './logger';

class API {
    constructor () {
        this.axios = axios.create({
            baseURL: 'https://dev.metapic.se/',
            timeout: 5000
        });
    }

    Get (path) {
        const call = this.axios.get(path);
        call.then((res) => {
            Logger.Info('API', 'Response from "path":');
            Logger.Object(res);
        }).catch((err) => {
            Logger.Error('API', 'Response from "path": "' + err + '"');
        });
        return call;
    }
}

export default (new API());