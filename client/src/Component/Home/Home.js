import React from "react";
import "./Home";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import { Grid } from "@material-ui/core";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            height={430}
            src="https://images.unsplash.com/photo-1512580770426-cbed71c40e94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=782&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            height={430}
            src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={430}
            src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className="mt-4">
        <Grid container spacing={10} justifyContent="center">
          <Grid item>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
              />
              <Card.Body>
                <Card.Title>
                  “A room without books is like a body without a soul.” ― Marcus
                  Tullius Cicero
                </Card.Title>
              </Card.Body>
            </Card>
          </Grid>
          <Grid item>
            <Card style={{textAlign: 'center'}}>
              <Card.Body>
                <Card.Title><strong>Contact to US</strong></Card.Title>
                <Card.Text>
                 <strong>Email :  ranasaurabh455@gmail.com</strong> 
                </Card.Text>
                <Card.Text>
                 <strong> Phone :  9758422685</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
