import React, {useRef, useState} from "react";
import { Col, Form, Input, notification, Drawer } from 'antd';
import {RiArrowLeftFill, RiArrowRightFill, RiCloseFill} from "react-icons/ri";
import axios from 'axios';
import styled from "styled-components";
import Slider from "react-slick";
import {style} from "./styles";
import {GapstackButton} from "../../../../../Components/Buttons";

const FormWrapper = styled.div`
  ${style}
`;


const CustomSlide = (props) => {
  return (
      <div style={{ display: "flex", justifyContent: "center", height: '100%', flexDirection: 'column' }}>
          {props?.children}
      </div>
  )
}

const ContactForm = ({ visible, setModalVisibility }) => {
    const [form] = Form.useForm();
    const carousel = useRef(null);
    const [currentItem, setCurrentItem] = useState(1);
    const [ loading, setLoading ] = useState(false);

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentItem(newIndex + 1);
        }
    };

    const sendNotification = (values) => {
        setLoading(true);
        axios.post('https://demo.gapstack.com:8443/website-backend/message', values, {
            headers: {
                'Access-Control-Allow-Headers': 'Authorization,Origin,access-control-allow-origin,Content-Type',
                'Content-Type': 'application/json',
            },
        }).then(response => {
            setLoading(false);
            if (response.status === 201) {
                notification.success({
                    message: 'Success',
                    description: 'We have received your message and we will contact you'
                });
                form.resetFields();
                setModalVisibility(false);
                return null;
           }

           notification.error({
               message: 'Error',
               description: response.data.message
           });
        }).catch(error => {
            console.log('Error: ', error);
        });
    }

    const checkPressedKey = async (e, formItemName) => {
      if (e.key === 'Enter') {
          await form.validateFields([formItemName]).then(() => {
              onNext();
          }).catch((error) => {
          });
      }
    }

    const onNext = () => {
        if (carousel) {
            // eslint-disable-next-line no-unused-expressions
            carousel?.current?.slickNext();
        }
    }
    
    const onPrevious = () => {
        if (carousel) {
            // eslint-disable-next-line no-unused-expressions
            carousel?.current?.slickPrev();
        }
    }
    return (
        <Drawer title={null} closeIcon={<RiCloseFill size={20} />} size={"large"} placement="right" onClose={() => setModalVisibility(false)} visible={visible}>
            <FormWrapper>
                <div className="pagination-container">
                    <span className="current-item">{currentItem}</span><span className="total-item">/04</span>
                </div>
                <div className="direction-button-container">
                    <GapstackButton
                        type="purple"
                        style={{
                            width: 40,
                            height: 40,
                            marginRight: 2,
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        icon={<RiArrowLeftFill color="#ffffff" />}
                        onClick={onPrevious}
                    />
                    <GapstackButton
                        type="purple"
                        style={{
                            width: 40,
                            height: 40,
                            marginRight: 2,
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        icon={<RiArrowRightFill color="#ffffff" />}
                        onClick={onNext}
                    />
                </div>
                <Form style={{ width: '100%' }} size='large' requiredMark={false} layout="vertical" form={form} onFinish={(values) => sendNotification(values)}>
                    <Slider {...settings} ref={carousel}>
                        <CustomSlide>
                            <p className="title">Partner with Gapstack</p>
                            <p className="description">Supply chain financing is made simple by the Gapstack platform which uniquely gives access to finance at all points in the chain.</p>
                            <GapstackButton type="purple" onClick={onNext} buttonName="Continue" />
                        </CustomSlide>
                        <CustomSlide>
                            <Col span={24} className="item-container">
                                <Form.Item
                                    label="Enter Your Full Name"
                                    name="name"
                                    rules={[{ required: true, message: 'Please input your name!' }]}
                                >
                                    <Input placeholder="Enter Full Name" onKeyDown={(e) => checkPressedKey(e, 'name')} />
                                </Form.Item>

                                <GapstackButton type="purple" onClick={onNext} buttonName="Continue" />
                            </Col>
                        </CustomSlide>
                        <CustomSlide>
                            <Col span={24} className="item-container">
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[{ required: true, type: 'email', message: 'Please input a valid email address!' }]}
                                >
                                    <Input placeholder="Email" onKeyDown={(e) => checkPressedKey(e, 'email')} />
                                </Form.Item>

                                <GapstackButton type="purple" onClick={onNext} buttonName="Continue" />
                            </Col>
                        </CustomSlide>
                        <CustomSlide>
                            <Col span={24} className="item-container">
                                <Form.Item
                                    label="Message"
                                    name="message"
                                    rules={[{ required: true, message: 'Please input your message!' }]}
                                    style={{ width: '100%' }}
                                >
                                    <Input.TextArea rows={1} placeholder="Message" onKeyDown={(e) => checkPressedKey(e, 'message')} />
                                </Form.Item>

                                <GapstackButton type="purple" htmlType="submit" loading={loading} onClick={onNext}  buttonName="Complete" />
                            </Col>
                        </CustomSlide>
                    </Slider>
                </Form>
            </FormWrapper>
        </Drawer>
    );
}

export default ContactForm;
