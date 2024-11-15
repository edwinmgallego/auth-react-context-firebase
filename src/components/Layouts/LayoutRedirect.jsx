import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFirestore } from '../../hooks/useFirestore';

const LayoutRedirect = () => {

    const {nanoid} =useParams();
    const {searchData}=useFirestore();
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        searchData(nanoid).then((docSnap)=>{
            if(docSnap.exists()){
                window.location.href= docSnap.data().origin;
            }else{setLoading(false)}
        })

    },[])
    if(loading)return <Title text="cargando redireccionamiento ------>"/>
  return (
    <div className='mx-auto container'><Oulet/></div>
  )
}

export default LayoutRedirect