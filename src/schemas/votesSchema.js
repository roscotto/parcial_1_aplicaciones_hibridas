import yup from 'yup';

const errorMsgJudgeString = 'El id del juez debe ser un string';
const errorMsgJudgeRequired = 'El id del juez es requerido';

const errorMsgGameString = 'El id del juego debe ser un string';
const errorMsgGameRequired = 'El id del juego es requerido';

const errorMsgJudgeNameString = 'El nombre del juez debe ser un string';
const errorMsgJudgeNameRequired = 'El nombre del juez es requerido';

const errorMsgGameNameString = 'El nombre del juego debe ser un string';
const errorMsgGameNameRequired = 'El nombre del juego es requerido';

const errorMsgJugabilidadScoreNumber = 'El puntaje de jugabilidad debe ser un número';
const errorMsgJugabilidadScoreRequired = 'El puntaje de jugabilidad es requerido';
const errorMsgJugabilidadScoreMin = 'El puntaje de jugabilidad debe ser mayor a 0';
const errorMsgJugabilidadScoreMax = 'El puntaje de jugabilidad debe ser menor a 10';

const errorMsgArteScoreNumber = 'El puntaje de arte debe ser un número';
const errorMsgArteScoreRequired = 'El puntaje de arte es requerido';
const errorMsgArteScoreMin = 'El puntaje de arte debe ser mayor a 0';
const errorMsgArteScoreMax = 'El puntaje de arte debe ser menor a 10';

const errorMsgSonidoScoreNumber = 'El puntaje de sonido debe ser un número';
const errorMsgSonidoScoreRequired = 'El puntaje de sonido es requerido';
const errorMsgSonidoScoreMin = 'El puntaje de sonido debe ser mayor a 0';
const errorMsgSonidoScoreMax = 'El puntaje de sonido debe ser menor a 10';

const errorMsgAfinidadScoreNumber = 'El puntaje de afinidad debe ser un número';
const errorMsgAfinidadScoreRequired = 'El puntaje de afinidad es requerido';
const errorMsgAfinidadScoreMin = 'El puntaje de afinidad debe ser mayor a 0';
const errorMsgAfinidadScoreMax = 'El puntaje de afinidad debe ser menor a 10';


export const toVoteCreateSchema = yup.object(
    {
        judge_id: yup.string(errorMsgJudgeString).required(errorMsgJudgeRequired),
        game_id: yup.string(errorMsgGameString).required(errorMsgGameRequired),
        judge_name: yup.string(errorMsgJudgeNameString).required(errorMsgJudgeNameRequired),
        game_name: yup.string(errorMsgGameNameString).required(errorMsgGameNameRequired),
        jugabilidad_score: yup.number(errorMsgJugabilidadScoreNumber).integer().positive().min(1, errorMsgJugabilidadScoreMin).max(10, errorMsgJugabilidadScoreMax).required(errorMsgJugabilidadScoreRequired),
        arte_score: yup.number(errorMsgArteScoreNumber).integer().positive().min(1,errorMsgArteScoreMin).max(10, errorMsgArteScoreMax).required(errorMsgArteScoreRequired),
        sonido_score: yup.number(errorMsgSonidoScoreNumber).integer().positive().min(1, errorMsgSonidoScoreMin).max(10, errorMsgSonidoScoreMax).required(errorMsgSonidoScoreRequired),
        afinidad_score: yup.number(errorMsgAfinidadScoreNumber).integer().positive().min(1, errorMsgAfinidadScoreMin).max(10, errorMsgAfinidadScoreMax).required(errorMsgAfinidadScoreRequired)
    }
);

