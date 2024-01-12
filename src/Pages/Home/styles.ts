import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

import Ionicons from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Header = styled.View`
  margin: 0 ${RFValue(16)}px;
  height: ${RFPercentage(25)}px;
`;

export const HeaderUser = styled.View`
  margin-top: ${RFValue(20)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextWelcome = styled.Text`
  color: ${({theme}) => theme.colors.gray500};
  font-size: ${RFValue(12)}px;
  font-weight: bold;
`;

export const NameUser = styled.Text`
  color: ${({theme}) => theme.colors.gray500};
  font-size: ${RFValue(14)}px;
  font-weight: bold;
  margin-left: ${RFValue(16)}px;
`;

export const NotificationIcon = styled(Ionicons)`
  font-size: 40px;
  margin-right: ${RFValue(20)}px;
  color: #fff;
`;

export const WrapUserAndCadaster = styled.View`
 flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Cadaster = styled.View``;

export const CadasterButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${RFValue(45)}px;
  height: ${RFValue(45)}px;
  border-radius: ${RFValue(23)}px;
  margin-top: ${RFValue(20)}px;
  background-color: ${({theme}) => theme.colors.light};
  margin-right: ${RFValue(16)}px;
`;

export const Context = styled.View`
  flex: 1;
  background-color: #F4F4F5;
  border-top-right-radius: ${RFValue(30)}px;
  border-top-left-radius: ${RFValue(30)}px;

`;
