import styled from 'styled-components/native';

import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

import Ionicons from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
  height: ${RFPercentage(25)};
`;

export const HeaderUser = styled.View`
  margin-top: ${RFValue(20)}px;
  margin-left: ${RFValue(16)}px;
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

export const Cadaster = styled.View``;

export const CadasterButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  margin-top: ${RFValue(20)}px;
  background-color: ${({theme}) => theme.colors.light};
  margin-left: ${RFValue(16)}px;
  border-radius: 10px;
`;

export const Context = styled.View`
  flex: 1;
  background-color: #F4F4F5;
`;
