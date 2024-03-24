import { Request, Response } from 'express';
import { Produto } from '../models/Produto';
import { Cliente } from '../models/Cliente';
import { Pedido } from '../models/Pedido';



export function listarProdutos(arg0: string, listarProdutos: any) {
    throw new Error('Function not implemented.');
}

export const getProdutoById = async (req: Request, res: Response) => {
    try {
        const produtoId = parseInt(req.params.id, 10); 
        const produto = await Produto.findByPk(produtoId);

        if (produto) {
            res.json(produto);
        } else {
            res.status(404).json({ message: 'Produto não encontrado' });
        }
    } catch (error) {
        console.error('Erro ao buscar produto', error);
        res.status(500).json({ message: 'Erro ao buscar produto' });
    }
};

export function incluirProduto(arg0: string, incluirProduto: any) {
    throw new Error('Function not implemented.');
}

export function atualizarProduto(arg0: string, atualizarProduto: any) {
    throw new Error('Function not implemented.');
}

export function excluirProduto(arg0: string, excluirProduto: any) {
    throw new Error('Function not implemented.');
}
