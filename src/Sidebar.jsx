import React, {useState , useEffect } from 'react';
import './Sidebar.css'


import {Avatar} from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import SidebarChat from './SidebarChat';
import Chat from './Chat';
import db from "./firebase";
import {useStateValue} from "./StateProvider";


function Sidebar() {
    const[rooms , setRooms] = useState([]);
    const[{user} , dispatch] = useStateValue();

    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot((snapshot)=>setRooms(
               snapshot.docs.map((doc) => ({ 
                   id: doc.id,
                   data: doc.data(),
               }))
           )

        );

        return () => {
            unsubscribe();
        }
    } , []);
  
    return (
        <div className="sidebar">
            <div className="sidebar_header">
            <Avatar src ={user?.photoURL}/>
            <div className="sidebar_headerRight">
            <IconButton>
            <DonutLargeIcon/>
            </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
            <IconButton>
               <MoreVertIcon/>
            </IconButton>
            </div>    
            </div>
            <div className="sidebar_search">
            <div className="sidebar_searchContainer">
            <SearchOutlined/>
             <input placeholder="Search or start new chat" type="text" />  
            </div>  
            </div>
           {/* { console.log(id)} */}

            <div className="sidebar_chats">
                <SidebarChat addNewChat/> 
                {rooms.map((room) => (
                    <SidebarChat key={room.id} id={room.id}
                    name= {room.data.name} />
                ))}
            </div>       
        </div>
    );
}


export default Sidebar
