import request from 'supertest'; 
import { expect } from 'chai';
import 'dotenv/config';
import { obterToken } from '../helpers/autenticacao.js';

const postTransferencias = {
    "contaOrigem": 1,
    "contaDestino": 2,
    "valor": 11,
    "token": ""
};

describe('Transferências', () => {
    let token;
    
    before(async () => {
        token = await obterToken('julio.lima', '123456');
    });

    describe('POST /transferencias', () => {
        it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de R$ 10,00', async () => {
            const bodyTransferencia = { ...postTransferencias};
           
            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .send(bodyTransferencia);
            
            expect(resposta.status).to.equal(201);
        });

        it('Deve retornar falha com 422 quando o valor da transferencia for abaixo de R$ 10,00', async () => {
            const bodyTransferencia = { ...postTransferencias};
            bodyTransferencia.valor = 7;
            
            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .send(bodyTransferencia);
            
            expect(resposta.status).to.equal(422);
        });
    });

    describe('GET /transferencias/{id}', () => {
        it('Deve retornar sucesso com 200 e dados iguais ao registro de transferencia contido no banco de dados quando o id for valido', async () => {
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias/23') 
                .set('Authorization', 'Bearer ' + token);
            
            console.log(resposta.body);
            console.log(resposta.status);
            expect(resposta.status).to.equal(200);//validar valor 200
            expect(resposta.body.id).to.equal(23);//validar igualdade do valor
            expect(resposta.body.id).to.be.a('number');//validar tipo do dado
            expect(resposta.body.conta_origem_id).to.equal(1);//validar igualdade do valor
            expect(resposta.body.conta_destino_id).to.equal(2);//validar igualdade do valor
            expect(resposta.body.valor).to.equal(11.00);//Validar igualdade do valor - encontrado BUG pq no swagger esta number, mais foi config string 
        });
    });

    describe('GET /transferencias', () => {
        it('Deve retornar 10 elementos na paginação quando informar limite de 10 registros', async () => {
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias?page=1&limit=10')
                .set('Authorization', 'Bearer ' + token);

            expect(resposta.status).to.equal(200);
            expect(resposta.body.limit).to.equal(10);
            expect(resposta.body.transferencias).to.have.lengthOf(10);
        })
    });            
});