import React, { useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
} from "@paypal/react-paypal-js";

const PayPalButton: React.FC = () => {
  const [_orderID, setOrderID] = useState<string | null>(null);

  // Create Order
  const createOrder = (_data: any, actions: any): Promise<string> => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: "3.99",
            },
            description: "Full contract analysis and live chat",
          },
        ],
      })
      .then((orderID: string) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // Capture Payment
  const onApprove = (_data: any, actions: any) => {
    return actions.order.capture().then((details: any) => {
      // alert(`Transaction completed by ${details.payer.name.given_name}`);
      console.log("Transaction details:", details);
    });
  };

  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "AWH1IC9xZY5OkmZF63VPYBEW8q5E1cCG736hjagzCsG-f2t0DdXFzphLrH3tF4YRm7QRYhQq9l9JcSqf",
      }}
    >
      <div className="w-full bg-[#ffc439] items-center justify-center h-16 rounded-md">
        <PayPalButtons
          fundingSource={FUNDING.PAYPAL}
          createOrder={createOrder}
          onApprove={onApprove}
          className="flex flex-col items-center justify-center h-16"
        />
      </div>
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
