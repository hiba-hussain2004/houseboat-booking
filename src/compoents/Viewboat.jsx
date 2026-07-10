import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Boatnavigation from './Boatnavigation'

const Viewboat = () => {

    const [data,changeData]=useState([])

    const fetchData =()=>{

        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/houseboat.json").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()

    }
    useEffect(
        ()=>{
            fetchData()
        },[]
    )


  return (
    <div>
        <Boatnavigation/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        {
                            data.map(
                                (value,index)=>{
                                    return (
                                         <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                           <div className="card shadow h-100">
                        <img
                            src={value.image}
                            className="card-img-top"
                            alt=""
                            height="330px"
                        />

                        <div className="card-body">
                            <h5 className="card-title">
                            {value.brand} {value.model}
                            </h5>

                            <p className="card-text">
                            <strong>BoatId:</strong> {value.boatId}<br />
                            <strong>BoatName:</strong> {value.boatName}<br />
                            <strong>Category:</strong> {value.category}<br />
                            <strong>Bedrooms:</strong> {value.bedrooms}<br />
                            <strong>Capacity:</strong> {value.capacity}<br />
                            <strong>AcType:</strong> ₹{value.acType}<br /><br />
                            <strong>PricePerNight:</strong> {value.pricePerNight}<br />
                            <strong>Route:</strong> ₹{value.route}<br /><br />
                            <strong>BuiltYear:</strong> {value.builtYear}<br />
                            <strong>Description:</strong> ₹{value.description}<br />
                            
                            </p>

                            <button className="btn btn-dark w-100">
                            View Details
                            </button>
                        </div>
                        </div>


                                                </div>
                                    )
                                }
                            )
                        }
                    </div>
            </div>
        </div>           
    </div>

    </div>
  )
}

export default Viewboat