import * as Yup from 'yup';

export default Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short')
        .max(70 ,'Too Long')
        .required('Required'),
    description: Yup.string()
        .min(10, 'Too Short')
        .max(1000 ,'Too Long')
        .required('Required'),
    category: Yup.string()
        .required('Required'),
    players: Yup.string()
        .required('Required'),
    time: Yup.string()
        .required('Required'),
    left: Yup.number()
        .required('Required'),
    manufacturer: Yup.string()
        .required('Required'),
    price: Yup.number()
        .required('Required'),
    image: Yup.mixed().required('Required')
});