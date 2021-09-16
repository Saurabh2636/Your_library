import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./Update.css";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Update = () => {
  const params = useParams();
  const history = useHistory();
  const [Book, setBook] = useState({
    Book_name: "",
    Author_name: "",
    Publish_date: "",
    Description: "",
  });
  useEffect(() => {
    axios.get("http://localhost:8080/api/books/" + params.id)
    .then((res) => {
      setBook({
        Book_name: res.data.Book_name,
        Author_name: res.data.Author_name,
        Description: res.data.Description,
      });
    });
  }, []);
  
 const onSubmit = e =>{
    e.preventDefault();

    axios.put('http://localhost:8080/api/books/'+params.id,Book)
    .then(res =>{
      history.push('/books')
    }).catch(err=>{
      alert("error")
    })
  }
  
  const onChange = (e) => {
    setBook({ ...Book, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="heading">
        <h1 style={{ color: "white", fontSize: "50px", textAlign: "center" }}>
          Update Book
        </h1>
      </div>
      <Container className="card mt-4 main">
        <form noValidate onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="Book name">Book name</label>
            <input
              type="text"
              placeholder="Title of the Book"
              name="Book_name"
              className="form-control"
              value={Book.Book_name}
              onChange={onChange}
             
              />
          </div>
          <br />

          <div className="form-group">
            <label htmlFor="Author name">Author_name</label>
            <input
              type="text"
              placeholder="Author name"
              name="Author_name"
              className="form-control"
              value={Book.Author_name}
              onChange={onChange}          
            />
          </div>

          <div className="form-group">
            <label htmlFor="Publish Date">Publish date</label>
            <input
              type="date"
              placeholder="Publish Date"
              name="Pubhlish_name"
              className="form-control"
              value={Book.Publish_date}
              onChange={onChange}   
         
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              placeholder="Describe this book"
              name="Description"
              className="form-control"
              value={Book.Description}
              onChange={onChange}   
              
            />
          </div>
         

          <button
            type="submit"
            className="btn btn-outline-info btn-lg btn-block"
          >
            Update Book
          </button>
        </form>
      </Container>
    </div>
  );
};

export default Update;
