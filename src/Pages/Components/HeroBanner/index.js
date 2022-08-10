import React from "react";
import {Col, Row} from "antd";
import Menu from "../../../Components/Menu";
// import CoolKidsBrainstorming from '../../../assets/Cool-Kids-Brainstorming.svg';
import { Fade } from "react-awesome-reveal";
// import Particles from "react-particles-js";
import styled from "styled-components";
import { style } from "./styles";
import Header from "../../../assets/Header.jpg";
import HeaderBanner from "../../../assets/HeroBanner.webp";
import { GapstackButton } from "../../../Components/Buttons";

const HeroWrapper = styled.div`
  ${style}
`;

const Hero = ({ scrollToSolutions, scrollToContactForm }) => {
    const openProductionApp = () => {
        window.open('https://trade.gapstack.com', '_blank', 'noopener,noreferrer');
    };
    return(
        <HeroWrapper backgroundImage={Header}>
            <Row className="container">
                <Col span={24}>
                    <Menu scrollToSolutions={scrollToSolutions} scrollToContactForm={scrollToContactForm} />

                    <Fade className="fade-container"  triggerOnce={true} fraction={0.3}>
                        <Row style={{ height: 'inherit'}}>
                            <Col xs={{ span: 20, offset: 2 }}
                                 sm={{ span: 20, offset: 2 }}
                                 md={{ span: 20, offset: 2 }}
                                 lg={{ span: 20, offset: 4 }}
                                 xl={{ span: 20, offset: 4 }}>
                                <Row style={{ height: '100%' }}>
                                    <Col xs={24}
                                         sm={24}
                                         md={24}
                                         lg={24}
                                         xl={24} className="banner-container">
                                        <Row>
                                            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                                                <p className="title">The single Digital Trade Financing Platform</p>
                                                <p className="description">At Gapstack, we digitize your buyer- supplier arrangements; unlock and accelerate funding from your international and domestic value chain while expanding your unique business relationships.</p>
                                                <GapstackButton type="purple" buttonName="Join Gapstack" onClick={openProductionApp} />
                                            </Col>
                                            <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                                                <img width='100%' src={HeaderBanner} alt="Dashboard" className="dashboard-image" />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Fade>

                    {/*<Fade*/}
                    {/*    triggerOnce={true}*/}
                    {/*    fraction={0.3}*/}
                    {/*    className="circular">*/}
                    {/*    <div className="circle first" />*/}
                    {/*    <div className="circle second" />*/}
                    {/*    <div className="circle third" />*/}
                    {/*</Fade>*/}

                    {/*<Particles*/}
                    {/*    style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}*/}
                    {/*    params={{*/}
                    {/*        particles: {*/}
                    {/*            number: {*/}
                    {/*                value: 80,*/}
                    {/*                density: {*/}
                    {/*                    enable: true,*/}
                    {/*                }*/}
                    {/*            },*/}
                    {/*            links: {*/}
                    {/*                color: "#777C93",*/}
                    {/*                distance: 150,*/}
                    {/*                enable: true,*/}
                    {/*                opacity: 0.5,*/}
                    {/*                width: 1,*/}
                    {/*            },*/}
                    {/*            shape: {*/}
                    {/*                type: "circle",*/}
                    {/*            },*/}
                    {/*            size: {*/}
                    {/*                random: true,*/}
                    {/*                value: 5,*/}
                    {/*            },*/}
                    {/*        },*/}
                    {/*    }}*/}
                    {/*/>*/}
                </Col>
            </Row>
        </HeroWrapper>
    );
}

export default Hero;
