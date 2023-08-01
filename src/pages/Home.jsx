import React from 'react'
import '../css/Home.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navbar from '../components/Navbar';

function Home() {
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true, autoplay: true, smartSpeed: 1000, autoplaySpeed: 1000, autoplayTimeout: 2000,
        responsive: { 0: { items: 1, }, 400: { items: 1, }, 600: { items: 2, }, 700: { items: 3, }, 1400: { items: 5, }, 1880: { items: 6 } }
    };
    const options1 = {
        margin: 30,
        responsiveClass: true,
        nav: false, autoplay: true, smartSpeed: 1000, autoplaySpeed: 1000, stagePaddingLeft: 100,
        responsive: { 0: { items: 1, }, 400: { items: 1, }, 600: { items: 2, }, 700: { items: 3, }, 1400: { items: 3, }, 1880: { items: 3 } }
    };
    return (
        <>
            <Navbar />
            <section>
                <div className="Header">
                    <div className="">
                        <div className="row">
                            <div className="responsive">
                                <OwlCarousel
                                    className="owl-theme"
                                    loop
                                    margin={30}
                                    items={1}
                                    nav={false}
                                    dots={true}
                                >
                                    <div class="item">
                                        <img
                                            src={require('../Assets/has-altin.png')}
                                            className="mainbanner"
                                            alt=''
                                        />
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="mainheader">
                                                        <h3 className="mainheading">WEDDING DAY WOW</h3>
                                                        <h1 className="mainhead">It's All in the Details</h1>
                                                        <p className="mainpar">
                                                            On your wedding day, every detail should be
                                                            stunning. <br /> Find all the essential pieces for
                                                            show stopping elegance.
                                                        </p>
                                                        <div>
                                                            <button type="button" class="btn btn-outline-light">
                                                                Shop Now
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="item">
                                        <img
                                            src={require('../Assets/has-altin.png')}
                                            className="mainbanner"
                                            alt=''
                                        />
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="mainheader">
                                                        <h3 className="mainheading">WEDDING DAY WOW</h3>
                                                        <h1 className="mainhead">It's All in the Details</h1>
                                                        <p className="mainpar">
                                                            On your wedding day, every detail should be
                                                            stunning. <br /> Find all the essential pieces for
                                                            show stopping elegance.
                                                        </p>
                                                        <div>
                                                            <button type="button" class="btn btn-outline-light">
                                                                Shop Now
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <img src={require('../Assets/has-altin.png')} className="mainbanner" alt='' />
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="mainheader">
                                                        <h3 className="mainheading">WEDDING DAY WOW</h3>
                                                        <h1 className="mainhead">It's All in the Details</h1>
                                                        <p className="mainpar">
                                                            On your wedding day, every detail should be
                                                            stunning. <br /> Find all the essential pieces for
                                                            show stopping elegance.
                                                        </p>
                                                        <div>
                                                            <button type="button" class="btn btn-outline-light">
                                                                Shop Now
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-padding-y'>
                <div className="home-container">
                    <div className="row">
                        <div className="col">
                            <div className='dflex justify-content fix'>
                                <div>
                                    <h4>Explore Diamonds</h4>
                                    <p>The popular diamond cut styles are</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <OwlCarousel className='owl-theme' loop nav={true} {...options}>
                            <div className='items' >
                                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-12" style={{ width: "100%" }}>
                                    <div className='d-flex'>
                                        <div className='daimond-box'>
                                            <div className='daimond-shap'>
                                                <img src={require('../Assets/Group1.png')} alt="" />
                                            </div>
                                            <div className='text-daimond'>
                                                <h3>Round</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='items'>
                                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-12" style={{ width: "100%" }}>
                                    <div className='d-flex'>
                                        <div className='daimond-box'>
                                            <div className='daimond-shap'>
                                                <img src={require('../Assets/Group1.png')} alt="" />
                                            </div>
                                            <div className='text-daimond'>
                                                <h3>Round</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='items'>
                                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-12" style={{ width: "100%" }}>
                                    <div className='d-flex'>
                                        <div className='daimond-box'>
                                            <div className='daimond-shap'>
                                                <img src={require('../Assets/Group1.png')} alt="" />
                                            </div>
                                            <div className='text-daimond'>
                                                <h3>Round</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='items'>
                                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-12" style={{ width: "100%" }}>
                                    <div className='d-flex'>
                                        <div className='daimond-box'>
                                            <div className='daimond-shap'>
                                                <img src={require('../Assets/Group1.png')} alt="" />
                                            </div>
                                            <div className='text-daimond'>
                                                <h3>Round</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div><div className='items'>
                                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-12" style={{ width: "100%" }}>
                                    <div className='d-flex'>
                                        <div className='daimond-box'>
                                            <div className='daimond-shap'>
                                                <img src={require('../Assets/Group1.png')} alt="" />
                                            </div>
                                            <div className='text-daimond'>
                                                <h3>Round</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div><div className='items'>
                                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-12" style={{ width: "100%" }}>
                                    <div className='d-flex'>
                                        <div className='daimond-box'>
                                            <div className='daimond-shap'>
                                                <img src={require('../Assets/Group1.png')} alt="" />
                                            </div>
                                            <div className='text-daimond'>
                                                <h3>Round</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
            <section className='section3 section-padding-y'>
                <div className='home-container'>
                    <div className="row media">
                        <div className="col-12 col-xl-4 col-lg-4  col-md-12 col-sm-12 col-xs-6 ">
                            <div className='explore-content'>
                                <h1>Explore Blue Nile</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam laudantium officia voluptatum culpa,
                                    veniam corrupti fugiat aspernatur! Ducimus recusandae officiis repellat asperiores cupiditate animi rerum, odio, nisi omnis quo dolorem.ˀ</p>
                            </div>
                        </div>
                        <div className="col-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12 section3-imf-box">
                            <div>
                                <OwlCarousel className='owl-theme' loop nav={true} {...options1}>
                                    <div className="items">
                                        <div className='col-xl-12 col-12-lg-4 col-sm-12'>
                                            <div className='img-box'>
                                                <img src={require('../Assets/bg.png')} alt="" />
                                                <h5 className='m-2 text-center'>Earrings</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="items">
                                        <div className='col-xl-12 col-12'>
                                            <div className='img-box'>
                                                <img src={require('../Assets/bg.png')} alt="" />
                                                <h5 className='m-2 text-center'>Earrings</h5>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <section className="section4 section-padding-y">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <img
                                        src={require("../Assets/Group1224.png")}
                                        className="img-fluid"
                                        alt=''
                                    />
                                    <img
                                        src={require("../Assets/Rectangle159.png")}
                                        className="img-fluid mt-2"
                                        alt=''
                                    />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <img
                                        src={require("../Assets/Rectangle160.png")}
                                        className="img-fluid"
                                        alt=''
                                    />
                                    <img
                                        src={require("../Assets/Rectangle158.png")}
                                        className="img-fluid mt-2"
                                        alt=''
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div>
                                <h6 className="about">About us</h6>
                                <h5 className="change mb-1">CHANGE IS ESSENTIAL</h5>
                                <h1 className="new">New and Now</h1>
                                <p className="mainpar mb-1">
                                    It's time for a refresh. We're updating our look with elegant,
                                    luxurious styles that are ready for right now and whatever's
                                    next.
                                </p>
                            </div>
                            <img
                                src={require("../Assets/Rectangle161.png")}
                                className="img-fluid"
                                alt=''
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className='section5'>
                <div className="row">
                    <div className="col-6">
                        <div className='section5-img'>
                            <img src={require('../Assets/ring1.png')} alt="" />
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='section5-img2'>

                        </div>
                    </div>
                </div>
            </section> */}
            <section className='section6 section-padding-y'>
                <div className='row'>
                    <div className="col-6 col-xl-6 col-lg-6 col-md-4">
                        <div>

                            <img src={require('../Assets/Group 1.png')} alt="" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-6 col-xl-6 col-lg-6 col-md-4">
                        <div>

                            <img src={require('../Assets/Rectangle 155.png')} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='section7 dflex'>
                <div className="row-6">
                    <div className="col-12">
                        <div>
                            <img src={require('../Assets/Mask group.png')} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
                <div className="row-6">
                    <div className="col-12">
                        <div>
                            <img src={require('../Assets/Mask group (1).png')} alt="" className='img-fluid' />
                        </div>
                    </div>
                    <div className='col-12'>
                        <div>
                            <img src={require('../Assets/Group 1446.png')} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home