import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";
import "./Books.css";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Typography from '@material-ui/core/Typography'
import axios from "axios";
const Books = () => {
  const [Book, setBook] = useState([]);
  const history = useHistory();
  const url="http://localhost:8080/image/"
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/books")
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(Book);
  const onDeleteClick =(id)=>{
    axios
    .delete('http://localhost:8080/api/books/'+id)
    .then(res=>{
      history.push('/')
    })
    .catch(err=>{
      console.log(err)
      alert("Unable to delete to this book")
    })
  }
  return (
    <div>
      <div>
        <h1 style={{ color: "white", fontSize: "50px", textAlign: "center" }}>
          Your Store!
        </h1>
      </div>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {Book.map((item, ind) => {
            return (
              <Grid item key={item._id}>
                <Card style={{ width: "22rem" }} className="Data">
                  <Card.Img
                    variant="top"
                    src={url+item.image} 
                    className="image"
                   />
                  <Card.Body>
                    <Card.Text><strong>Book id  : {item._id}</strong></Card.Text>
                    <Card.Text><strong>Book name : {item.Book_name}</strong></Card.Text>
                    <Card.Text><strong>Author name : {item.Author_name}</strong></Card.Text>
                    <Card.Text><strong>Publish Date : {item.Publish_date}</strong></Card.Text>
                    <Card.Text><strong>Description : {item.Description}</strong></Card.Text>
                  </Card.Body>
                  <Button variant="success" onClick={()=>{history.push('/update/'+item._id)}}>Update</Button>
                  <Button variant="danger" onClick={()=>{onDeleteClick(item._id)}}>Delete</Button>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Books;
