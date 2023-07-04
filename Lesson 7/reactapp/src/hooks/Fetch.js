import React, { useEffect, useState } from 'react'
 
function Fetch(url) {

 const [obj ,setobj]= useState([])
 const [isPending ,setIsPending]= useState(false)
 const [error ,serError]= useState(null)


useEffect(()=>{
    const getData = async (api)=>{
        // Loader start
        setIsPending(true)
        try{
            
       const req = await fetch(api)
            if(!req.ok){
                throw new Error(req.status)
            }

       const resurs = await req.json()
       setobj(resurs)
       setIsPending(false)
        } catch(err){
            serError(err.message)

       setIsPending(false)

        }
        // Loader end

    }
    getData(url)
},[])

    return {obj,isPending,error}

}

export default Fetch