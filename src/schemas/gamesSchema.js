import yup from 'yup';

export const addGameSchema = yup.object(
    {
        name: yup.string().required(),
        genre: yup.string().required(),
        members: yup.array().required(),
        edition: yup.string().required()
    }
);