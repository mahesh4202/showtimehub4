import React from 'react'
import Card21 from "./Card2.1.jpg"
import VerifiedIcon from '@mui/icons-material/Verified';
import { CiSquareMinus , CiSquarePlus} from "react-icons/ci";
import { FaRegCalendarDays } from "react-icons/fa6";
import { IoMdClock } from "react-icons/io";
import { GiTheaterCurtains } from "react-icons/gi";
import { RiSofaLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Barcode1 from './Barcode';

const OrderSuccess = () => {
  return (
    <div className='d-flex my-5'>
      <div class="container">
        <div class="row show-grid">
          <div class="col-lg-4 col-lg-push-8 col-md-4 col-md-push-0 col-sm-4 col-sm-push-8">
          <img src={Card21} style={{ width: "300px" , height: "400px" }} />
          </div>
          <div class="col-lg-8 col-lg-pull-4 col-md-8 col-md-pull-0 col-sm-8 col-sm-pull-4">
            <div>
              <h4 className='mt-2' style={{ fontSize: "28px" , fontWeight: "900" }}>Ticket Booking successful<VerifiedIcon style={{ color: "green" , fontSize: "40px" }}/> </h4>
            </div>
            <div>
              <div className='d-flex'>
                <div className='w-50'>
                  <p style={{ fontSize: "22px" , textAlign: "left" , fontWeight: "400" }}>Fare:</p>
                </div>
                <div className='w-50'>
                  <p style={{ fontSize: "20px" , textAlign: "right"}}>1050/-</p>
                </div>
              </div>
              <div className='d-flex'>
                <div className='w-50'>
                  <p style={{ fontSize: "22px" , textAlign: "left" , fontWeight: "400" }}><CiSquarePlus style={{ fontSize: "32px" , color: "#7532A9" }} />SGST 6%:</p>
                </div>
                <div className='w-50'>
                  <p style={{ fontSize: "20px" , textAlign: "right"}}>63/-</p>
                </div>
              </div>
              <div className='d-flex'>
                <div className='w-50'>
                  <p style={{ fontSize: "22px" , textAlign: "left" , fontWeight: "400" }}><CiSquarePlus style={{ fontSize: "32px" , color: "#7532A9" }} />SGST 6%:</p>
                </div>
                <div className='w-50'>
                  <p style={{ fontSize: "20px" , textAlign: "right"}}>63/-</p>
                </div>
              </div>
              <div className='d-flex'>
                <div className='w-50'>
                  <p style={{ fontSize: "22px" , textAlign: "left" , fontWeight: "400" }}><CiSquareMinus style={{ fontSize: "32px" , color: "#7532A9" }} />Discount 10%:</p>
                </div>
                <div className='w-50'>
                  <p style={{ fontSize: "20px" , textAlign: "right"}}>105/-</p>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-lg-pull-8 col-md-12 col-md-pull-4 col-sm-12 col-sm-pull-8" style={{ borderTop: "4px double black"}}></div>
            <div class="col-lg-12 col-lg-pull-8 col-md-12 col-md-pull-4 col-sm-12 col-sm-pull-8">
              <div className='d-flex mt-3'>
                <div className='w-50'>
                  <p style={{ fontSize: "22px" , textAlign: "left" , fontWeight: "400" }}>Total</p>
                </div>
                <div className='w-50'>
                  <p style={{ fontSize: "20px" , textAlign: "right" , fontWeight: "700" , color: "red"}}>1071/-</p>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-lg-pull-8 col-md-12 col-md-pull-4 col-sm-12 col-sm-pull-8" style={{ borderTop: "4px double black"}}></div>
            <div>
              <div>
              <h4 className='mt-2' style={{ fontSize: "28px" , fontWeight: "900" }}>Ticket Details</h4>
              </div>
              <div className='d-flex my-2' style={{ borderBottom: "3px dotted black"}}>
                <div className='w-25' style={{ borderRight: "3px dotted black"}}>
                  <div><FaRegCalendarDays style={{ fontSize: "32px" , color: "#7532A9" }}/></div>
                  <div>13th Oct</div>
                </div>
                <div className='w-25' style={{ borderRight: "3px dotted black"}}>
                  <div><IoMdClock style={{ fontSize: "32px" , color: "#7532A9" }}/></div>
                  <div>06:30 PM</div>
                </div>
                <div className='w-25' style={{ borderRight: "3px dotted black"}}>
                  <div><RiSofaLine style={{ fontSize: "32px" , color: "#7532A9" }}/></div>
                  <div>G12, G13, G14</div>
                </div>
                <div className='w-25'>
                  <div><GiTheaterCurtains style={{ fontSize: "32px" , color: "#7532A9" }}/></div>
                  <div>Sri Priya Theatre</div>
                </div>
              </div>
              <div className='d-flex'>
                <div>
                  <Barcode1 />
                </div>
                <div className='middle'>
                  <p style={{ fontSize: "22px" }}>Show this Barcode at Theatre</p>
                </div>
              </div>
              <div className='d-flex'>
                <a style={{ width: "100%" }}>
                  <Link class="btn41-43 btn-43" to="/" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }}>Go to Home</Link>
                </a>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default OrderSuccess