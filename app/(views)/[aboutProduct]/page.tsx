'use client'

import { Banner } from "@/app/components/aboutProduct/Banner";
import { HeaderDesktop } from "@/app/components/desktop/HeaderDesktop";
import { useEffect } from "react";

interface params{
    name: string
}

export default function AboutProduct({ params }: { params: { aboutProduct: number } }){


    useEffect(() => {
        console.log("name is: " ,params.aboutProduct);
        
    },[])
    return(
        <>
            <HeaderDesktop/>
            <Banner/>
        </>
    )
}