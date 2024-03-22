import { Request, Response } from 'express';
import { Produto } from '../models/Produto';
import { Cliente } from '../models/Cliente';
import { Pedido } from '../models/Pedido';
import { Op } from 'sequelize';


export function listarClientes(arg0: string, listarClientes: any) {
    throw new Error('Function not implemented.');
}

export const getClienteById = async(req: Request, res: Response) => {
    try{
        const clienteId = parseInt(req.params.id, 10);
        const cliente = await Cliente.findByPk(clienteId);

        if(cliente) {
            res.json(cliente);
        }else{
            res.status(404).json({message: 'Cliente não encontrado'})
        }
    } catch(error) {
        console.error('Erro ao buscar cliente',error);
        res.status(500).json({message: 'Erro ao buscar cliente'});
    }
};

export function incluirCliente(arg0: string, incluirCliente: any) {
    throw new Error('Function not implemented.');
}

export function atualizarCliente(arg0: string, atualizarCliente: any) {
    throw new Error('Function not implemented.');
}

export function excluirCliente(arg0: string, excluirCliente: any) {
    throw new Error('Function not implemented.');
}
