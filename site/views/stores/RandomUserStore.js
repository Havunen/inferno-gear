import {Store} from 'flux/utils.js';
import Dispatcher from './../dispatcher/AppDispatcher';
import EventEmitter from 'events';

const randomUserApi = 'https://randomuser.me/api/';


// Simple Service
function getRandomUsers(count) {
    return window.fetch(randomUserApi + '?results=' + count, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}



// Store

export default new class extends EventEmitter {
    constructor() {
        super(Dispatcher);

        this.datasource = null;
        this.loading = false;

        this.getData = this.getData.bind(this);
    }

    getData() {
        // fetching
        this.loading = true;
        this.__emitChange();

        getRandomUsers(10).then((response) =>  {
            return response.json().then((json) => {
                this.loading = false;
                this.datasource.push(json.results);
                this.__emitChange();
            });
        })
    }
};
