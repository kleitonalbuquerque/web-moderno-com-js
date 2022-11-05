/* eslint-disable import/no-anonymous-default-export */
export const BoaTarde = (props) => <h1>Boa tarde {props.nome}!</h1>;

export const BoaNoite = (props) => <h1>Boa noite {props.nome}!</h1>;

export const CoisaLinda = (props) => <h1>{props.nome} coisa linda!</h1>;

export const CoisaFeia = (props) => <h1>{props.nome} coisa feia!</h1>;

export default { BoaTarde, BoaNoite };
