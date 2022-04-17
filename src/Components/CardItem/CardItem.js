
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./CardItem.css"

const CardItem = () => {
    return (
        <div className='container card-items mb-5'>
            <Card className='cardsitem' style={{ width: '100%'}}>
                <Card.Img variant="top" src={"https://i.ibb.co/G2vzQw0/download-removebg-preview-1.png"} />
                <Card.Body>
                    <Card.Title>UEFA Champions League</Card.Title>
                    <Card.Text>
                    The UEFA Champions League is an annual club football competition organised by the Union of European Football Associations and contested by top-division European clubs
                    </Card.Text>
                    <Link to="/checkout">  <Button variant="primary w-100">Hired For This Tournament</Button></Link>
                   
                </Card.Body>
            </Card>
            <Card className='cardsitem' cla style={{ width: '100%' }}>
                <Card.Img  variant="top" src={"https://i.ibb.co/4K5jsfk/laliga-removebg-preview.png"} />
                <Card.Body>
                    <Card.Title>LaLiga</Card.Title>
                    <Card.Text>
                    The Campeonato Nacional de Liga de Primera División, commonly known simply as Primera División in Spain, and as La Liga in English-speaking countries  LaLiga Santander
                    </Card.Text>
                    <Link to="/checkout">  <Button variant="primary w-100">Hired For This Tournament</Button></Link>
                </Card.Body>
            </Card>
            <Card className='cardsitem' style={{ width: '100%' }}>
                <Card.Img variant="top" src={"https://i.ibb.co/sgFZrX4/Premier-League-Logo-wine-1.png"} />
                <Card.Body>
                    <Card.Title>Premier League</Card.Title>
                    <Card.Text>
                    The Premier League, also known as the English Premier League or the EPL, is the top level of the English football league system. Contested by 20 clubs, 
                    </Card.Text>
                    <Link to="/checkout">  <Button variant="primary w-100">Hired For This Tournament</Button></Link>
                   
                </Card.Body>
            </Card>
            <Card className='cardsitem' style={{ width: '100%' }}>
                <Card.Img variant="top" src={"https://i.ibb.co/6JTvDMv/130-1305610-bundesliga-logo-transparent-png-sticker-bundesliga-logo-vector-removebg-preview.png"} />
                <Card.Body>
                    <Card.Title>Bundesliga</Card.Title>
                    <Card.Text>
                    The Bundesliga, sometimes referred to as the Fußball-Bundesliga or 1. Bundesliga, is a professional association football league in Germany
                    </Card.Text>
                    <Link to="/checkout">  <Button variant="primary w-100">Hired For This Tournament</Button></Link>
                </Card.Body>
            </Card>
            <Card className='cardsitem' style={{ width: '100%' }}>
                <Card.Img variant="top" src={"https://i.ibb.co/G5SWBKf/310-3109786-every-week-but-there-is-no-absolute-assurance-removebg-preview.png"} />
                <Card.Body>
                    <Card.Title>Ligue 1</Card.Title>
                    <Card.Text>
                    Ligue 1, officially known as Ligue 1 Uber Eats for sponsorship reasons, is a French professional league for men's association football clubs
                    </Card.Text>
                    <Link to="/checkout">  <Button variant="primary w-100">Hired For This Tournament</Button></Link>
                   
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardItem;