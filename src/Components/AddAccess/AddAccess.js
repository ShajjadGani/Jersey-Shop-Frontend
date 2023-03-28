import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddAccesories = () => {
  const nameRef = useRef()
  const priceRef = useRef()
  const sizeRef = useRef()
  const imgRef = useRef()

  const handleAddAccesories = (e) => {
    const name = nameRef.current.value
    const price = priceRef.current.value
    const size = sizeRef.current.value
    const img = imgRef.current.value

    const newService = { name, price, size, img }

    fetch('http://localhost:5000/Accessories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Data is Successfully added in database')
        }
      })

    e.preventDefault()
  }

  return (
    <>
    <div class="body">
      <div class="b1">
        <img src="https://i2-prod.mirror.co.uk/incoming/article11205729.ece/ALTERNATES/n615/CR7-series-Chapter-5-Cut-To-Brilliance.jpg" alt="Shovon"></img>
      </div>
      <div class="b2">
        <h3>Add Accesories</h3>
      <Form onSubmit={handleAddAccesories}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><b>Enter Accesories Type</b></Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Enter Accesories Type"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><b>Enter Accesories Price</b></Form.Label>
          <Form.Control
            ref={priceRef}
            type="text"
            placeholder="Enter Accesories Price"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><b>Enter Available Accesories size</b></Form.Label>
          <Form.Control
            ref={sizeRef}
            type="text"
            placeholder="Enter Accesories size"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><b>Enter Accesories Image Link</b></Form.Label>
          <Form.Control
            ref={imgRef}
            type="text"
            placeholder="Enter Accesories Image Link"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    </div>
    </>
  )
}

export default AddAccesories
