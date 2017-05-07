export class Profile{
  startedApp: boolean;
  consume: number;
  kind : 'cosumer' | 'seller' | 'both' | 'public';
  production: number;
  cep: string;
  state: string;
  city: string;
  district: string;
  phone: string;
  site: string;

  constructor(object?: any){
    this.startedApp =  object ? object.startedApp || false : false;
    this.consume =  object ? object.consume : null;
    this.kind =  object ? object.kind : null;
    this.production =  object ? object.production : null;
    this.cep =  object ? object.cep : null;
    this.state =  object ? object.state : null;
    this.city =  object ? object.city : null;
    this.district =  object ? object.district : null;
    this.phone =  object ? object.phone : null;
    this.site =  object ? object.site : null;
  }
}