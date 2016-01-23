import EventEmitter from 'events';
import Dispatcher from './../dispatcher/AppDispatcher';

const CHANGE_EVENT = 'change';

export class BaseStore extends EventEmitter {
    constructor() {
        super();
        this.dispatchToken = Dispatcher.register(this.handleAction.bind(this))
    }

    handleAction() {
        throw new Error('Must override!');
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    /**
     * @param {function} callback
     */
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    /**
     * @param {function} callback
     */
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
}