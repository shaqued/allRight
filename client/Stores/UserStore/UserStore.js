import { observable, computed, action } from 'mobx';
import axios from 'axios';
import jsCookie from 'js-cookie'

const userTokenPath = 'userToken';

export class UserStore {
  constructor() {
    try {
      if (!jsCookie.get(userTokenPath)) return;

      isLoading = true;

      axios.get('/auth/me').then(({data}) => this.UserData = data).then(() => this.isLoading = false);

    } catch (e) {
      console.log(e);
    };
  };

  @observable UserData;
  @observable isLoading = false;

  @action LogIn = ({ email, password }) => {
    return axios.post('/auth/login',
      {
        email,
        password
      }
    ).then(({data}) => this.UserData = data);
  };

  @action Register = (userData) => {
    return axios.post('/auth/register', userData)
      .then(({data}) => this.UserData = data);
  };

  @action LogOff = () => {
    this.UserData = undefined;
    jsCookie.remove(userTokenPath);
  }
}