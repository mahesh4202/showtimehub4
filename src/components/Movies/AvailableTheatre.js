import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { GiTheaterCurtains } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function AvailableTheatre() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="11th Oct" value="1" />
            <Tab label="12th Oct" value="2" />
            <Tab label="13th Oct" value="3" />
            <Tab label="14th Oct" value="4" />
            <Tab label="15th Oct" value="5" />
            <Tab label="16th Oct" value="6" />
            <Tab label="17th Oct" value="7" />
            <Tab label="18th Oct" value="8" />
            <Tab label="19th Oct" value="9" />
            <Tab label="20th Oct" value="10" />
            <Tab label="21th Oct" value="11" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div>
            <div className='TheatreCard '>
              <div className='d-flex'>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <GiTheaterCurtains style={{ fontSize: "48px" , padding: "5px" }} />
                      <p className='middle'>Sri Priya Theatre</p>
                  </div>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <IoLocationSharp style={{ fontSize: "48px" , padding: "5px" }} />
                      <p style={{ paddingRight: "40px" }} className='middle'>1.2 km</p>
                  </div>
              </div>
              <div className='d-flex'>
                <div>
                  <div>
                    <div className='d-flex'>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>09:00 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>11:30 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>02:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>04:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>07:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>09:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='TheatreCard '>
              <div className='d-flex mt-5'>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <GiTheaterCurtains style={{ fontSize: "48px" , padding: "5px" }} />
                      <p className='middle'>SRMT Inox</p>
                  </div>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <IoLocationSharp style={{ fontSize: "48px" , padding: "5px" }} />
                      <p style={{ paddingRight: "40px" }} className='middle'>0.5 km</p>
                  </div>
              </div>
              <div className='d-flex'>
                <div>
                  <div>
                    <div className='d-flex'>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>08:30 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>12:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>02:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>05:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>07:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>10:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='TheatreCard '>
              <div className='d-flex mt-5'>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <GiTheaterCurtains style={{ fontSize: "48px" , padding: "5px" }} />
                      <p className='middle'>JVR Cinemas</p>
                  </div>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <IoLocationSharp style={{ fontSize: "48px" , padding: "5px" }} />
                      <p style={{ paddingRight: "40px" }} className='middle'>3.6 km</p>
                  </div>
              </div>
              <div className='d-flex'>
                <div>
                  <div>
                    <div className='d-flex'>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>08:00 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>09:15 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>11:45 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>01:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>04:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>07:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>10:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div>
            <div className='TheatreCard '>
              <div className='d-flex'>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <GiTheaterCurtains style={{ fontSize: "48px" , padding: "5px" }} />
                      <p className='middle'>Sri Priya Theatre</p>
                  </div>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <IoLocationSharp style={{ fontSize: "48px" , padding: "5px" }} />
                      <p style={{ paddingRight: "40px" }} className='middle'>1.2 km</p>
                  </div>
              </div>
              <div className='d-flex'>
                <div>
                  <div>
                    <div className='d-flex'>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>09:00 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>11:30 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>02:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>04:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>07:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>09:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='TheatreCard '>
              <div className='d-flex mt-5'>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <GiTheaterCurtains style={{ fontSize: "48px" , padding: "5px" }} />
                      <p className='middle'>SRMT Inox</p>
                  </div>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <IoLocationSharp style={{ fontSize: "48px" , padding: "5px" }} />
                      <p style={{ paddingRight: "40px" }} className='middle'>0.5 km</p>
                  </div>
              </div>
              <div className='d-flex'>
                <div>
                  <div>
                    <div className='d-flex'>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>08:30 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>12:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>02:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>05:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>07:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>10:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='TheatreCard '>
              <div className='d-flex mt-5'>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <GiTheaterCurtains style={{ fontSize: "48px" , padding: "5px" }} />
                      <p className='middle'>JVR Cinemas</p>
                  </div>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <IoLocationSharp style={{ fontSize: "48px" , padding: "5px" }} />
                      <p style={{ paddingRight: "40px" }} className='middle'>3.6 km</p>
                  </div>
              </div>
              <div className='d-flex'>
                <div>
                  <div>
                    <div className='d-flex'>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>08:00 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>09:15 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>11:45 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>01:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>04:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>07:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>10:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="3">
          <div>
            <div className='TheatreCard '>
              <div className='d-flex'>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <GiTheaterCurtains style={{ fontSize: "48px" , padding: "5px" }} />
                      <p className='middle'>Sri Priya Theatre</p>
                  </div>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <IoLocationSharp style={{ fontSize: "48px" , padding: "5px" }} />
                      <p style={{ paddingRight: "40px" }} className='middle'>1.2 km</p>
                  </div>
              </div>
              <div className='d-flex'>
                <div>
                  <div>
                    <div className='d-flex'>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>09:00 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>11:30 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>02:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>04:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>07:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>09:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='TheatreCard '>
              <div className='d-flex mt-5'>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <GiTheaterCurtains style={{ fontSize: "48px" , padding: "5px" }} />
                      <p className='middle'>SRMT Inox</p>
                  </div>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <IoLocationSharp style={{ fontSize: "48px" , padding: "5px" }} />
                      <p style={{ paddingRight: "40px" }} className='middle'>0.5 km</p>
                  </div>
              </div>
              <div className='d-flex'>
                <div>
                  <div>
                    <div className='d-flex'>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>08:30 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>12:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>02:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>05:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>07:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>10:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='TheatreCard '>
              <div className='d-flex mt-5'>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <GiTheaterCurtains style={{ fontSize: "48px" , padding: "5px" }} />
                      <p className='middle'>JVR Cinemas</p>
                  </div>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <IoLocationSharp style={{ fontSize: "48px" , padding: "5px" }} />
                      <p style={{ paddingRight: "40px" }} className='middle'>3.6 km</p>
                  </div>
              </div>
              <div className='d-flex'>
                <div>
                  <div>
                    <div className='d-flex'>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>08:00 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>09:15 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>11:45 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>01:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>04:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>07:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>10:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="4">
          <div>
            <div className='TheatreCard '>
              <div className='d-flex'>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <GiTheaterCurtains style={{ fontSize: "48px" , padding: "5px" }} />
                      <p className='middle'>Sri Priya Theatre</p>
                  </div>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <IoLocationSharp style={{ fontSize: "48px" , padding: "5px" }} />
                      <p style={{ paddingRight: "40px" }} className='middle'>1.2 km</p>
                  </div>
              </div>
              <div className='d-flex'>
                <div>
                  <div>
                    <div className='d-flex'>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>09:00 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>11:30 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>02:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>04:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>07:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>09:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='TheatreCard '>
              <div className='d-flex mt-5'>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <GiTheaterCurtains style={{ fontSize: "48px" , padding: "5px" }} />
                      <p className='middle'>SRMT Inox</p>
                  </div>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <IoLocationSharp style={{ fontSize: "48px" , padding: "5px" }} />
                      <p style={{ paddingRight: "40px" }} className='middle'>0.5 km</p>
                  </div>
              </div>
              <div className='d-flex'>
                <div>
                  <div>
                    <div className='d-flex'>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>08:30 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>12:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>02:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>05:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>07:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>10:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='TheatreCard '>
              <div className='d-flex mt-5'>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <GiTheaterCurtains style={{ fontSize: "48px" , padding: "5px" }} />
                      <p className='middle'>JVR Cinemas</p>
                  </div>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <IoLocationSharp style={{ fontSize: "48px" , padding: "5px" }} />
                      <p style={{ paddingRight: "40px" }} className='middle'>3.6 km</p>
                  </div>
              </div>
              <div className='d-flex'>
                <div>
                  <div>
                    <div className='d-flex'>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>08:00 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>09:15 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>11:45 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>01:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>04:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>07:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>10:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="5">
          <div>
            <div className='TheatreCard '>
              <div className='d-flex'>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <GiTheaterCurtains style={{ fontSize: "48px" , padding: "5px" }} />
                      <p className='middle'>Sri Priya Theatre</p>
                  </div>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <IoLocationSharp style={{ fontSize: "48px" , padding: "5px" }} />
                      <p style={{ paddingRight: "40px" }} className='middle'>1.2 km</p>
                  </div>
              </div>
              <div className='d-flex'>
                <div>
                  <div>
                    <div className='d-flex'>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>09:00 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>11:30 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>02:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>04:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>07:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>09:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='TheatreCard '>
              <div className='d-flex mt-5'>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <GiTheaterCurtains style={{ fontSize: "48px" , padding: "5px" }} />
                      <p className='middle'>SRMT Inox</p>
                  </div>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <IoLocationSharp style={{ fontSize: "48px" , padding: "5px" }} />
                      <p style={{ paddingRight: "40px" }} className='middle'>0.5 km</p>
                  </div>
              </div>
              <div className='d-flex'>
                <div>
                  <div>
                    <div className='d-flex'>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>08:30 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>12:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>02:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>05:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>07:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>10:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='TheatreCard '>
              <div className='d-flex mt-5'>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <GiTheaterCurtains style={{ fontSize: "48px" , padding: "5px" }} />
                      <p className='middle'>JVR Cinemas</p>
                  </div>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <IoLocationSharp style={{ fontSize: "48px" , padding: "5px" }} />
                      <p style={{ paddingRight: "40px" }} className='middle'>3.6 km</p>
                  </div>
              </div>
              <div className='d-flex'>
                <div>
                  <div>
                    <div className='d-flex'>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>08:00 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>09:15 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>11:45 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>01:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>04:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>07:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>10:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="6">
          <div>
            <div className='TheatreCard '>
              <div className='d-flex'>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <GiTheaterCurtains style={{ fontSize: "48px" , padding: "5px" }} />
                      <p className='middle'>SRMT Inox</p>
                  </div>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <IoLocationSharp style={{ fontSize: "48px" , padding: "5px" }} />
                      <p style={{ paddingRight: "40px" }} className='middle'>0.5 km</p>
                  </div>
              </div>
              <div className='d-flex'>
                <div>
                  <div>
                    <div className='d-flex'>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>08:30 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>12:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>02:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>05:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>07:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>10:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='TheatreCard '>
              <div className='d-flex mt-5'>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <GiTheaterCurtains style={{ fontSize: "48px" , padding: "5px" }} />
                      <p className='middle'>JVR Cinemas</p>
                  </div>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <IoLocationSharp style={{ fontSize: "48px" , padding: "5px" }} />
                      <p style={{ paddingRight: "40px" }} className='middle'>3.6 km</p>
                  </div>
              </div>
              <div className='d-flex'>
                <div>
                  <div>
                    <div className='d-flex'>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>08:00 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>09:15 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>11:45 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>01:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>04:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>07:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>10:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="7">
          <div>
            <div className='TheatreCard '>
              <div className='d-flex'>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <GiTheaterCurtains style={{ fontSize: "48px" , padding: "5px" }} />
                      <p className='middle'>SRMT Inox</p>
                  </div>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <IoLocationSharp style={{ fontSize: "48px" , padding: "5px" }} />
                      <p style={{ paddingRight: "40px" }} className='middle'>0.5 km</p>
                  </div>
              </div>
              <div className='d-flex'>
                <div>
                  <div>
                    <div className='d-flex'>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>08:30 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>12:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>02:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>05:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>07:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>10:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='TheatreCard '>
              <div className='d-flex mt-5'>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <GiTheaterCurtains style={{ fontSize: "48px" , padding: "5px" }} />
                      <p className='middle'>JVR Cinemas</p>
                  </div>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <IoLocationSharp style={{ fontSize: "48px" , padding: "5px" }} />
                      <p style={{ paddingRight: "40px" }} className='middle'>3.6 km</p>
                  </div>
              </div>
              <div className='d-flex'>
                <div>
                  <div>
                    <div className='d-flex'>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>08:00 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>09:15 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>11:45 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>01:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>04:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>07:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>10:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="8">
          <div>
            <div className='TheatreCard '>
              <div className='d-flex'>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <GiTheaterCurtains style={{ fontSize: "48px" , padding: "5px" }} />
                      <p className='middle'>SRMT Inox</p>
                  </div>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <IoLocationSharp style={{ fontSize: "48px" , padding: "5px" }} />
                      <p style={{ paddingRight: "40px" }} className='middle'>0.5 km</p>
                  </div>
              </div>
              <div className='d-flex'>
                <div>
                  <div>
                    <div className='d-flex'>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>08:30 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>12:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>02:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>05:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>07:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>10:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='TheatreCard '>
              <div className='d-flex mt-5'>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <GiTheaterCurtains style={{ fontSize: "48px" , padding: "5px" }} />
                      <p className='middle'>JVR Cinemas</p>
                  </div>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <IoLocationSharp style={{ fontSize: "48px" , padding: "5px" }} />
                      <p style={{ paddingRight: "40px" }} className='middle'>3.6 km</p>
                  </div>
              </div>
              <div className='d-flex'>
                <div>
                  <div>
                    <div className='d-flex'>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>08:00 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>09:15 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>11:45 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>01:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>04:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>07:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>10:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="9">
          <div>
            <div className='TheatreCard '>
              <div className='d-flex'>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <GiTheaterCurtains style={{ fontSize: "48px" , padding: "5px" }} />
                      <p className='middle'>JVR Cinemas</p>
                  </div>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <IoLocationSharp style={{ fontSize: "48px" , padding: "5px" }} />
                      <p style={{ paddingRight: "40px" }} className='middle'>3.6 km</p>
                  </div>
              </div>
              <div className='d-flex'>
                <div>
                  <div>
                    <div className='d-flex'>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>08:00 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>09:15 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>11:45 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>01:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>04:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>07:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>10:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="10">
          <div>
            <div className='TheatreCard '>
              <div className='d-flex'>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <GiTheaterCurtains style={{ fontSize: "48px" , padding: "5px" }} />
                      <p className='middle'>JVR Cinemas</p>
                  </div>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <IoLocationSharp style={{ fontSize: "48px" , padding: "5px" }} />
                      <p style={{ paddingRight: "40px" }} className='middle'>3.6 km</p>
                  </div>
              </div>
              <div className='d-flex'>
                <div>
                  <div>
                    <div className='d-flex'>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>08:00 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>09:15 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>11:45 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>01:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>04:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>07:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>10:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="11">
          <div>
            <div className='TheatreCard '>
              <div className='d-flex'>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <GiTheaterCurtains style={{ fontSize: "48px" , padding: "5px" }} />
                      <p className='middle'>JVR Cinemas</p>
                  </div>
                  <div className='d-flex' style={{ width: "20%" }}>
                      <IoLocationSharp style={{ fontSize: "48px" , padding: "5px" }} />
                      <p style={{ paddingRight: "40px" }} className='middle'>3.6 km</p>
                  </div>
              </div>
              <div className='d-flex'>
                <div>
                  <div>
                    <div className='d-flex'>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>08:00 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>09:15 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>11:45 AM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>01:30 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>04:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>07:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                      <Card className='me-2'>
                        <div className='mt-2'>
                          <div class="card1">
                            <div class="container22">
                              <h6>10:00 PM</h6>
                              <a>
                              <Link class="btn41-43 btn-43 mb-2" to="/JigraSeatOrig" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}