import yup from 'yup';

const errorMsgNameString = 'El nombre del juego debe ser un string';
const errorMsgNameRequired = 'El nombre del juego es requerido';

const errorMsgGenreString = 'El género del juego debe ser un array';
const errorMsgGenreRequired = 'El género del juego es requerido';

const errorMsgMembersArray = 'Los miembros del juego deben ser un array';
const errorMsgMembersRequired = 'Los miembros del juego son requeridos';

const errorMsgEditionString = 'La edición del juego debe ser un string';
const errorMsgEditionRequired = 'La edición del juego es requerida';

export const addGameSchema = yup.object(
    {
        name: yup.string(errorMsgNameString).required(errorMsgNameRequired),
        genre: yup.string(errorMsgGenreString).required(errorMsgGenreRequired),
        members: yup.array(errorMsgMembersArray).required(errorMsgMembersRequired),
        edition: yup.string(errorMsgEditionString).required(errorMsgEditionRequired)
    }
);