import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Shipments() {
  const { orderNo } = useParams();

  const [shipment, setShipment] = useState([]);

  useEffect(() => {
    axios.get(`https://my.api.mockaroo.com/shipments.json?key=5e0b62d0/${orderNo}`).then((res) => {
      setShipment(res.data);
    });
  }, []);

  console.log(shipment);
  return (
    <>
      <div className="h-full w-full flex flex-col mt-32 justify-center items-center">
        <Link
          to={`/`}
          className="hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
        >
          Back To Home
        </Link>
        {shipment && (
          <div className="w-[700px] h-[200] px-6 py-4 flex shadow-xl rounded-xl justify-center items-center bg-teal-600 mt-16 border-teal-800 border-2">
            
            <div className="w-5/12 flex flex-col space-y-4">
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                {shipment.orderNo}
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                {shipment.date}
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                {shipment.customer}
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                {shipment.trackingNo}
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                {shipment.status}
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                {shipment.consignee}
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Shipments;