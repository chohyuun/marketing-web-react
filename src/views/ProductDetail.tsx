import { Button, Col, Container, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { NumberFormatter } from '../utils/NumberFormatter'

const ProductDetail = () => {
  const location = useLocation()

  const {
    url: productUrl,
    title: productTitle,
    price: productPrice,
    discount: productDiscount,
  } = location.state.value

  return (
    <>
      <Container fluid>
        <Row xs={1} className="justify-content-center">
          <Col xs={6}>
            <Row>
              <Col>
                <ProductImage src={productUrl} />
              </Col>
            </Row>
            <Row className="justify-start">
              <Col>
                <ProductInfo isDiscount={!!productDiscount}>
                  <p className="title">{productTitle}</p>
                  <div>
                    가격: <p className="price">{NumberFormatter(productPrice)} 원</p>
                    <p className="discount">
                      {!!productDiscount &&
                        NumberFormatter(productPrice * (1 - productDiscount / 100))}{' '}
                      원
                    </p>
                  </div>
                </ProductInfo>
              </Col>
            </Row>
            <ButtonRow>
              <Col>
                <Button variant="outline-info" size="sm">
                  상품 구매하기
                </Button>
              </Col>
              <Col>
                <Button variant="outline-secondary" size="sm">
                  장바구니 추가
                </Button>
              </Col>
            </ButtonRow>
          </Col>
        </Row>
      </Container>
    </>
  )
}

const ProductImage = styled.img`
  width: 100%;
`

const ProductInfo = styled.div<{ isDiscount: boolean }>`
  width: 100%;
  justify-content: start;
  line-height: 2em;
  text-align: start;
  
  div {
    display: flex;
    & .price {
      padding-left: 5px;
      ${({ isDiscount }) =>
        isDiscount &&
        css`
          text-decoration: #888888 line-through;
          color: #888888;
        `}}
    }
  
  & .discount {
    padding-left: 5px;
    ${({ isDiscount }) =>
      isDiscount &&
      css`
        font-weight: 500;
        color: #313131;
      `}}
  }
`

const ButtonRow = styled(Row)`
  justify-content: end;
`

export default ProductDetail
