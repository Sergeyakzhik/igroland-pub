import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    setOrder: ['id', 'data']
});

export default { Types, Creators };