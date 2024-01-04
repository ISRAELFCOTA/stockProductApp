import React from 'react';
import {
  Acoes,
  CadasterProducts,
  Container,
  Header,
  Icon,
  IconMenu,
  LogoutButton,
  Menu,
  ProductList,
  ProductsListHeader,
  QuantityRegisteredProdutcs,
  TitleCadasterProcuts,
  TitleTotalProducts,
  TotalProducts,
  UserGreeting,
  UserInfo,
  UserInfoDetail,
  UserListEmpity,
  UserName,
  UserWrapper,
} from './styles';
import {Text} from 'react-native';
import { ListProducts } from '../../Components/ListProducts';
import { api } from '../../services/api';

export const Home: React.FunctionComponent = () => {
  const [products, setProducts] = React.useState([]);
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    const loadUser = async () => {
      const response = await api.get('/users/1b067868-cb15-421e-9e73-27738bce41e8');
      setUser(response.data.nameUser);
    };
    loadUser();
  }, []);

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
        <UserWrapper>
          <UserInfo>
            <Menu onPress={() => {}}>
              <IconMenu name="menu" />
            </Menu>

            <UserInfoDetail>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>{user}</UserName>
            </UserInfoDetail>
          </UserInfo>
          <LogoutButton onPress={() => {}}>
            <IconMenu name="log-out" />
          </LogoutButton>
        </UserWrapper>
      </Header>
      <Acoes>
        <TotalProducts activeOpacity={0.7}>
          <Icon name="shopping-cart" />
          <TitleTotalProducts>Produtos Cadastrados</TitleTotalProducts>
          <QuantityRegisteredProdutcs>Quantidade:</QuantityRegisteredProdutcs>
        </TotalProducts>
        <CadasterProducts activeOpacity={0.7}>
          <Icon name="edit-2" />

          <TitleCadasterProcuts>Cadastrar Produtos</TitleCadasterProcuts>
          <Text></Text>
        </CadasterProducts>
      </Acoes>
      <ProductList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ListProducts data={item} onPress={() => {}} />
        )}
        ListHeaderComponent={<ProductsListHeader>Produtos</ProductsListHeader>}
        ListEmptyComponent={
          <UserListEmpity>Ops! Ainda não há registros.</UserListEmpity>
        }
      />
    </Container>
  );
};
