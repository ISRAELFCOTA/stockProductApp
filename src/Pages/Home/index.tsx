import React from 'react';
import {
  Cadaster,
  CadasterButton,
  Container,
  Context,
  Header,
  HeaderUser,
  NameUser,
  TextWelcome,
  WrapUserAndCadaster,
} from './styles';
import {api} from '../../services/api';
import {ListProducts} from '../../Components/ListProducts';
import {ProductList, ProductsListHeader, UserListEmpity} from './styles copy';
import {FilterProducts} from '../../Components/FilterProducts';
import { Icon } from '../../Components/Icon';
import theme from '../../global/styles/theme';

export const Home: React.FunctionComponent = () => {
  const [products, setProducts] = React.useState([]);
  const icon = 40;
  React.useEffect(() => {
    const loadProducts = async () => {
      const response = await api.get('/products');
      setProducts(response.data);
    };
    loadProducts();
  }, []);

  return (
    <Container>
      <Header>
        <HeaderUser>
          <TextWelcome>Seja Bem-Vindo, </TextWelcome>

        </HeaderUser>
        <WrapUserAndCadaster>
          <NameUser>ISRAEL</NameUser>
          <Cadaster>
            <CadasterButton activeOpacity={0.7} />
          </Cadaster>
        </WrapUserAndCadaster>
      </Header>
      <Context>
        <FilterProducts />
        <ProductList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ListProducts data={item} onPress={() => {}} />
          )}
          ListHeaderComponent={
            <ProductsListHeader>Produtos</ProductsListHeader>
          }
          ListEmptyComponent={
            <UserListEmpity>Ops! Ainda não há registros.</UserListEmpity>
          }
        />
      </Context>
    </Container>
  );
};
