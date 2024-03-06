import React from "react"
import Address from "../assets/address.png"
import Phone from "../assets/phoneNo.png"
import Email from "../assets/email.png"

const Cards = () =>{
  // Card components representing Company information.
    return (
        <div className="container flex justify-center items-center  mx-auto px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* phone no  */}
            <div className="bg-white rounded-lg overflow-hidden hover:cursor-pointer mx-4 py-16 shadow-2xl p-8">
              <div className="flex items-center mb-8">
                <img src={Phone} className="h-16 w-16 m-4" alt="Phone"/>
                <h2 className="text-lg font-semibold">Phone Number</h2>
              </div>
              <h3 className="font-semibold ml-8">9413918825</h3>
            </div>
            {/* address */}
            <div className="bg-white rounded-lg overflow-hidden hover:cursor-pointer py-16 mx-4 shadow-2xl  p-8">
            <div className="flex items-center mb-8">
                <img src={Address} className="h-16 w-16 m-4" alt="Phone"/>
                <h2 className="text-lg font-semibold">Address</h2>
              </div>
              <h3 className="font-semibold mx-4">India</h3>
            </div>
            {/* email */}
            <div className="bg-white rounded-lg overflow-hidden hover:cursor-pointer py-16 mx-4 shadow-2xl p-8">
            <div className="flex items-center mb-8">
                <img src={Email} className="h-16 w-16 m-4" alt="Phone"/>
                <h2 className="text-lg font-semibold">Email</h2>
              </div>
              <h3 className="font-semibold mx-4">harshofficialrawat@gmail.com</h3>
            </div>
          </div>
        </div>
      );
}

export default Cards;