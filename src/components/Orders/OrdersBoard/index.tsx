import { Board, OrdersContainer } from './styles';

export default function OrdersBoard() {
  return (
    <>
      <Board>
        <header>
          <span>🕝</span>
          <strong>Fila de espera</strong>
          <span>(1)</span>
        </header>
        <OrdersContainer>
          <button type="button">
            <strong>Mesa 1</strong>
            <strong>2 itens</strong>
          </button>
          <button type="button">
            <strong>Mesa 2</strong>
            <strong>2 itens</strong>
          </button>
          <button type="button">
            <strong>Mesa 3</strong>
            <strong>2 itens</strong>
          </button>
        </OrdersContainer>
      </Board>

      <Board>
        <header>
          <span>🕝</span>
          <strong>Fila de espera</strong>
          <span>(1)</span>
        </header>
        <OrdersContainer>
          <button type="button">
            <strong>Mesa 1</strong>
            <strong>2 itens</strong>
          </button>
          <button type="button">
            <strong>Mesa 2</strong>
            <strong>2 itens</strong>
          </button>
          <button type="button">
            <strong>Mesa 3</strong>
            <strong>2 itens</strong>
          </button>
        </OrdersContainer>
      </Board>

      <Board>
        <header>
          <span>🕝</span>
          <strong>Fila de espera</strong>
          <span>(1)</span>
        </header>
        <OrdersContainer>
          <button type="button">
            <strong>Mesa 1</strong>
            <strong>2 itens</strong>
          </button>
          <button type="button">
            <strong>Mesa 2</strong>
            <strong>2 itens</strong>
          </button>
          <button type="button">
            <strong>Mesa 3</strong>
            <strong>2 itens</strong>
          </button>
        </OrdersContainer>
      </Board>
    </>
  );
}

