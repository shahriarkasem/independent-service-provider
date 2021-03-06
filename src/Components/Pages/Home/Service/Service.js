import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ data }) => {
    const { id, name, description, price, img } = data;
    const shortDescription = description.slice(0, 300) + '....';
    const navigate = useNavigate();

    const handleAppointment = id => {
        navigate(`/service/${id}`);
    }

    return (
        <section className='service-container border-3 '>
            <div className='service border mx-2 my-2 px-2'>
                <img className='img-fluid w-100' style={{height: '400px'}} src={img} alt="" />
                <h3 className='text-center py-1'><span className='text-primary'>{name}</span></h3>
                <h5><span className='text-danger'>Therapy fee:</span> <span className='fw-bold therapy-fee'>{price}</span></h5>
                <p><span className='fw-bold'>Therapy description:</span> {shortDescription}</p>
                <p className='text-center text-danger'><small>Want an Appointment? Click Checkout!</small></p>
                <div className='d-flex justify-content-center'>
                    <button onClick={() => handleAppointment(id)} className='btn btn-primary fw-bold'>Checkout</button>
                </div>
            </div>
        </section>
    );
};

export default Service;