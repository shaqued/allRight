import { observable, computed, action } from 'mobx';
import axios from 'axios';
import MobxCookie from 'mobx-cookie';
import jsCookie from 'js-cookie'

const userCookiePath = 'userData';

export class UserStore {
  constructor(){
    try{
      this.UserData = JSON.parse(jsCookie.get(userCookiePath));
    } catch(e){
      console.log(e);
    };
  };

  @observable UserTokenCookie = new MobxCookie('userToken');
  @observable UserData;

  @computed get UserToken (){
    return this.UserTokenCookie.value;
  } 

  @action LogIn = ({ email, password }) => {
    return axios.post('/auth/login',
      {
        email,
        password
      }
    ).then(({ data:{ user, token }}) => {
      this.UserData = user;
      jsCookie.set(userCookiePath, user);
      this.UserTokenCookie.set(token);
    });
  };

  @action Register = (userData) => {
    return axios.post('/auth/register', userData)
    .then(({ user, token }) => {
      this.UserTokenCookie.set(token);
      jsCookie.set(userCookiePath, user);
      this.UserData = user;
    });
  };

  @action LogOff = () => {
      this.UserData = undefined;
      jsCookie.remove(userCookiePath);
      this.UserTokenCookie.remove();
  }
}