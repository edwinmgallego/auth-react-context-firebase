import { collection, getDoc, query, setDoc } from "firebase/firestore/lite";
import { useState } from "react"
import { auth } from "../firebase/firebase";
import { nanoid } from "nanoid";

export const useFirestore=()=>{
    const [data,setData] = useState([])//guardar datos
    const [error,setError]= useState();
    const [loading,setLoading]= useState({});

 const getData=async()=>{
    try {
        setLoading((prev)=>({...prev,getData:true}))
        const dataRef= collection(db,"urls");
        const q = query(dataRef,where("uid","==",auth.currentUser.uid));
        const querySnapshot= await getDocs(q);
        const dataDB = querySnapshot.docs.map((doc)=>doc.data())
        setData(dataDB);
        console.log(dataDB);
    } catch (error) {
        console.log(error)
        setError(error.message)
    }finally{
        setLoading((prev)=>({...prev,getData:false}))
    }
 }

 const addData=async(url)=>{
    try {
        setLoading((prev)=>({...prev,addData:true}))
        const newDoc={
            enable:true,
            nanoid: nanoid(6),
            origin: url,
            uid: auth.currentUser.uid
        };

        const  docRef= doc(db,"urls",newDoc.nanoid);
        await setDoc(docRef,newDoc);
        setData([...data,newDoc])

    } catch (error) {
        console.log(error);
        setError(error.message);

        
    }finally{
        setLoading((prev)=>({...prev,addData:false}))
    }
 }
 const deleteData=async(nanoid)=>{
    try {
        setLoading((prev)=>({...prev,[nanoid]:true}));
        const docRef =doc(db,"urls",nanoid)
        await deleteDoc(docRef)
        setData(data.filter((item)=>item.nanoid!=nanoid))
        console.log("dato Borrado")
    } catch (error) {
        console.log(error)
        setError(error.message)
        
    }finally{
        setLoading((prev)=>({...prev,[nanoid]:false}));
    }
 }

 const  updateData= async(nanoid,newOrigin)=>{
    try {
            setLoading((prev)=>({...prev,updateData:true}))
            const docRef= doc(db,"urls",nanoid)
            await updateDoc(docRef,{origin:newOrigin})
            setData(data.map((item)=> item.nanoid===nanoid ?{...item,origin:newOrigin}:item)) 
            console.log("item acutalizado")      
    } catch (error) {
        console.log(error);
        setError(error.message);
        
    }finally{
        setLoading((prev)=>({...prev,updateData:false}))
    }
 }

 const searchData= async(nanoid)=>{
    try {
        const docRef= doc(db,"urls",nanoid)
        const docSnap= await getDoc(docRef)
        return docSnap
    } catch (error) {
        console.log(error)
        setError(error.message)
        
    }
 }
 return{
    data,
    error,
    loading,
    getData,
    addData,
    deleteData,
    updateData,
    searchData,
 }

}