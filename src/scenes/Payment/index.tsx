import withRouter from "@/components/Layout/Router/withRouter";
import paymentService from "@/services/payment/paymentService";
import PaymentStore from "@/stores/paymentStore";
import { Button, Result, Row } from "antd";
import React, { useEffect, useState } from "react";

interface IProps {
  navigate: any;
  paymentStore: PaymentStore;
}

const Payment = (props: IProps) => {
  const [paymentResult, setPaymentResult] = useState<any>({});

  useEffect(() => {
    const updatePayment = async (values: any) => {
      await paymentService.createPayment(values);
    };

    const getParamsAndUpdatePayment = async () => {
      const searchParams = new URLSearchParams(window.location.search);
      const orderIdParam = searchParams.get("orderId");
      const messageParam = searchParams.get("message");
      const amountParam = searchParams.get("amount");
      const transIdParam = searchParams.get("transId");
      const requestIdParam = searchParams.get("requestId");
      const resultCodeParam = searchParams.get("resultCode");

      const paymentType = searchParams.get("type");
      if (paymentType == "1" && resultCodeParam == "0") {
        setPaymentResult({
          orderId: orderIdParam,
          amount: amountParam,
          message: "Đặt hàng thành công",
          resultCode: 0,
        });
        return;
      }
      if (orderIdParam && messageParam && amountParam) {
        await updatePayment({
          orderId: orderIdParam,
          userId: "",
          amount: amountParam,
          paymentMethodId: 2,
          requestId: requestIdParam,
          transId: transIdParam,
        });
        setPaymentResult({
          orderId: orderIdParam,
          amount: amountParam,
          message: messageParam,
          resultCode: resultCodeParam,
        });
      } else setPaymentResult({});
    };

    getParamsAndUpdatePayment();
    return () => setPaymentResult({});
  }, []);

  return (
    <Row className="justify-center items-center">
      {paymentResult && (
        <Result
          status={paymentResult.resultCode == 0 ? "success" : "error"}
          title={`Kết quả thanh toán cho đơn hàng #${paymentResult.orderId}`}
          subTitle={paymentResult.message}
          extra={[
            <Button
              type="primary"
              key="console"
              onClick={() => props.navigate("/home")}
            >
              Tiếp tục mua sắm
            </Button>,
            <Button key="buy">Buy Again</Button>,
          ]}
        />
      )}
    </Row>
  );
};

export default withRouter(Payment);
