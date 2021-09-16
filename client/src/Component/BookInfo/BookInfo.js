import React,{useState ,useContext} from "react";
import "./BookInfo.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Grid from "@material-ui/core/Grid";
import axios from 'axios'
import { MyId } from "../../App";

const BookInfo = (props) => {
  const Id  = useContext(MyId);
  const [Book,BookInfo] =useState()

  axios.get('http://localhost:8082/api/books/'+Id)
       .then(response =>{
         BookInfo(response.data)
       })
       .catch((err) => {
         console.log(err)
       })
  return (
    <div>
      <h1 style={{ color: "white", fontSize: "50px", textAlign: "center" }}>
        Your Book
      </h1>
      <Container
        className="book-info"
        style={{ justifyContent: "center" }}
      >
        <Card>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            height={300}
          />
          <Card.Body>
            <Card.Text>
            <div style={{textAlign: 'center'}}>
             <ui>
              <div> <li>Book Name :Saurabh singh rana</li></div>
              <div> <li>Book Name :Saurabh singh rana</li></div>
              <div> <li>Book Name :Saurabh singh rana</li></div>
              <div> <li>Book Name :Saurabh singh rana</li></div>
             </ui>
            </div>
            </Card.Text>
            <Grid container justifyContent="center">
              <Grid item >
                <Button variant="outline-success" style={{ width: 300 }}>
                  Update
                </Button>
              </Grid>
              <Grid item >
                <Button variant="outline-danger" style={{ width: 300 }}>
                  Delete
                </Button>
              </Grid>
            </Grid>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default BookInfo;
