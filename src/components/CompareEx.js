import React from 'react'
import './CompareEx.css'

const CompareEx = () => {
  return (
    <div className='container compare'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <table>
        <tr>
            <th style={{ width: "100%" }}>Features</th>
            <th>Free</th>
            <th>Gold</th>
            <th>Diamond</th>
        </tr>
        <tr>
            <td>Personalized Recommendations</td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
        </tr>
        <tr>
            <td>Social Media Integration</td>
            <td><i class="fa fa-remove"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
        </tr>
        <tr>
            <td>Loyalty Programs</td>
            <td><i class="fa fa-remove"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
        </tr>
        <tr>
            <td>Interactive Seat Maps</td>
            <td><i class="fa fa-remove"></i></td>
            <td><i class="fa fa-remove"></i></td>
            <td><i class="fa fa-check"></i></td>
        </tr>
        <tr>
            <td>Express Checkout</td>
            <td><i class="fa fa-remove"></i></td>
            <td><i class="fa fa-remove"></i></td>
            <td><i class="fa fa-check"></i></td>
        </tr>
        <tr>
            <td>Augmented Reality Integration</td>
            <td><i class="fa fa-remove"></i></td>
            <td><i class="fa fa-remove"></i></td>
            <td><i class="fa fa-check"></i></td>
        </tr>
        <tr>
            <td>Price (per year)</td>
            <td> - </td>
            <td> 699/- </td>
            <td> 999/- </td>
        </tr>
        <tr>
            <td></td>
            <td><a href="/buttons/41" class="btn41-43 btn-41">Select</a></td>
            <td><a href="/buttons/41" class="btn41-43 btn-41">Select</a></td>
            <td><a href="/buttons/41" class="btn41-43 btn-41">Select</a></td>
        </tr>
        </table>
    </div>
  )
}

export default CompareEx
