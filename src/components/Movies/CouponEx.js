import React from 'react'
import './CouponEx.css'

const CouponEx = () => {
  return (
    <div className='d-flex CouponEx my-5 container'>
        <div class="coupon mx-3">
            <div class="container1">
                <h3>Coupon</h3>
            </div>
            <div class="container1" style= {{ backgroundColor: "white" }}>
                <h2><b>20% OFF</b></h2>
                <p>Grab Minimum 20% off on your purchases instantly</p>
            </div>
            <div class="container1">
                <p>Use Promo Code: <span class="promo" >BOH232</span></p>
                <p class="expire">Expires: Nov 03, 2024</p>
            </div>
        </div>
        <div class="coupon mx-3">
            <div class="container1">
                <h3>Coupon</h3>
            </div>
            <div class="container1" style= {{ backgroundColor: "white" }}>
                <h2><b>Get 100/- off</b></h2>
                <p>Get 100/- off on orders above 799/-</p>
            </div>
            <div class="container1">
                <p>Use Promo Code: <span class="promo" >UDO478</span></p>
                <p class="expire">Expires: Nov 23, 2024</p>
            </div>
        </div>
        <div class="coupon mx-3">
            <div class="container1">
                <h3>Coupon</h3>
            </div>
            <div class="container1" style= {{ backgroundColor: "white" }}>
                <h2><b>25% OFF </b></h2>
                <p>Grab Minimum 25% off on your orders above 1099/-</p>
            </div>
            <div class="container1">
                <p>Use Promo Code: <span class="promo" >DRJ856</span></p>
                <p class="expire">Expires: Dec 07, 2024</p>
            </div>
        </div>
        <div class="coupon mx-3">
            <div class="container1">
                <h3>Coupon</h3>
            </div>
            <div class="container1" style= {{ backgroundColor: "white" }}>
                <h2><b>Vouchers</b></h2>
                <p>Instant Vouchers in this Festive Season</p>
            </div>
            <div class="container1">
                <p>Use Promo Code: <span class="promo" >OGS852</span></p>
                <p class="expire">Expires: Jan 21, 2025</p>
            </div>
        </div>
    </div>
  )
}

export default CouponEx