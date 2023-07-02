import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

 
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('/login', { username, password });
  
      if (response.status === 200) {
        const data = response.data;
  
        if (data.success) {
          if (data.role === 'admin') {
            // Redirect to the admin dashboard
            history.push('/Adminpanel');
          } else if (data.role === 'user') {
            // Redirect to the user panel
            history.push('/');
          } else {
            // Handle unknown role
            // Redirect to the home page or display an error message
            history.push('/');
          }
        } else {
          // Handle authentication failure
          // Redirect to the home page or display an error message
          history.push('/');
        }
      } else {
        // Handle non-successful response (e.g., 4xx or 5xx status code)
        // Redirect to the home page or display an error message
        history.push('/');
      }
    } catch (error) {

      
      // Handle any errors that occurred during the request
      console.error(error);
    }
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={username}
            onChange={handleUsernameChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
