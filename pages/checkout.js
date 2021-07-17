import Page from '../components/styled/Page';
import useCart from '../hooks/useCart';
import styled from 'styled-components';
import Button from '../components/styled/Button';

const List = styled.ul`
  padding: 0;
`;

const Item = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
  margin-bottom: 1rem;
`;

const Total = styled.p`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 1.5rem;
`;

// const Button = styled.button`
//   background: linear-gradient(to right, #c9d6ff, #e2e2e2);
//   font-size: 1.2rem;
//   color: inherit;
//   outline: none;
//   border: none;
//   width: 100%;
//   padding: 1rem;
//   text-transform: uppercase;
//   font-weight: bold;

//   &:hover {
//     cursor: pointer;
//   }
// `;

const Checkout = () => {
  const { cart, total } = useCart();

  const processPayment = () => {
    console.log('process payment');
  };

  return (
    <Page>
      <h2>Checkout</h2>
      {cart.length > 0 ? (
        <>
          <List>
            {cart.map((item) => {
              return (
                <Item key={item.id}>
                  <span>
                    {item.qty}x {item.name}
                  </span>
                  <span>${item.price / 100}</span>
                </Item>
              );
            })}
          </List>
          <Total>
            <span>Total</span>
            <span>${total / 100}</span>
          </Total>
          <Button onclick={processPayment}>Process Payment</Button>
        </>
      ) : (
        <p>You do not appear to have any items in your cart!</p>
      )}
    </Page>
  );
};

export default Checkout;
