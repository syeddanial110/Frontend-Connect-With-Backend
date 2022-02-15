import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, ListGroup, Row } from 'react-bootstrap'
import "../componentStyle/apiFetch.css"

const ApiFetch = () => {

  const [products, setProducts] = useState([])
  const filterdProducts = (category) => {
    setProducts(products.filter((product) => product.category === category))
    console.log(products.filter((product) => product.category === category), "category");
  //   for (let x = 0; x < setProducts.length; x++) {
  //     return setProducts[x].language == [];
  // }
  }
  useEffect(async () => {
    try {

      const res = await axios.get("http://localhost:5000/api/products")
      console.log(res, "res");
      setProducts(res.data)
    } catch (error) {
      console.log(error);
      alert(error)
    }
  }, [])



  return (
    <div>

      <Row>
        <Col md={{ span: 4, offset: 4 }} className="mt-4" >
          <ListGroup horizontal className='featuredProductUl '>
            <ListGroup.Item variant='success' action className='featuredProductLi' onClick={() =>  setProducts(products) }>All</ListGroup.Item>
            <ListGroup.Item variant='success' action className='featuredProductLi' onClick={() => { filterdProducts("meat") }}>Meat</ListGroup.Item>
            <ListGroup.Item variant='success' action className='featuredProductLi' onClick={() => filterdProducts("fruit")} >Fruits</ListGroup.Item>
            <ListGroup.Item variant='success' action className='featuredProductLi' onClick={() => { filterdProducts("FastFood") }} >Fast Food</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>


      {
        <Row>
          {
            products && products.length > 0 && products.map((product,index) => {
              return (
                <>

                  <Col md={3} className="g-4 mx-5" key={index}>
                    <Card key={index} style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                          {product.description}
                        </Card.Text>
                        <Card.Text>
                          {product.price}
                        </Card.Text>

                      </Card.Body>
                    </Card>
                  </Col>

                </>
              )
            })
          }
        </Row>
      }
    </div>
  )
}

export default ApiFetch