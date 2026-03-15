import NavBar from "@/components/NavBar";
import Image from "next/image";
import bmrImg from "@/assets/bmr.png"
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
                    BMI Calculator
                </h1>
                <h3 className="text-gray-500">
                    คำนวณ BMR
                </h3>
                 <Image src={bmrImg} alt="logoImg" width={100} height={100} className="my-5" />

            {/* ส่วนของการป้อนหรือเลือก */}
            <div className="w-full flex flex-col">
                <h3 className="font-bold">
                    ป้อนน้ำหนัก (กิโลกรัม)
                </h3>
                <input type="number" placeholder="เช่น 65.85" 
                        className="p-3 border border-gray-200 rounded mt-2"/>
                <h3 className="font-bold mt-4">
                    ป้อนส่วนสูง (เซ็นติเมตร)
                </h3>
                <input type="number" placeholder="เช่น 175.55" 
                        className="p-3 border border-gray-200 rounded mt-2"/>
                <h3 className="font-bold mt-4">
                    ป้อนอายุ (ปี)
                </h3>
                <input type="number" placeholder="เช่น 25" 
                        className="p-3 border border-gray-200 rounded mt-2"/>
                <div className="flex flex-col gap-2">

                <h3 className="font-bold mt-4" >เพศ</h3>
                <div className="flex items-center gap-2 ">
                <input type="radio" name="gender" className="w-4 h-4 bg-white cursor-pointer" />
                <h3>ชาย</h3>
                </div>
                 <div className="flex items-center gap-2">
                    <input type="radio" name="gender" className="w-4 h-4 bg-white cursor-pointer" />
                <h3>หญิง</h3>
                </div>
                </div>
            </div>

            {/* ส่วนของปุ่ม คำนวณ */}
            <div className="w-full mt-5 flex justify-center gap-5">
                <button className="w-full mt-5 py-3 bg-purple-500 rounded text-white
                                hover:bg-purple-700 cursor-pointer font-bold ">
                คำนวณ BMR
            </button>
            {/* ส่วนของปุ่ม reset */}
            <button className="w-full mt-5 py-3 bg-red-400 rounded text-white
                                hover:bg-gray-700 cursor-pointer font-bold">
                รีเซ็ต
            </button>
            </div>            

            {/* ส่วนของการเเสดงผล BMR */}
            <div className="w-full flex justify-center gap-5 mt-5">
                <h3>ค่า BMR ที่คำนวณได้</h3>
                <h3 className="font-bold text-blue-500 text-2xl">
                    0.00
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