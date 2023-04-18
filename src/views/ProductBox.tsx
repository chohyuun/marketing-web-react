import styled from 'styled-components'
import { ProductDataType } from '../type/productData'
import { Dispatch, SetStateAction } from 'react'
import { ContextData } from './Home'

interface ProductImageProps {
  value: ProductDataType
  setClickData: Dispatch<SetStateAction<ContextData | undefined>>
}

const ProductBox = ({ value, setClickData }: ProductImageProps) => {
  return (
    <ImageArea
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
    </ImageArea>
  )
}

const ImageArea = styled.div`
  display: inline-block;
  justify-content: flex-end;
  margin: 10px;
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
`

const ContentImage = styled.img`
  max-width: 250px;
  max-height: 250px;
  margin-bottom: 5px;
`
export default ProductBox
