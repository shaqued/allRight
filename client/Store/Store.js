import {observable, computed, action} from 'mobx';

export class Store {
    @observable example = 'this is example for information';

    @computed get exampleLength () {
        return this.example.length;
    }

    @action changeObservable = newExampleFromUser => {
        this.example = newExampleFromUser;
    }
}