import { string, object, array } from 'yup'
import tags from '../../../assets/constants/tags'

export default object().shape({
    name: string().required(),
    category: string(),
    tag: array().of(tags),
    performer: string().required(),
    composer: string().required(),
    writer: string().required(),
    about: string(),
    type: string(),
    price: string(),
    owners: string()
})