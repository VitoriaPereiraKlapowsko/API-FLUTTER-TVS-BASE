const request = require('supertest');
import * as server from '../server'; 
const app = server.server; 
import {Request, Response} from 'express';

describe('Teste da rota getItemDoPedidoById', () => {
    it('deve retornar o item do pedido correto quando o ID é válido', async () => {
        const itemId = 1;

        const response = await request(app).get(`/itensDoPedido/${itemId}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id', itemId); 
    });

    it('deve retornar um status 404 quando o ID do item do pedido não existe', async () => {
        const itemId = 9999;

        const response = await request(app).get(`/itensDoPedido/${itemId}`);

        expect(response.status).toBe(404); 
        expect(response.body).toHaveProperty('message', 'item do pedido não encontrado'); 
    });
});
