"use client";

import NavBar from "@/components/NavBar";
import Image from "next/image";
import bmiImg from "@/assets/bmi.png"
import { Linden_Hill } from "next/font/google";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useState } from "react";
import Swal from "sweetalert2"

export default function Page() {
// create state
const [weight, setWeight] =  useState("");
const [height, setHeight] =  useState("");
const [bmiValue, setBmiValue] =  useState("0.00");
const [bmiResult, setBmiResult] =  useState("XXXXX");

//function คำนนวณค่าBMI
const handleCalBMIClick = () => {
    //Validation input data
    if (weight === "" || height === "") {
        Swal.fire({
            icon: 'warning',
            title: 'คำเตือน',
            text: 'กรุณาป้อนน้ำหนักส่วนสูงให้ครบ',
            confirmButtonText: 'ตกลง'

        })
    }

    //คำนวณ bmi เเละเเสดงผล
    //เเปลง cm เป็น m
    const h  = parseFloat(height) / 100;
    const w = parseFloat(weight);
    const bmi = w / (h * h);
    setBmiValue(bmi.toFixed(2))

    //เเปลผล bmi เเละเเสดงผล
    if (bmi < 18.5) {
        setBmiResult("ผอม (เสี่ยงขาดสารอาหาร ภูมิคุ้มกันต่ำ)");
    }else if (bmi <= 22.9) {
        setBmiResult("สมส่วน (สุขภาพดี ความเสี่ยงโรคต่ำ)");
    }else if (bmi <= 24.9) {
        setBmiResult("ท้วม (เริ่มเสี่ยงโรคเบาหวาน ความดันโลหิตสูง)");
    }else if (bmi <= 29.9) {
        setBmiResult("อ้วน (เริ่มเสี่ยงโรคเบาหวาน ความดันโลหิตสูง โรคหัวใจ");
    }else{
        setBmiResult("อ้วนมาก (เสี่ยงโรครุนเเรง)")
    }}

    //function resetclick
    const handleResetClick = () => {
    // reset ค่าใน state ให้เป็นเหมือนเดิมเริ่มต้น
    setHeight("");
    setWeight("");
    setBmiValue("0.00");
    setBmiResult("XXXXX");
}
    return (
        <>  
            {/* เเสดง NavBar */}
            <NavBar/>

            {/* เเสดงเนื้อหาของหน้า BMI */}
            <div className="w-3/5 flex flex-col items-center
                            mx-auto mt-15 shadow-xl p-10 rounded-lg
                            border border-gray-200">
            {/* เเสดงหัวข้อการคำนวณเเละรูป */}
                <h1 className="text-2xl font-bold">
                    BMI Calculator
                </h1>
                <h3 className="text-gray-500">
                    คำนวณ BMI
                </h3>
                 <Image src={bmiImg} alt="logoImg" width={100} height={100} className="my-5" />

            {/* ส่วนของการป้อนหรือเลือก */}
            <div className="w-full flex flex-col">
                <h3 className="font-bold">
                    ป้อนน้ำหนัก (กิโลกรัม)
                </h3>
                <input value={weight} onChange={(e) => setWeight(e.target.value)}
                type="number" placeholder="เช่น 65.85" 
                        className="p-3 border border-gray-200 rounded mt-2"/>
                <h3 className="font-bold mt-4">
                    ป้อนส่วนสูง (เซ็นติเมตร)
                </h3>
                <input value={height} onChange={(e) => setHeight(e.target.value)}
                type="number" placeholder="เช่น 175.55" 
                        className="p-3 border border-gray-200 rounded mt-2"/>
            </div>

            {/* ส่วนของปุ่ม คำนวณ */}
            <button onClick={handleCalBMIClick}
            className="w-full mt-5 py-3 bg-blue-500 rounded text-white
                                hover:bg-blue-700 cursor-pointer ">
                คำนวณ BMI
            </button>


            {/* ส่วนของปุ่ม รีเซ็ต */}
            <button onClick={handleResetClick}
            className="w-full mt-5 py-3 bg-red-400 rounded text-white
                                hover:bg-gray-700 cursor-pointer ">
                รีเซ็ต
            </button>


            {/* ส่วนของการเเสดงผล BMI */}
            <div className="w-full flex justify-center gap-5 mt-5">
                <h3>ค่า BMI ที่คำนวณได้</h3>
                <h3 className="font-bold text-blue-500 text-2xl">
                    {bmiValue}
                </h3>
            </div>
            
            
            {/* ส่วนของการเเปลผล BMI*/}
            <div className="w-full flex justify-center gap-5 mt-5">
                <h3>การแปลผล</h3>
                <h3 className="font-bold text-blue-500 text-2xl">
                    {bmiResult}
                </h3>
            </div>


            {/* ส่วนของปุ่มกลับหน้าหลัก ซึ่งเป็น Link */}
            <Link href="/" className="w-full mt-5 py-3 bg-gray-500 rounded
                                        hover:bg-gray-700 text-center text-white">
                 กลับไปหน้าหลัก                           
                
            </Link>
            <Footer/>
            </div>
        </>
    );
};