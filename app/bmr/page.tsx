"use client";

import NavBar from "@/components/NavBar";
import Image from "next/image";
import bmr from "@/assets/bmr.png";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useState } from "react";
import Swal from "sweetalert2"

 
export default function Page() {
    // create state gg
    const [weight, setWeight] =  useState("");
    const [height, setHeight] =  useState("");
    const [age, setAge] =  useState("");
    const [gender, setGender] =  useState("male");
    const [bmrValue, setBmrValue] =  useState("0.00");

     //Validation input data
     const handleCalBmrClick = () =>{
        if (weight === "" || height === "") {
            Swal.fire({
                icon: 'warning',
                title: 'คำเตือน',
                text: 'กรุณาป้อนน้ำหนักส่วนสูงให้ครบ',
                confirmButtonText: 'ตกลง'
    
            });
            return;
     }
        //คำนวณ bmr เเละเสดงผล ชาย
        if (gender === 'male') {
            const h = parseFloat(height);
            const w = parseFloat(weight);
            const a = parseFloat(age);
            const bmr = 66 + (13.75 * w ) + (5 * h) - (6.8 * a );
            setBmrValue(bmr.toFixed(2));

        } else {
            //คำนวณ bmr เเละเสดงผล หญิง
            const h = parseFloat(height);
            const w = parseFloat(weight);
            const a = parseFloat(age);
            const bmr = 665 + (9.6* w ) + (1.8 * h) - (4.7 * a );
            setBmrValue(bmr.toFixed(2));
        }}

        //function resetclick
        const handleResetClick = () => {
        // reset ค่าใน state ให้เป็นเหมือนเดิมเริ่มต้น
        setHeight("");
        setWeight("");
        setGender("male");
        setBmrValue("0.00");
        }
        return (
    <>
      {/*แสดง NavBar*/}
      <NavBar />
      {/*แสดงหน้าเนื้อหา ของหน้า BMI*/}
      <div className="w-3/5 flex flex-col items-center mx-auto mt-10 p-10 shadow-xl rounded-lg">
        {/*แสดงหัวข้อการคำนวณและรูป*/}
        <h1 className="text-2xl">BMR Calculator</h1>
        <h3 className="text-gray-500">คำนวณ BMR</h3>
        <Image src={bmr} alt="bmrimg" width={95} height={95} className="my-5" />
        {/*ส่วนของการป้อนหรือเลือก*/}
        <div className="w-full flex flex-col">
          <h3 className="font-bold">ป้อนน้ำหนัก (กิโลกกรัม)</h3>
          <input value={weight} onChange={(e) => setWeight(e.target.value)}
            type="number"
            placeholder="เช่น 65.65"
            className="p-3 border-gray-300 rounded mt-2 border"
          />
          <h3 className="font-bold mt-3">ป้อนส่วนสูง (เซ็นติเมตร)</h3>
          <input value={height} onChange={(e) => setHeight(e.target.value)}
            type="number"
            placeholder="เช่น 170"
            className="p-3 border-gray-300 rounded mt-2 border"
          />
          <h3 className="font-bold  mt-3">ป้อนอายุ(0)</h3>
          <input value={age} onChange={(e) => setAge(e.target.value)}
            type="number"
            placeholder="เช่น 25"
            className="p-3 border-gray-300 rounded mt-2 border"
          />
          <h3 className="font-bold  mt-3">เพศ</h3>
          <div>
            <input onChange={(e) => setGender(e.target.value)}
                    checked = {gender === "male"}
                    type="radio" name="gender" value="male" className="mr-2" />
            ชาย
            <input  onChange={(e) => setGender(e.target.value)}
                    checked = {gender === "female"}
                    type="radio" name="gender" value="female" className="mx-2" />
            หญิง
          </div>
        </div>
 
        <div className="flex gap-3 w-full  justify-center ">
          {/*ส่วนของปุ่ม คำนวณ*/}
          <button onClick={handleCalBmrClick}
                className=" mt-3 p-3 bg-red-400 rounded hover:bg-red-600
                              text-whitecursor-pointer">
            คำนวณ BMR
          </button>
          {/*ส่วนของปุ่ม รีเซ็ต*/}
          <button onClick={handleResetClick}
                    className=" mt-3 p-3 bg-amber-400 rounded hover:bg-amber-600
                              text-white cursor-pointer">
            Reset
          </button>
        </div>
 
        {/*ส่วนของการแสดง BMR*/}
        <div className="w-full flex flex-col items-center justify-center gap-3 mt-5">
          <h3>ค่า BMR ที่คำนวณได้</h3>
          <h3 className="font-bold text-blue-400 text-4xl">{bmrValue}</h3>
        </div>
 
        {/* ส่วนของปุ่ม กลับหน้าหลัก ซึ่งเป็น Link*/}
        <Link
          href="/"
          className="w-full mt-5 py-3 bg-gray-500 rounded
                                  hover:bg-gray-700 text-center text-white"
        >
          กลับไปหน้าหลัก
        </Link>
      </div>
      <Footer />
    </>
  );
}