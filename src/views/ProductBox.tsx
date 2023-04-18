import styled, { css } from 'styled-components'
import { ProductDataType } from '../type/productData'
import { Dispatch, SetStateAction } from 'react'
import { ContextData } from './Home'
import { NumberFormatter } from '../utils/NumberFormatter'

interface ProductImageProps {
  value: ProductDataType
  setClickData: Dispatch<SetStateAction<ContextData | undefined>>
}

const ProductBox = ({ value, setClickData }: ProductImageProps) => {
  return (
    <ImageArea
      discount={!!value.discount}
      onClick={() =>
        setClickData({
          url: value.url,
          title: value.title,
        })
      }
    >
      <ContentImage title={value.title} src={value.url} />
      <div>
        <p className="product-title">{value.title}</p>
      </div>
      <div className="product-price">
        가격: <p className="before-discount">{NumberFormatter(value.price)}</p>
        <p>
          {value.discount
            ? NumberFormatter(value.price * (1 - value.discount / 100))
            : NumberFormatter(value.price)}
        </p>
      </div>
    </ImageArea>
  )
}

const ImageArea = styled.div<{ discount: boolean }>`
  display: inline-block;
  justify-content: flex-end;
  margin: 10px 10px 20px;
  position: relative;
  max-width: 250px;
  max-height: 250px;
  font-weight: 600;

  div {
    display: flex;
    align-items: end;
    text-align: start;
    position: absolute;
    width: 250px;
    height: 50px;
    padding-top: 200px;
    top: 0;
    background: unset;
    color: #ffffff;

    & .product-title {
      width: 100%;
      font-size: 14px;
      padding: 5px 10px;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    }
  }

  & .product-price {
    display: flex;
    justify-content: end;
    height: 250px;
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
  max-width: 250px;
  max-height: 250px;
  margin-bottom: 5px;
`
export default ProductBox
