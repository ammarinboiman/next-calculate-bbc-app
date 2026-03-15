import Image from "next/image";
import Link from "next/link";

import logoImg from "@/assets/logo.png"
import bmiImg from "@/assets/bmi.png"
import bmrImg from "@/assets/bmr.png"
import carImg from "@/assets/car.png"
import Footer from "@/components/Footer";


export default function Page() {
    return (
        <>
        <div className="w-full mt-20 flex flex-col items-center">
            {/* รูป LOGO  */}
            <Image src={logoImg} alt="logoImg" width={180} height={180} />

            {/* ชื่อ + รายละเอียด */}
            <h1 className="mt-5 text-lg font-bold">
                เครื่องมือคำนวณออนไลน์
            </h1>
            <h3 className="mt-3 text-lg font-bold  text-gray-500">
                เลือกการคำนวณที่คุณต้องการจากรายการด้านล่าง
            </h3>
            
            {/* Link ไปยังหน้า /bmi, /bmr, /car */}
            <div className="w-full mt-8 flex justify-center gap-10">
                <Link href="/bmi"
                        className="p-3 border border-gray-200 rounded 
                                    shadow-x1 flex flex-col items-center">
                    <Image src={bmiImg} alt="bmiImg" width={95} height={95} />
                    <h3 className="text-x1">BMI (ดัชนีมวลกาย)</h3>
                    <h5 className="text-sm text-gray-500">
                        คำนวณน้ำหนักของคุณเหมาะสมกับส่วนสูงหรือไม่
                    </h5>
                </Link>

                <Link href="/bmr"
                        className="p-3 border border-gray-200 rounded 
                                    shadow-x1 flex flex-col items-center">
                    <Image src={bmrImg} alt="bmrImg" width={95} height={95} />
                    <h3>BMR (อัตราการเผาผลาญ)</h3>
                    <h5>คำนวณพลังงานจั้นตํ่ำที่ร่างกายต้องการต่อวัน</h5>
                </Link>
                <Link href="/car"
                        className="p-3 border border-gray-200 rounded 
                                    shadow-x1 flex flex-col items-center">
                    <Image src={carImg} alt="carImg" width={95} height={95} />
                    <h3>การผ่อนชำระรถยนต์</h3>
                    <h5>คำนวณพลังงานจั้นตํ่ำที่ร่างกายต้องการต่อวัน</h5>
                </Link>
            </div>
            {/* Footer */}
            <Footer/>
        </div>

        </>
    );
};