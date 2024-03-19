"use client";
import CheckoutForm from "@/components/Payment/CheckoutForm";
import { SelectedCarAmountContext } from "@/context/SelectedCarAmountContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useContext } from "react";

const Payment = () => {
  //   const { carAmount, setCarAmount } = useContext(SelectedCarAmountContext);
  const stripePromise: any = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as any
  );
  const options: any = {
    mode: "payment",
    amount: 50,
    currency: "usd",
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

export default Payment;
