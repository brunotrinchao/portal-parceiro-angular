export interface User{
  id: number,
  Nome: string,
  Login: string,
  email: string,
  DataUltimoAcesso: string,
  Bloqueado: boolean,
  LoginAtivo: boolean,
  DataBloqueio: string,
  EhMaster: boolean
}
