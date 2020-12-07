import { Category } from '../../categories/shared/category.model';

export class Entry{
    constructor(
        public id? :number,
        public name? :string,
        public description? :string,
        public type ?:string,
        public amount? :string,
        public date? :string,
        public paid? :boolean,
        public categoryId? :number,
        public category? :Category,
        public folder_id? :number,
        ){}
    
    get paidText() :string{
        return this.paid ? 'Pago' :'Pendente'
    
    }    
    
    static Types = {
    expense : "Despesa",
    renevue : "Receita"
    }
}



