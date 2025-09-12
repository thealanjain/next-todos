"use client"

import Link from "next/link"
import { Button, Col, Form, Row } from "react-bootstrap"

const SigninPage = () => {
    return (
        <Row className="justify-content-center">
            <Col className="col-12 w-50">
                <Row>
                    <Col className="col-12 mb-3">
                        <h1>Sign In</h1>
                    </Col>
                    <Col className="col-12 bg-light p-3 rounded mb-3">
                        <Form>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                            />
                            <Form.Label className="mt-3">Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Form>
                        <Button className="mt-3" variant="primary">
                            Sign In
                        </Button>
                    </Col>
                    <Col className="col-12">
                        <p className="">
                            If you don't have an account, please{" "}
                            <Link href="/signup">sign up.</Link>
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default SigninPage
