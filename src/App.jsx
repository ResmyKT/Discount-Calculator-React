

import React, { useCallback, useState } from 'react';
import './bootstrap.min.css';
import './App.css'


function App() {

  
  
  const [formData, setFormData] = useState({
    originalPrice: 0,
    discountPercentage: 0,
  });
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [savedAmount, setSavedAmount] = useState(0);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: parseFloat(e.target.value),
    });
  };

  const calculateDiscount = (e) => {
    e.preventDefault();
    const discountAmount = (formData.originalPrice * formData.discountPercentage) / 100;
    setDiscountedPrice(formData.originalPrice - discountAmount);
    setSavedAmount(discountAmount);
    setFormData({
      originalPrice: 0,
      discountPercentage: 0,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2>Discount Calculator</h2>
          <form onSubmit={calculateDiscount}>
            <div className="form-group">
              <label>Original Price:</label>
              <input
                type="number"
                className="form-control"
                name="originalPrice"
                value={formData.originalPrice}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Discount Percentage:</label>
              <input
                type="number"
                className="form-control"
                name="discountPercentage"
                value={formData.discountPercentage}
                onChange={handleInputChange}
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Calculate Discount
            </button>
          </form>
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>Discount Details</h5>
              <p>
                Discounted Price: &#x20B9;{discountedPrice.toFixed(2)}
              </p>
              <p>
                Saved Amount: &#x20B9;{savedAmount.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
