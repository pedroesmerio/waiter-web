import { OrderProps } from '../../../types/OrderProps';
import { Board, OrdersContainer } from './styles';

interface OrdersBoardsProps {
  icon: string;
  title: string;
  orders: OrderProps[];
}

export default function OrdersBoard({
  icon,
  title,
  orders,
}: OrdersBoardsProps) {
  return (
    <>
      <Board>
        <header>
          <span>{icon}</span>
          <strong>{title}</strong>
          <span>{`( ${orders.length} )`}</span>
        </header>
        {orders.length ? (
          <OrdersContainer>
            {orders.map((orders) => (
              <button type="button" key={orders._id}>
                <strong>Mesa: {orders.table}</strong>
                <strong>{orders.products.length} itens</strong>
              </button>
            ))}
          </OrdersContainer>
        ) : (
          <OrdersContainer>
            <h3>nenhum</h3>
          </OrdersContainer>
        )}
      </Board>
    </>
  );
}

