import { useState, useEffect } from "react";
import headerImg from "../assets/img/header-img.svg";
import {ArrowRightCircle} from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BannerSection(){
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState(' ');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Software Developer", "UI / UX Designer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
             setIsDeleting(true);
             setIndex(prevIndex => prevIndex - 1);
             setDelta(period);
          } else if (isDeleting && updatedText === '') {
             setIsDeleting(false);
             setLoopNum(loopNum + 1);
             setIndex(1);
             setDelta(500);
          } else {
             setIndex(prevIndex => prevIndex + 1);
          }
    }
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({isVisible}) => 
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                  
                                    <h1>{"Hi! I'm Bokang..."} <span className="txt-rotate" dataPeriod="'2000" data-rotate='["Software Developer", "UI / UX Designer"]'><span className="wrap">{text}</span></span></h1>
                                  
                                    <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                            </div>
                            } 
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                             <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                <img src={headerImg} alt="Header Image"/>
                             </div>}
                       </TrackVisibility>
                  </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BannerSection;