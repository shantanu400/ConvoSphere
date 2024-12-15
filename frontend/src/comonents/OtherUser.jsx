import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice';

const OtherUser = (prop) => {
    const user=prop.user;
    const dispatch=useDispatch()
    const {selectedUser}=useSelector(store=>store.user)
    const selectedUserHandle=(user)=>{
        console.log(user);
        dispatch(setSelectedUser(user))
    }

  return (
    <div>
        <div onClick={()=>selectedUserHandle(user)} className={`${selectedUser?._id===user?._id?'bg-zinc-200':''} flex gap-2 items-center text-white hover:text-zinc-800 hover:bg-zinc-200 rounded p-2 cursor-pointer`}>
            
            
            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    <img src={user?.profilephoto} alt="modi ji"></img>
                </div>
            </div>
            <div className='flex flex-col flex-1'>
                <div className='flex justify-between gap-2'>
                    <p>{user?.fullname}</p>
                    {console.log("in otheruser line 27", user,"kjsndjsad",user.fullname)}
                </div>
            </div>
        </div>
        <div className='divider my-0 py-0 h-1'></div>
    </div>
  )
}

export default OtherUser