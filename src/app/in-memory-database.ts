import { InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDatabase extends InMemoryDbService{

    createDb(){
        const categories =[
            {id:1, name:"Moradia", description:"Pagamentos de contas da Casa"},
            {id:2, name:"Saúde", description:"Remedios para dor de barriga"},
            {id:3, name:"Lazer", description:"Cervejinha no final de semana"},
            {id:4, name:"Salário", description:"Recebimento do salario"},
            {id:5, name:"freelas", description:"Bicos autonomos"},

        ];


        return {categories};
    }


}