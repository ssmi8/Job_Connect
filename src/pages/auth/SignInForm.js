import React from "react";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import sign_in from "../../assets/sign_in.jpg";

function SignInForm() {
//   Add your component logic here

  return (
    <Row className={styles.Row}>
      <Col className="my-auto p-0 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign in</h1>
          <Form>
            <Form.Group controlID="username">
                <Form.Label className="d-none">username</Form.Label>
                <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Username"
                name="username"
                />
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label className="d-none">password</Form.Label>
                <Form.Control
                className={styles.Input}
                type="password" 
                placeholder="Password"
                name="password" />
            </Form.Group>
            
            <Button 
            className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
            type="submit"
            >
            Sign In
            </Button>

          </Form>

        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signup">
            Don't have an account? <span>Sign up now!</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignInCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={sign_in}
        />
      </Col>
    </Row>
  );
}

export default SignInForm;

