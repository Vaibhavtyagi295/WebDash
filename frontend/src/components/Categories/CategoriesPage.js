import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./CategoriesPage.css"

class CategoryPage extends React.Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = () => {
    axios
      .get('/category')
      .then((response) => {
        this.setState({ categories: response.data });
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  };

  render() {
    const { categories } = this.state;

    return (
      <div className="categories-page">
        <h2 className="page-title">Categories:</h2>
        <div className="category-cards">
          {categories.map((category) => (
            <div className="category-card" key={category._id}>
              <Link to={`/category/${category._id}/subcategories`} className="category-link">
                <div className="category-image">
                  <img src={`/images/${category.image}`} alt={category.name} />
                  <div className="category-name">
                    {category.name}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CategoryPage;
