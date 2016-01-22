import {Store} from 'flux/utils';

const randomUserApi = 'https://randomuser.me/api/';

class RandomUserStore extends Store {
    constructor(props) {
        super(props);

        this.datasource = [];
    }

    fetchRandomUsers() {
        window.fetch(randomUserApi, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.json().then((json) => {
                this.datasource.push(json.results);
            });
        });
    }
}
