import { observable, computed, action } from 'mobx';
import axios from 'axios';
import Cookies from 'js-cookie';

export class UserStore {
  @observable LoggedInUser = Cookies.get('userToken');

  @action LogIn = ({ email, password }) => {
    return axios.post('/auth/login',
      {
        email,
        password
      }
    ).then(({ data }) => Cookies.set('userToken', data));
  };

  @action Register = (userData) => {
    return axios.post('/auth/register', userData)
    .then(({ data }) => Cookies.set('userToken', data));
  }
}