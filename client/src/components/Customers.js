import React, { useState, useEffect } from "react";

const Customers = () => {
  const [ customers, setCustomers ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/customers");
      const data = await response.json();
      console.log(data);
      setCustomers(data);
    }
    
    fetchData();
  }, [])
  
  return (
    <ul>
      {customers.map(customer => {
        return (
          <li key={customer.id}>
            {customer.firstName + " " + customer.lastName}
          </li>
        )
      })}
    </ul>
  )
}

export default Customers;