import React from 'react'
import { useEffect, useState } from 'react'
import Loading from './Loading'
const UserData = () => {

    const [loading, setLoading] = useState(false)
    const [datas, setDatas] = useState([])
    const link = "https://reqres.in/api/users?page=1"

    const fetchapi = async ()=>{
  
      const response = await fetch(link)
      const data = await response.json()
  
      setLoading(true)
  
      console.log(data.data)
      setDatas(data.data)
  
    }
  
    useEffect(()=>{
      fetchapi()
    }, [])
    
    return (
        <>{loading ? <>
            {datas.map((user)=>(
                
                    <div className = 'cardlist' key = { user.id }>
                    <img src = {`https://reqres.in/img/faces/${user.id}-image.jpg`} alt='image'></img>
                    <p>{user.first_name} {user.last_name}</p>
                    <p>{user.email}</p>
                </div>
                
                
                    
            ))}
        </> : <Loading />}
        
        
        </>
        
    )
}

export default UserData
