import yup from 'yup';

export const toVoteCreateSchema = yup.object(
    {
        judge_id: yup.string().required(),
        game_id: yup.string().required(),
        judge_name: yup.string().required(),
        game_name: yup.string().required(),
        jugabilidad_score: yup.number().required(),
        arte_score: yup.number().integer().min(1).max(10).required(),
        sonido_score: yup.number().integer().min(1).max(10).required(),
        afinidad_score: yup.number().integer().min(1).max(10).required()
    }
);

export default {
    toVoteCreateSchema
}