import { useState } from "react"
import { supabase } from "../supbase/products";

export const useSupabase=()=>{
    const [products,setProducts]=useState<any>([]);
    const [filterData,setFilterData]=useState<any>([])
    const [singleProduct,setSingleProduct]=useState<any>([])
    const [mensProduct,setMensProduct]=useState<any>([])
    const [womensProduct,setWomensProduct]=useState<any>([])
    const getDataFromSupbase=async()=>{
        const {data,error}=await supabase.from('product').select('*')
    if(data){
        setProducts(data)
        console.log('data fetch successfully')
    }
    if(error){
        console.log(error)
    }
    }

    const getFilteredData=async(query:string)=>{
        const {data,error}=await supabase.from('product').select('*').or(`title.ilike.%${query}%,description.ilike.%${query}%,category.ilike.%${query}%`)
    if(data){
        setFilterData(data)
        console.log(data)
    }
    if(error){
        console.log(error)
    }
    }

    const getSingleProduct=async(id:number)=>{
        let {data,error}=await supabase.from('product').select('*').eq('id',id)
        if(data){
            setSingleProduct(data)
        }
        if(error){
            console.log(error)
        }
    }
    const getMensClothing=async(category:string)=>{
        let {data,error}=await supabase.from('product').select('*').ilike('category',`${category}`)
        if(data){
            setMensProduct(data)
        }
        if(error){
            console.log(error)
        }
    }
    const getWomensClothing=async(category:string)=>{
        let {data,error}=await supabase.from('product').select('*').ilike('category',`${category}`)
        if(data){
            setWomensProduct(data)
        }
        if(error){
            console.log(error)
        }
    }

    return {products,filterData,getDataFromSupbase,getFilteredData,getSingleProduct,singleProduct,getMensClothing,mensProduct,getWomensClothing,womensProduct}
   
    

}