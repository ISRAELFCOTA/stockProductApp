import React from 'react';
import {IProductVal} from '../../model/product';
import {
  CodeData,
  CodeTitle,
  Container,
  DataValData,
  DataValTitle,
  Div1,
  Div2,
  FilterProducts,
  ProductCodeDetail,
  ProductData,
  ProductDataValDetail,
  ProductDetail,
  ProductNameDetail,
  ProductTitle,
} from './styles';

interface ProductProps {
  data: IProductVal;
  onPress: () => void;
}

export const ListProducts: React.FunctionComponent<ProductProps> = ({
  data,
  onPress,
}) => {
  const dataValDate = new Date(data.dateVal);

  const formattedDate = dataValDate.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
  return (
    <Container onPress={onPress}>

      <ProductDetail>
        <Div1>
          <ProductNameDetail>
            <ProductTitle>PRODUTO</ProductTitle>
            <ProductData>{data.name}</ProductData>
          </ProductNameDetail>
          <ProductDataValDetail>
            <DataValTitle>DATA DE VALIDADE</DataValTitle>
            <DataValData>{formattedDate}</DataValData>
          </ProductDataValDetail>
        </Div1>
        <Div2>
          <ProductCodeDetail>
            <CodeTitle>CÓDIGO</CodeTitle>
            <CodeData>{data.code}</CodeData>
          </ProductCodeDetail>
        </Div2>
      </ProductDetail>
    </Container>
  );
};
