import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat'
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutLined from '@material-ui/icons/Search';
import db from './firebase';
import {useStateValue} from './StateProvider'


const Sidebar = () => {
    const[rooms , setRooms] = useState([]);
  const[ {user} ,dispatch] =useStateValue();


    useEffect(()=>{
       const unsubscribe = db.collection('rooms').onSnapshot(snapshot=>(
                setRooms(snapshot.docs.map(doc=>
                    ({
                    id:doc.id,
                    data:doc.data(),
                })
                ))
            
        ));
        return () =>{
            unsubscribe();
        };

    },[]);
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src={user?.photoURL} />

                <div className="sidebar_right">
                    <IconButton>
                     <DonutLargeIcon />
                    </IconButton>

                    <ChatIcon />
                    <MoreVertIcon />

                </div>
            </div>


            <div className="sidebar_search">
                <div className="sidebar_serachContainer">
                <SearchOutLined/>
            <input type="text" placeholder="Search or start new chat"/>

                </div>

            </div>
            <div className="sidebar_chats">
                <SidebarChat addnewChat/>
                {rooms.map(room=>
                (
                <SidebarChat
                 key={room.id} 
                 id={room.id}
                 name={room.data.name}/>

                ))}

            </div>

        </div>
    )
}

export default Sidebar
