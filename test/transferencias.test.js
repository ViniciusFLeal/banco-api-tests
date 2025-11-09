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
    describe('POST /transferencias', () => {
        let token;
        
        beforeEach(async () => {
            token = await obterToken('julio.lima', '123456');
        });

        it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de R$ 10,00', async () => {
           const bodyTransferencia = { ...postTransferencias}
           
            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .send(bodyTransferencia);
            
            expect(resposta.status).to.equal(201);
            
            
        })

         it('Deve retornar falha com 422 quando o valor da transferencia for abaixo de R$ 10,00', async () => {
            const bodyTransferencia = { ...postTransferencias}
            bodyTransferencia.valor = 7;
            
            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .send(bodyTransferencia);
            
            expect(resposta.status).to.equal(422);
         });

    });

})