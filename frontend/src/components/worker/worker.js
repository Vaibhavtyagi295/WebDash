import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import Select from 'react-select';
import axios from 'axios';

const WorkerRegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [workDescription, setWorkDescription] = useState('');
  const [categories, setCategories] = useState([]);
const [subcategories, setSubcategories] = useState([]);
const [selectedCategory, setSelectedCategory] = useState(null);

  const [location, setLocation] = useState('');

  useEffect(() => {
    retrieveCategories();
    retrieveLocation();
  }, []);


  
  const retrieveCategories = () => {
    // Make an API call to retrieve the categories
    axios
      .get('/category')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error retrieving categories:', error);
      });
  };
  
  const retrieveSubcategories = (categoryId) => {
    // Make an API call to retrieve the subcategories based on the selected category
    axios
      .get(`/category/${categoryId}/subcategories`)
      .then((response) => {
        setSubcategories(response.data);
      })
      .catch((error) => {
        console.error('Error retrieving subcategories:', error);
      });
  };
  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
    retrieveSubcategories(selectedOption.value);
  };

  const retrieveLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getLocationDetails(latitude, longitude);
        },
        (error) => {
          console.log('Error retrieving location:', error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

  const getLocationDetails = (latitude, longitude) => {
    axios
      .get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=95d4f8fddee14264b9a6801961b4d61a`)
      .then((response) => {
        const { city, state } = response.data.results[0].components;
        const formattedLocation = `${city}, ${state}`;
        setLocation(formattedLocation);
      })
      .catch((error) => {
        console.error('Error retrieving location details:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      username,
      password,
      name,
      number,
      workDescription,
      location,
    };

    axios
      .post('/workerregister', formData)
      .then((response) => {
        console.log(response.data); // Handle the response data
      })
      .catch((error) => {
        console.error('Failed to register worker:', error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="number">
        <Form.Label>Number</Form.Label>
        <Form.Control
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </Form.Group>
    
      <Form.Group controlId="category">
        <Form.Label>Category</Form.Label>
        <Select
          options={categories}
          value={selectedCategory}
          onChange={handleCategoryChange}
        />
      </Form.Group>
      <Form.Group controlId="subcategory">
        <Form.Label>Subcategory</Form.Label>
        <Select options={subcategories} />
      </Form.Group>

      <Form.Group controlId="location">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default WorkerRegisterPage;
