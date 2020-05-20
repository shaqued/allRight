import {Tags} from '../../constant/ipTag.const';
import {Categories} from '../../constant/ipCategory.const';
import {Types} from '../../constant/ipType.const';
import User from '../user/user.model';
import mongoose from 'mongoose';

// eslint-disable-next-line new-cap
const id = mongoose.Types.ObjectId();
const users = User.find().then();

export default {
    seed: () => [
        {
            name: 'Juice',
            category: Categories.Pop,
            tag: [Tags.Happy, Tags.Love],
            owners: [{user: id, percentageOfOwnership: 100}],
            dateOfCreation: new Date('2019-01-04'),
            price: id,
            reviews:
                [
                    {user: id, comment: 'great!', scoring: 5},
                    {user: id, comment: 'The best', scoring: 4}
                ],
            about: 'Juice is a song recorded by American singer and rapper Lizzo.',
            type: Types.Music,
            sample: 'https://www.youtube.com/watch?v=XaCrQL_8eMY'
        },
        {
            name: 'Let it go',
            category: Categories.Pop,
            tag: [Tags.Happy, Tags.Love, Tags.Sad],
            owners: [{user: id, percentageOfOwnership: 100}],
            dateOfCreation: new Date('2014-09-15'),
            price: id,
            reviews:
                [
                    {user: id, comment: 'great!', scoring: 5},
                    {user: id, comment: 'The best', scoring: 4}
                ],
            about: 'Let It Go is a song by English singer-songwriter James Bay.',
            type: Types.Music,
            sample: 'https://www.youtube.com/watch?v=GsPq9mzFNGY'
        }
    ]
};