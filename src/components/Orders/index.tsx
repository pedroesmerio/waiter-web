import { useEffect, useState } from 'react';
import { OrderProps } from '../../types/OrderProps';
import OrdersBoard from './OrdersBoard';
import { Container } from './styles';

// const orders: OrderProps[] = [
//   {
//     _id: '637798551cb1ecbfd157862f',
//     table: '123',
//     status: 'WAITING',
//     products: [
//       {
//         product: {
//           _id: '63759e64b31f78aa795fa621',
//           name: 'Coca Cola',
//           imagePath: '1668652644369-coca-cola.png',
//           price: 40,
//         },
//         quantity: 2,
//         _id: '637798551cb1ecbfd1578630',
//       },
//     ],
//   },
// ];

export function Orders() {
  const [orders, setOrders] = useState<OrderProps[]>([]);
  console.log(orders);

  useEffect(() => {
    const data = async () => {
      await fetch('http://localhost:3333/orders');
    };
    setOrders(data);
  }, []);

  return (
    <Container>
      <OrdersBoard icon="🕝" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="⏳" title="Em preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </Container>
  );
}

