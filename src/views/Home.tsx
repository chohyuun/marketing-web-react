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
              <HomeCol>
                <SwipeImage title="정말싸다 뽀리 사진!!" src={BooriCat} onClick={onClickHandler} />
              </HomeCol>
            </HomeRow>
            <HomeRow>
              <HomeCol>
                <div className="description">
                  이달의 아이템
                  <p>돈 많이 벌어서 고양이 까까 사주고 싶다.</p>
                </div>
              </HomeCol>
            </HomeRow>
            <Row>
              {productData.map((value, index) => {
                return <ProductBox key={index} value={value} setClickData={setClickData} />
              })}
            </Row>
            <HomeRow>
              <HomeCol>
                <Button variant="outline-info">Contact</Button>
              </HomeCol>
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

  & .description {
    margin: 10px 0;

    p {
      color: #888888;
      font-size: 12px;
    }
  }
`

const HomeRow = styled(Row)`
  border-bottom: 1px #888888 solid;

  &:last-child {
    border: unset;
  }
`

const SwipeImage = styled.img`
  width: 500px;
  height: 450px;
  object-fit: cover;
  border-radius: 5px;
  object-position: 25% 75%;
`
