import styled from 'styled-components'
import { Button, Col, Container, Row } from 'react-bootstrap'
import BooriCat from '../assets/image/cat3.jpeg'
import { useMemo, useState } from 'react'
import { productData, ProductDataType } from '../type/productData'
import ProductBox from './ProductBox'
import { useUpdateEffect } from 'react-use'
import { useNavigate } from 'react-router-dom'

const initialProductData: ProductDataType = {
  url: '',
  title: '',
  price: 0,
  discount: undefined,
}

const Home = () => {
  const [clickData, setClickData] = useState<ProductDataType>(initialProductData)
  const navigate = useNavigate()

  const onClickHandler = (e: any) => {
    setClickData((prevState) => {
      return {
        ...prevState,
        url: e.target.src,
        title: e.target.title,
        price: e.target.price,
        discount: e.target.discount ?? undefined,
      }
    })
  }

  const clickNotUndefined = useMemo(() => {
    return clickData.url !== '' && clickData.title !== ''
  }, [clickData])

  useUpdateEffect(() => {
    if (clickNotUndefined) {
      navigate(`/product/${clickData?.title}`, { state: { value: clickData } })
    }
  }, [clickData])

  // todo home image changes to swipe image
  // todo SwipeImage change
  return (
    <>
      <Container fluid>
        <Row xs={1}>
          <Col>
            <HomeRow>
              <HomeCol xs={12}>
                <SwipeImage title="정말싸다 뽀리 사진!!" src={BooriCat} onClick={onClickHandler} />
              </HomeCol>
            </HomeRow>
            <HomeRow>
              <HomeCol>
                <div className="subtitle">
                  이달의 아이템
                  <p>돈 많이 벌어서 고양이 까까 사주고 싶다.</p>
                </div>
              </HomeCol>
            </HomeRow>
            <HomeRow>
              {productData.map((value, index) => {
                return <ProductBox key={index} value={value} setClickData={setClickData} />
              })}
            </HomeRow>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home

const HomeCol = styled(Col)`
  justify-content: center;

  & .subtitle {
    padding: 20px;
    border-bottom: 1px #888888 solid;
    border-top: 1px #888888 solid;

    p {
      color: #888888;
      font-size: 12px;
    }
  }
`

const HomeRow = styled(Row)`
  padding: 10px;

  &:last-child {
    border: unset;
  }
`

const SwipeImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  vertical-align: middle;
`
