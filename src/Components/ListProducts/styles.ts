import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(100)}px;
  background-color: #EAEAEC;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 8px 0;
`;

export const Div1 = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

`;


export const Div2 = styled.View`
  margin-bottom: 10px;
`;

export const ProductDetail = styled.View`
`;

export const ProductNameDetail = styled.View`
  width: ${RFValue(150)}px;
`;

export const ProductTitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;

`;

export const ProductData = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${RFValue(12)}px;
  font-weight: bold;
`;

export const ProductCodeDetail = styled.View`

`;

export const CodeTitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const CodeData = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${RFValue(14)}px;

`;


export const ProductDataValDetail = styled.View`
  width: ${RFValue(100)}px;

`;

export const DataValTitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray800};

  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const DataValData = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${RFValue(14)}px;
`;

