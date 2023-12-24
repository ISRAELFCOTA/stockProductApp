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
  QuantityRegisteredProdutcs,
  TitleCadasterProcuts,
  TitleTotalProducts,
  TotalProducts,
  UserGreeting,
  UserInfo,
  UserInfoDetail,
  UserName,
  UserWrapper,
} from './styles';
import {Text} from 'react-native';

export const Home: React.FunctionComponent = () => {
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
              <UserName>NOME</UserName>
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
    </Container>
  );
};
