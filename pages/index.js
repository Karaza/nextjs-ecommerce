import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';
import styled from 'styled-components';
import UnstyledLink from '../components/styled/UnstyledLink';
import useCart from '../hooks/useCart';

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
  margin: 1rem 0;
`;

const Container = styled.div`
  background: white;
  padding: 1rem 2rem;
  min-height: 200px;
  position: relative;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }
`;

const Price = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 1rem;
  font-size: 2.5rem;
`;

const renderProduct = (product, addItemToCart) => {
  const handleClick = (e) => {
    e.stopPropagation(); // because product card is a link to the product page
    addItemToCart(product);
  };

  return (
    <Link key={product.id} href={product.slug}>
      <UnstyledLink>
        <Container key={product.name}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <button onClick={handleClick}>Add to Cart</button>
          <Price>${product.price / 100}</Price>
        </Container>
      </UnstyledLink>
    </Link>
  );
};

const HomePage = (props) => {
  const { cart, addItemToCart } = useCart();

  return (
    <ProductsContainer>
      {props.products.map((product) => renderProduct(product, addItemToCart))}
    </ProductsContainer>
  );
};

export const getStaticProps = async () => {
  const directory = `${process.cwd()}/content`;
  const filenames = fs.readdirSync(directory);

  const products = filenames.map((filename) => {
    // read the file from fs
    const fileContent = fs.readFileSync(`${directory}/${filename}`).toString();
    // pull out frontmatter => name
    const { data } = matter(fileContent);
    // return name, slug
    const slug = `/products/${filename.replace('.md', '')}`;
    const product = {
      ...data,
      slug,
    };
    return product;
  });

  return {
    props: {
      products,
    },
  };
};

export default HomePage;
