import React, { useState } from 'react';

const App = () => {
  const [merchantTransactionId, setMerchantTransactionId] = useState('');
  const [merchantUserId, setMerchantUserId] = useState('');
  const [amount, setAmount] = useState('');
  const [merchantOrderId, setMerchantOrderId] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [shortName, setShortName] = useState('');
  const [iframeSrc, setIframeSrc] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('merchantTransactionId', merchantTransactionId);
    formData.append('merchantUserId', merchantUserId);
    formData.append('amount', amount);
    formData.append('merchantOrderId', merchantOrderId);
    formData.append('mobileNumber', mobileNumber);
    formData.append('message', message);
    formData.append('email', email);
    formData.append('shortName', shortName);

    try {
      const response = await fetch('https://cyberspacedigital.in/(apis)/phonepe.php', {
        method: 'POST',
        body: formData,
        mode: 'cors',
      });
      const data = await response.json();
      console.log('Response:', data); // Log the response for debugging

      if (data.iframeUrl) {
        setIframeSrc(data.iframeUrl);
      } else {
        console.error('Error:', data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='mt-20'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Merchant Transaction ID"
          value={merchantTransactionId}
          onChange={(e) => setMerchantTransactionId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Merchant User ID"
          value={merchantUserId}
          onChange={(e) => setMerchantUserId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Amount (in paisa)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Merchant Order ID"
          value={merchantOrderId}
          onChange={(e) => setMerchantOrderId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Short Name"
          value={shortName}
          onChange={(e) => setShortName(e.target.value)}
        />
        <button type="submit">Pay</button>
      </form>
      {iframeSrc && <iframe src={iframeSrc} style={{ width: '100%', height: '600px', border: 'none' }} />}
    </div>
  );
};

export default App;
