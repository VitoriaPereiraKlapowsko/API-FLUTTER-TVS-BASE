import { Request, Response } from 'express';
import { Produto } from '../models/Produto';
import { Pedido } from '../models/Pedido';
import { ItemDoPedido } from '../models/ItemDoPedido';



export function listarItensDoPedido(arg0: string, listarItensDoPedido: any) {
    throw new Error('Function not implemented.');
}

export const getItemDoPedidoById = async (req: Request, res: Response) => {
    try {
        const itemId = parseInt(req.params.id, 10); 
        const itemDoPedido = await ItemDoPedido.findByPk(itemId);

        if (itemDoPedido) {
            res.json(itemDoPedido);
        } else {
            res.status(404).json({ message: 'Item do pedido não encontrado' });
        }
    } catch (error) {
        console.error('Erro ao buscar item do pedido', error);
        res.status(500).json({ message: 'Erro ao buscar item do pedido' });
    }
};

export function incluirItemDoPedido(arg0: string, incluirItemDoPedido: any) {
    throw new Error('Function not implemented.');
}

export function atualizarItemDoPedido(arg0: string, atualizarItemDoPedido: any) {
    throw new Error('Function not implemented.');
}

export function excluirItemDoPedido(arg0: string, excluirItemDoPedido: any) {
    throw new Error('Function not implemented.');
}
