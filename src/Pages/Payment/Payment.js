import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51JyyJYAXycEYu9Cb19x9Ebpfgq8u6PR32FliWhqowHKC6dxJNiCd2WtmJspODnpRh1jABZuitU3j0aaAQSrFKrII00el7uyQx0');

const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/appointments/${appointmentId}`)
      .then(res => res.json())
      .then(data => setAppointment(data))
  }, [appointmentId])
  return (
    <div>
      <h2>Please Pay for: {appointmentId}</h2>
      <h4> Price : ${appointment.price} </h4>
      {appointment.price && <Elements stripe={stripePromise}>
        <CheckoutForm
          appointment={appointment}

        ></CheckoutForm>
      </Elements>}
    </div>
  );
};

export default Payment;

/*
1. install stripe and stripe-react
2.set publishable key using loadStripe
3.Elements
4.CheckoutForm
5
*/
