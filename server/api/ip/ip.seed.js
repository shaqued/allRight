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
            composer: 'Lizzo',
            performer: 'Lizzo',
            writer: ' Lizzo, Theron Thomas, Sam Sumser, Sean Small and Ricky Reed',
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
            composer: 'Jacquire King',
            performer: 'James Bay',
            writer: 'Bay with Paul Barry',
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
        },
        {
            name: 'אסור',
            category: Categories.Pop,
            tag: [Tags.Happy],
            composer: 'מרגי וגולדשטיין',
            performer: 'מרגי',
            writer: ' יהונתן מרגי, יונתן גולדשטיין וטליסמאן',
            owners: [{user: id, percentageOfOwnership: 100}],
            dateOfCreation: new Date('2019-01-04'),
            price: id,
            about: 'אסור הוא סינגל שהוקלט על ידי הזמר-יוצר הישראלי יהונתן מרגי.',
            type: Types.Music,
            sample: 'https://www.youtube.com/watch?v=RerzmNafv1s'
        }
    ]
};