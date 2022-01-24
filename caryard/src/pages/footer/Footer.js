import React from 'react'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from './footerStyles'

import Typography from '@material-ui/core/Typography';

function Footer() {
    return (
        <div className="footer">
            <Box>
                <Container>
                    <Row>
                        <Column>
                            <Heading>Car-Yard</Heading>
                            <Typography>
                                Car-Yard helps you find anything you need about cars, from car purchase to car spare parts.
                                All this by a click of a button.
                            </Typography>

                        </Column>
                        <Column>
                            <Heading>Services</Heading>
                            <FooterLink href="" >Car Purchase</FooterLink>
                            <FooterLink href="">Car Servicing</FooterLink>
                            <FooterLink href="">Consultation</FooterLink>
                        </Column>
                        <Column>
                            <Heading>Contact Us</Heading>
                            <FooterLink href="#">

                                car-yard@gmail.com

                            </FooterLink>
                            <FooterLink href="#">

                                0798210403

                            </FooterLink>
                            <FooterLink href="#">

                                Eldoret, Kenya

                            </FooterLink>

                        </Column>
                        <Column>
                            <Heading>Follow Us</Heading>
                            <FooterLink href="#">
                                <i className="fab fa-facebook-f">
                                    <span style={{ marginLeft: "10px" }}>
                                        Facebook
                                    </span>
                                </i>
                            </FooterLink>

                            <FooterLink href="#">
                                <i className="fab fa-twitter">
                                    <span style={{ marginLeft: "10px" }}>
                                        Twitter
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="https://www.linkedin.com/in/brian-luvonga-89262b18a/" target='_blank'>
                                <i className="fab fa-linkedin">
                                    <span style={{ marginLeft: "10px" }}>
                                        LinkedIn
                                    </span>
                                </i>
                            </FooterLink>
                        </Column>
                    </Row>
                </Container>
            </Box>

        </div>
    )
}

export default Footer
