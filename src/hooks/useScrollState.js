
import { useEffect, useState } from "react";
export default function useScrollState(offset=50){
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{
    const s=()=>setScrolled(window.scrollY>offset);
    window.addEventListener("scroll",s,{passive:true});
    return()=>window.removeEventListener("scroll",s);
  },[offset]);
  return scrolled;
}
