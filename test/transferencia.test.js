
const request = require('supertest');
const { expect } = require('chai')

describe('Transferencias', () => {
    describe('POST /transferencias', () => {
        it('Deve retornar sucesso com o código 201 quando o valor da transferencia for igual ou acima que 10 reais', async () => {
            const respostaLogin = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    "username": 'julio.lima',
                    "senha": '123456'
                })

            const token = respostaLogin.body.token
            
            
            const resposta = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 11,
                    token: "" 
                })

                expect(resposta.status).to.equal(201);

            
        })

        it('Deve retornar falha com o código 422 quando o valor da transferencia for abaixo que 10 reais', async () => {
            const respostaLogin = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    "username": 'julio.lima',
                    "senha": '123456'
                })

            const token = respostaLogin.body.token
            
            
            const resposta = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 9,
                    token: "" 
                })

                expect(resposta.status).to.equal(422);
        })
    })
})