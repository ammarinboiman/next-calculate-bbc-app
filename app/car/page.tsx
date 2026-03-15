import NavBar from "@/components/NavBar";
import Image from "next/image";
import carImg from "@/assets/car.png"
import { Linden_Hill } from "next/font/google";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Page() {
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
                    Car Installment Calculator
                </h1>
                <h3 className="text-gray-500">
                    คำนวณ Car Installment
                </h3>
                 <Image src={carImg} alt="logoImg" width={100} height={100} className="my-5" />

            {/* ส่วนของการป้อนหรือเลือก */}
            <div className="w-full flex flex-col  bg-white cursor-pointer">
                <h3 className="font-bold">
                    ชื่อผู้คำนวณ
                </h3>
                <input type="string"
                        className="p-3 border border-gray-200 rounded mt-2"/>
                <h3 className="font-bold mt-4">
                    ราคารถ (บาท)
                </h3>
                <input type="float" 
                        className="p-3 border border-gray-200 rounded mt-2"/>
                <h3 className="font-bold mt-4">
                    ดอกเบี้ยต่อปี (%)
                </h3>
                <input type="float"
                        className="p-3 border border-gray-200 rounded mt-2"/>
                <div className="flex flex-col gap-2">

                <h3 className="font-bold mt-4" >เงินดาวน์ (%)</h3>

                <div className="flex flex-wrap items-center gap-4 bg-white p-4">
                <input type="radio" name="gender" className="w-4 h-4" />
                <h3>15%</h3>
                <input type="radio" name="gender" className="w-4 h-4" />
                <h3>20%</h3>
                <input type="radio" name="gender" className="w-4 h-4" />
                <h3>25%</h3>
                <input type="radio" name="gender" className="w-4 h-4" />
                <h3>30%</h3>
                <input type="radio" name="gender" className="w-4 h-4" />
                <h3>35%</h3>
                </div>
                </div>
            </div>

            {/* ListBox */}
            <div className="flex flex-col gap-4 w-full ">
                <h3 className="font-bold">จำนวนเดือนที่ผ่อน</h3>
                <select 
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm   focus:ring-blue-500 bg-white cursor-pointer"
                        defaultValue="24"
  >
                         <option value="12">12 เดือน</option>
                            <option value="24">24 เดือน</option>
                             <option value="36">36 เดือน</option>
                            <option value="48">48 เดือน</option>
                            <option value="60">60 เดือน</option>
                         <option value="72">72 เดือน</option>
                    </select>
            </div>

            {/* ส่วนของปุ่ม คำนวณ */}
            <div className="w-full mt-5 flex justify-center gap-5">
                <button className="w-full mt-5 py-3 bg-blue-500 rounded text-white
                                hover:bg-blue-700 cursor-pointer font-bold ">
                คำนวณ
            </button>
            {/* ส่วนของปุ่ม reset */}
            <button className="w-full mt-5 py-3 bg-red-400 rounded text-white
                                hover:bg-gray-700 cursor-pointer font-bold">
                ล้างข้อมูล
            </button>
            </div>            

            {/* ส่วนของการเเสดงผล BMR */}
            <div className="w-full flex justify-center gap-5 mt-5 font-bold">
                <h3>ผ่อนชำระต่อเดือน</h3>
                <h3 className="font-bold text-blue-500 text-2xl">
                    0.00 
                </h3>
                <h3>บาท</h3>
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