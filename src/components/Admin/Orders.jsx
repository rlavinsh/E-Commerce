import React, { useState } from "react";
import Layout from "./Layout";

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      orderid: "#henjndvh",
      customerName: "Lavinsh",
      email: "lavinsh@gmail.com",
      mobile: "+784789474",
      product: "Lenovo Laptop",
      amount: "25000",
      date: "25-04-2025 10:25:14 AM",
      status: "Pending",
    },
    {
      orderid: "#henjndvh",
      customerName: "Lavinsh",
      email: "lavinsh@gmail.com",
      mobile: "+784789474",
      product: "Lenovo Laptop",
      amount: "25000",
      date: "25-04-2025 10:25:14 AM",
      status: "Pending",
    },
    {
      orderid: "#henjndvh",
      customerName: "Lavinsh",
      email: "lavinsh@gmail.com",
      mobile: "+784789474",
      product: "Lenovo Laptop",
      amount: "25000",
      date: "25-04-2025 10:25:14 AM",
      status: "Pending",
    },
    {
      orderid: "#henjndvh",
      customerName: "Lavinsh",
      email: "lavinsh@gmail.com",
      mobile: "+784789474",
      product: "Lenovo Laptop",
      amount: "25000",
      date: "25-04-2025 10:25:14 AM",
      status: "Pending",
    },
    {
      orderid: "#henjndvh",
      customerName: "Lavinsh",
      email: "lavinsh@gmail.com",
      mobile: "+784789474",
      product: "Lenovo Laptop",
      amount: "25000",
      date: "25-04-2025 10:25:14 AM",
      status: "Pending",
    },
    {
      orderid: "#henjndvh",
      customerName: "Lavinsh",
      email: "lavinsh@gmail.com",
      mobile: "+784789474",
      product: "Lenovo Laptop",
      amount: "25000",
      date: "25-04-2025 10:25:14 AM",
      status: "Pending",
    },
    {
        orderid: "#henjndvh",
        customerName: "Lavinsh",
        email: "lavinsh@gmail.com",
        mobile: "+784789474",
        product: "Lenovo Laptop",
        amount: "25000",
        date: "25-04-2025 10:25:14 AM",
        status: "Pending",
      },
      {
        orderid: "#henjndvh",
        customerName: "Lavinsh",
        email: "lavinsh@gmail.com",
        mobile: "+784789474",
        product: "Lenovo Laptop",
        amount: "25000",
        date: "25-04-2025 10:25:14 AM",
        status: "Pending",
      },
      {
        orderid: "#henjndvh",
        customerName: "Lavinsh",
        email: "lavinsh@gmail.com",
        mobile: "+784789474",
        product: "Lenovo Laptop",
        amount: "25000",
        date: "25-04-2025 10:25:14 AM",
        status: "Pending",
      },
      {
        orderid: "#henjndvh",
        customerName: "Lavinsh",
        email: "lavinsh@gmail.com",
        mobile: "+784789474",
        product: "Lenovo Laptop",
        amount: "25000",
        date: "25-04-2025 10:25:14 AM",
        status: "Pending",
      },
      {
        orderid: "#henjndvh",
        customerName: "Lavinsh",
        email: "lavinsh@gmail.com",
        mobile: "+784789474",
        product: "Lenovo Laptop",
        amount: "25000",
        date: "25-04-2025 10:25:14 AM",
        status: "Pending",
      },
  ]);
  return (
    <Layout>
      <div>
        <h1 className="text-xl font-semibold"> Orders</h1>
        <div className="mt-6">
          <table className="w-full">
            <thead>
              <tr className="bg-rose-500 text-white">
                <th className="py-4">Orderid</th>
                <th>Customer's Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item, index) => {
                return (
                  <tr
                    className="bg-white text-center"
                    key={index}
                    style={{
                      background: (index + 1) % 2 === 0 ? "#f1f5f9" : "white",
                    }}
                  >
                    <td className="py-4">{item.orderid}</td>
                    <td>{item.customerName}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td className="capitalize">{item.product}</td>
                    <td>{item.amount.toLocaleString()}</td>
                    <td>{item.date}</td>
                    <td className="capitalize">
                      <select className="border p-1 border-gray-200">
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="dispatched">Dispatched</option>
                        <option value="returned">Returned</option>
                      </select>
                    </td>
                  </tr>
                );
              })}
              {/* <tr className="bg-slate-200 text-center">
                <td className="py-4">lavinsh</td>
                <td>lavinsh</td>
                <td>lavinsh</td>
                <td>lavinsh</td>
                <td>lavinsh</td>
                <td>lavinsh</td>
                <td>lavinsh</td>
                <td>lavinsh</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
