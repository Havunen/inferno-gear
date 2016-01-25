import {BaseStore} from './BaseStore';
import {DropdownActions} from './../actions/DropdownActions';

const randomUserApi = 'https://randomuser.me/api/';

// Simple Service
const getRandomUsers = function(count, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", randomUserApi +  '?results=' + count, true);
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback(xhr.responseText);
            } else {
                console.error(xhr.statusText);
            }

        }
    };
    xhr.onerror = function (e) {
        console.error(xhr.statusText);
    };
    xhr.send(null);
};



// Store

class Store extends BaseStore {
    constructor() {
        super();

        this.datasource = null;
        this.loading = false;

        this.getData = this.getData.bind(this);
    }

    handleAction(action) {
        switch(action.type) {
            case DropdownActions.selectPerson:
                break;
            default:
                // Do nothing
                break;
        }
    }

    getData() {
        if (this.loading === true) {
            return;
        }
        // fetching
        this.loading = true;
        getRandomUsers(10, (response) => {
            let json = JSON.parse(response);

            if (this.datasource === null) {
                this.datasource = [];
            }

            this.loading = false;
            this.datasource.push(...json.results);
            this.emitChange();
        });
        //getRandomUsers(10).then(function (response) {
        //    return response.json()
        //}).then((json) => {
        //    this.loading = false;
        //    this.datasource.push(json.results);
        //    this.emitChange();
        //}).catch(function(ex) {
        //    console.log("JSON parsing failed", ex);
        //})
    }
}

export const RandomUserStore = new Store();
