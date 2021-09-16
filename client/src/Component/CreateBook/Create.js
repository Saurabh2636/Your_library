import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Create.css";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Create = () => {
  const history = useHistory();
  const [Book, setBook] = useState({
    Book_name: "",
    Author_name: "",
    Publish_date: "",
    image: "",
    Description: "",
  });

  const changeHandler = (e) => {
    setBook({ ...Book, [e.target.name]: e.target.value });
  };
  const handlePhoto = (e) => {
    setBook({ ...Book, image: e.target.files[0]});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData();

    formData.append("Book_name",Book.Book_name);
    formData.append("Author_name",Book.Author_name);
    formData.append("Publish_date",Book.Publish_date);
    formData.append("Description",Book.Description)
    formData.append("image",Book.image);
    axios
      .post("http://localhost:8080/api/books", formData)
      .then((res) => {
        setBook({
          Book_name: "",
          Author_name: "",
          Publish_date: "",
          image:'',
          Description: "",
        });

       history.push('/')
      })
      .catch((err) => {
        alert("Error in createBook");
      });
  };
  return (
    <div>
      <div className="heading">
        <h1 style={{ color: "white", fontSize: "50px", textAlign: "center" }}>
          Add Book
        </h1>
      </div>
      <Container className="card mt-4 main">
        <Form onSubmit={onSubmit} encType="multipart/form-data" >
          <Form.Group className="mb-3" >
            <Form.Label>
              <h4>Book Name</h4>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Book Name"
              name="Book_name"
              onChange={changeHandler}
              value={Book.Book_Name}
            />
            <Form.Text className="text-muted">
              You should provide alawys unique Book name
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              <h4>Author Name</h4>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Author Name"
              name="Author_name"
              onChange={changeHandler}
              value={Book.Author_Name}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              <h4>Publish Date</h4>
            </Form.Label>
            <Form.Control
              type="date"
              name="Publish_date"
              onChange={changeHandler}
              value={Book.Publish_Date}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              <h4>Upload file</h4>
            </Form.Label>
            <Form.Control
              type="file"
              accept=".png, .jpg, .jpeg"
              name="image"
              onChange={handlePhoto}
            />
            <Form.Text className="text-muted" >
              You can't edit image once you add.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              <h3>Description</h3>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="Description"
              onChange={changeHandler}
              value={Book.Description}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Create;
