export const TIPO_BOTAO = Object.freeze({
    ADD : "add",
    FALSE : "false",
    TRUE: "true",
    DELETE : "delete",
 });

export const ID_BOTAO = {
    [TIPO_BOTAO.ADD]: 'botao-add',
    [TIPO_BOTAO.DELETE]: 'botao-remove',
    [TIPO_BOTAO.TRUE]: 'botao-check',
    [TIPO_BOTAO.FALSE]: 'botao-uncheck',
};