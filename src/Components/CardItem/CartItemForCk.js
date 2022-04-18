
import React from 'react';
import { Button} from 'react-bootstrap';
import "./Cartch.css"

const CardItemCkech = () => {
    return (
        <div className='container card-itemsCk mb-5'>

            <div className="checkoutpage ">

                <div className="ckitem d-flex justify-content-center align-items-center my-4 ">
                    
                    <div className="ck-img">
                        <img src={"https://i.ibb.co/G2vzQw0/download-removebg-preview-1.png"} alt="" />
                    </div>
                    <div className="dicription">
                        <h1>UEFA Champions Leagu</h1>
                        <div className="ckbtn">
                        <h1 style={{fontSize:"18px"}}> <b>Salary: </b> $20m <sup>yearly</sup></h1>
                        <Button variant="danger">Removed</Button>
                        </div>
                    </div>
                </div>


                <div className="ckitem d-flex justify-content-center align-items-center my-4 ">
                    
                    <div className="ck-img">
                        <img src={"https://i.ibb.co/4K5jsfk/laliga-removebg-preview.png"} alt="" />
                    </div>
                    <div className="dicription">
                        <h1>LaLiga</h1>
                        <div className="ckbtn">
                        <h1 style={{fontSize:"18px"}}> <b>Salary: </b> $14m <sup>yearly</sup></h1>
                        <Button variant="danger">Removed</Button>
                        </div>
                    </div>
                </div>


                <div className="ckitem d-flex justify-content-center align-items-center my-4 ">
                    
                    <div className="ck-img">
                        <img src={"https://i.ibb.co/sgFZrX4/Premier-League-Logo-wine-1.png"} alt="" />
                    </div>
                    <div className="dicription">
                        <h1>Premier League</h1>
                        <div className="ckbtn">
                        <h1 style={{fontSize:"18px"}}> <b>Salary: </b> $18m <sup>yearly</sup></h1>
                        <Button variant="danger">Removed</Button>
                        </div>
                    </div>
                </div>


                <div className="ckitem d-flex justify-content-center align-items-center my-4 ">
                    
                    <div className="ck-img">
                        <img  src={"https://i.ibb.co/6JTvDMv/130-1305610-bundesliga-logo-transparent-png-sticker-bundesliga-logo-vector-removebg-preview.png"} alt="" />
                    </div>
                    <div className="dicription">
                        <h1>Bundesliga</h1>
                        <div className="ckbtn">
                        <h1 style={{fontSize:"18px"}}> <b>Salary: </b> $13m <sup>yearly</sup></h1>
                        <Button variant="danger">Removed</Button>
                        </div>
                    </div>
                </div>
                <div className="ckitem d-flex justify-content-center align-items-center my-4 ">
                    
                    <div className="ck-img">
                        <img src={"https://i.ibb.co/G5SWBKf/310-3109786-every-week-but-there-is-no-absolute-assurance-removebg-preview.png"} alt="" />
                    </div>
                    <div className="dicription">
                        <h1>Ligue 1</h1>
                        <div className="ckbtn">
                        <h1 style={{fontSize:"18px"}}> <b>Salary: </b> $12m <sup>yearly</sup></h1>
                        <Button variant="danger">Removed</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardItemCkech;