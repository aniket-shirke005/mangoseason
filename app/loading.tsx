import Image from "next/image";
import React from "react";
import Loader from '@/assets/loader.gif'

const Loading = () => {
  return <div className="h-screen flex justify-center items-center">
    <Image src={Loader} alt="loading gif" height={150} width={150}/>
  </div>;
};

export default Loading;
