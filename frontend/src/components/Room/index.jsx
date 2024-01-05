import React from "react";
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import Layout from "../Layout";

const RoomPage = () => {
    const {roomId} = useParams();
   
    const myMeeting = async (element) => {
        const appID = 148513743;
        const serverSecret= "5cb3efc02bd2e20d17aed0cfa3b0a427";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, 
            serverSecret, 
            roomId, 
            Date.now().toString(),
            "Piyush Garg"
            );
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks:[{
                name:'Copy Link',
                url: `http://localhost:3000/room/${roomId}`,
            }
        ],
            scenario: {
                mode:ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: true,
        });
    };

   return (
   <Layout>
    <div ref={myMeeting}/>
   </Layout>
)};

export default RoomPage;