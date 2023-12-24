import styled from 'styled-components/native';

import Feather from 'react-native-vector-icons/Feather';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(17)}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: ${RFValue(28)}px;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Menu = styled.TouchableOpacity``;
export const IconMenu = styled(Feather)`
  font-size: ${RFValue(28)}px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const UserInfoDetail = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: ${RFValue(18)}px;
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: ${RFValue(14)}px;
  font-weight: bold;
`;


export const LogoutButton = styled.TouchableOpacity``;

export const Acoes = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const TotalProducts = styled.TouchableOpacity`
  padding: ${RFValue(10)}px;
  background-color: ${({theme}) => theme.colors.primary};
  margin: 5px;
  border-radius: 15px;
`;

export const CadasterProducts = styled.TouchableOpacity`
  padding: ${RFValue(10)}px;
  background-color: ${({theme}) => theme.colors.secondary};
  margin: 5px;
  border-radius: 15px;
`;

export const TitleTotalProducts = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
`;

export const TitleCadasterProcuts = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: bold;

`;

export const QuantityRegisteredProdutcs = styled.Text`
  font-size: ${RFValue(14)}px;

`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(50)}px;
  margin-left: 20px;
`;
