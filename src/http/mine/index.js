import Http from '../fetch.js';

export const getMinePicture = () => {
    return Http(
        './userImg.json',
        {method: 'GET'}
    )
}