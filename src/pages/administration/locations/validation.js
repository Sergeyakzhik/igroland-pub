import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short')
        .required('Required'),
    address: Yup.string()
        .min(10, 'Too Short')
        .required('Required'),
    city: Yup.string()
        .min(2, 'Too Short')
        .required('Required'),
    country: Yup.string()
        .min(2, 'Too Short')
        .required('Required')
});