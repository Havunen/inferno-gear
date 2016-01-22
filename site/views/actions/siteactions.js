import Dispatcher from './../dispatcher/AppDispatcher';
import {DropdownConstants} from './../constants/DropdownConstants';

const DropdownActions = {
    selectPerson(id) {
        Dispatcher.dispatch({
            actionType: DropdownConstants.DROPDOWN_SELECT,
            id: id
        });
    }
};
