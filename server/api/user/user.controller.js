import User from './user.model';
import createError from 'http-errors';
import _ from 'lodash';

export function getById ({params: {id}})  {
    return User.findById(id);
}

const dagan = (req) => {
    const getCircularReplacer = () => {
        const seen = new WeakSet();
        return (key, value) => {
          if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
              return;
            }
            seen.add(value);
          }
          return value;
        };
    };
      
    return(JSON.stringify(req, getCircularReplacer()));
}

// export function update ({user, params: {id}, body}) {
export function update ({params: {id}, body: {user}}) {
    if (!(user._id === id) && !user.admin) {
        return Promise.reject(createError(403));
    }

    // const {name, email} = body;
    // const data = {name, email};

    return User.findByIdAndUpdate(id, {$set: user})
        .then(_.noop);
}