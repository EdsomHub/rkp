import React, { useEffect, useState } from "react";
import axios from "axios";
import { TextField } from "@mui/material";
const CPSendmoney = () => {
  const [formData, setFormData] = useState({
    senderId: "2",
    receiverId: "",
    amount: "",
    userType: "", // New state for user type
  });
  const [userTypes, setUserTypes] = useState([]); // State for storing user types
  const [message, setMessage] = useState("");

  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("jwt");
        const headers = {
          "Content-Type": "application/json",
          Authorization: token,
        };
        const response = await axios.get("http://localhost:5000/api/usertype", {
          headers: headers,
        });
        // setData(response.data);
        setUserTypes(response.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [data]); // Empty dependency array to ensure the effect runs only once

  console.log(data);
  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("jwt");
      const response = await axios.post(
        "http://localhost:8080/api/transfer",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error transferring funds");
    }
  };
  return (
    <div className="gap-6 main-container">
      <h2 className="text-xl font-bold">Fund Transfer</h2>
      <form onSubmit={handleSubmit} className="gap-6">
        <div>
          <label>Receiver ID:</label>
          <input
            type="text"
            name="receiverId"
            value={formData.receiverId}
            onChange={handleInputChange}
            className="w-72 mb-2 mt-2 h-10"
          />
        </div>
        <div className="w-full mt-4 flex flex-col">
          <p className="capitalize text-bold font-semibold">User Type</p>
          <select
            name="userType"
            value={formData.userType}
            onChange={handleInputChange}
            className="w-1/4 h-12 mt-2"
          >
            <option value="">Select User Type</option>
            {userTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="  items-start">
          <p className="text-bold font-semibold mt-6 mb-2">Amount:</p>
          <TextField
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            className="w-1/4  mb-2 mt-2 bg-white"
            inputProps={{
              style: {
                height: "3px",
              },
            }}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-3 bg-themeColor texl-sm rounded-md text-white font-bold"
        >
          Transfer Funds
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
export default CPSendmoney;
