import React, { useEffect, useState } from 'react'
import Service from '../Service/Service'
import '../Services/Services.css'

const Services = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/Accessories')
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, [services])

  const handleDeleteService = (id) => {
    const proceed = window.confirm('Are you sure, you want to delete?')
    if (proceed) {
      fetch(`http://localhost:5000/Accessories/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert('deleted successfully')
            const remainingServices = services.filter(
              (service) => service._id !== id,
            )
            setServices(remainingServices)
          }
        })
    }
  }

  return (
    <>
    <h3>Available Products</h3>
    <div className="services">
      
      {services.map((service) => (
        <Service
          realService={service}
          handleDeleteService={handleDeleteService}
        ></Service>
        
      ))}
      </div>
      
      </>
    
    
  )
}

export default Services
