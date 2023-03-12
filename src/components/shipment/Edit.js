import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Edit() {
    const [orderNo, setOrderNo] = useState("");
    const [date, setDate] = useState("");
    const [customer, setCustomer] = useState("");
    const [trackingNo, setTrackingNo] = useState("");
    const [status, setStatus] = useState("");
    const [consignee, setConsignee] = useState("");

    const { id } = useParams();

  useEffect(() => {
    axios.get(`https://my.api.mockaroo.com/shipments.json?key=5e0b62d0/${id}`).then((res) => {
        setOrderNo(res.data.orderNo);
        setDate(res.data.date);
        setCustomer(res.data.customer);
        setTrackingNo(res.data.trackingNo);
        setStatus(res.data.status);
        setConsignee(res.data.consignee);
    });
  }, []);

  const navigate = useNavigate();

  const data = {
    orderNo: orderNo,
    date: date,
    customer: customer,
    trackingNo: trackingNo,
    status: status,
    consignee:consignee,
  };

  function Update(e) {
    e.preventDefault();
    axios.put(`https://my.api.mockaroo.com/shipments.json?key=5e0b62d0/${id}`, data).then(navigate("/"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">Shipment Details</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={orderNo}
          onChange={(e) => setOrderNo(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter Order No."
        />
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="date"
          placeholder="Enter Date."
        />
        <input
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter Customer."
        />
        <input
          value={trackingNo}
          onChange={(e) => setTrackingNo(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter Tracking No."
        />
        <input
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter status."
        />
        <input
          value={consignee}
          onChange={(e) => setConsignee(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter Consignee."
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={Update}
        >
          UPDATE SHIPMENT
        </button>
      </form>
    </div>
  );
}

export default Edit;