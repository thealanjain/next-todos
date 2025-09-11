import Link from "next/link"
import { Col, Form, Row } from "react-bootstrap"

const SigninPage = () => {
    return (
        <>
            <Row>
                <Col className="col-12">
                    <h1>Sign In</h1>
                    <div className="d-flex justify-content-between">
                        <p>
                            If you don't have an account, please{" "}
                            <Link href="/signup">sign up.</Link>
                        </p>
                        <Link href="/">Home</Link>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="col-12 bg-light p-3 rounded">
                    <Form>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                        />
                        <Form.Label className="mt-3">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default SigninPage
