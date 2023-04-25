import styled, { css } from 'styled-components'
import { ProductDataType } from '../type/productData'
import { Dispatch, SetStateAction } from 'react'
import { NumberFormatter } from '../utils/NumberFormatter'
import { Col, Row } from 'react-bootstrap'

interface ProductImageProps {
  value: ProductDataType
  setClickData: Dispatch<SetStateAction<ProductDataType>>
}

const ProductBox = ({ value, setClickData }: ProductImageProps) => {
  const onClickHandler = () => {
    setClickData((prevState) => {
      return {
        ...prevState,
        url: value.url,
        title: value.title,
        price: value.price,
        discount: value.discount ?? undefined,
      }
    })
  }

  return (
    <Col lg={3} md={4}>
      <ImageArea discount={!!value.discount} onClick={onClickHandler}>
        <ContentImage title={value.title} src={value.url} />
        <div>
          <p className="product-title">{value.title}</p>
        </div>
        <div className="product-price">
          가격: <p className="before-discount">{NumberFormatter(value.price) + ' 원'}</p>
          <p>
            {value.discount
              ? NumberFormatter(value.price * (1 - value.discount / 100)) + ' 원'
              : NumberFormatter(value.price) + ' 원'}
          </p>
        </div>
      </ImageArea>
    </Col>
  )
}

const ImageArea = styled.div<{ discount: boolean }>`
  display: inline-block;
  justify-content: flex-end;
  margin-bottom: 30px;
  position: relative;
  max-width: 100%;
  //max-height: 200px;
  font-weight: 600;

  div {
    display: flex;
    align-items: end;
    text-align: start;
    position: absolute;
    width: 100%;
    height: 50px;
    padding-top: 100%;
    top: 0;
    background: unset;
    color: #ffffff;

    & .product-title {
      width: 100%;
      font-size: 14px;
      padding: 5px 10px;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
    }
  }

  & .product-price {
    display: flex;
    justify-content: end;
    height: 100%;
    padding: 0;
    top: 20px;
    font-size: 12px;
    color: #313131;

    & .before-discount {
      ${({ discount }) =>
        discount
          ? css`
              text-decoration: #888888 line-through;
              color: #888888;
            `
          : css`
              display: none;
            `}
    }

    p {
      padding-left: 5px;
    }
  }
`

const ContentImage = styled.img`
  max-width: 100%;
  margin-bottom: 5px;
`
export default ProductBox
