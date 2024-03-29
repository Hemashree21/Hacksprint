import React, { useContext, useState } from 'react';
import addfile from '../assets/add-file.png';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../auth/ChatContext';
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import {v4 as uuid} from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const Input = () => {

  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());
        
        const uploadTask = uploadBytesResumable(storageRef, img);

      //   uploadTask.on(
      //     (error) => {
      //       //TODO:Handle Error
      //     },
      //     () => {
      //       getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
      //         await updateDoc(doc(db, "chats", data.chatId), {
      //           messages: arrayUnion({
      //             id: uuid(),
      //             text,
      //             senderId: currentUser.uid,
      //             date: Timestamp.now(),
      //             img: downloadURL,
      //           }),
      //         });
      //       });
      //     }
      //   );
      // } 

    //   try {
    //     const snapshot = await getDownloadURL(uploadTask.snapshot.ref);
    //     const downloadURL = snapshot;
  
    //     await updateDoc(doc(db, "chats", data.chatId), {
    //       messages: arrayUnion({
    //         id: uuid(),
    //         text,
    //         senderId: currentUser.uid,
    //         date: Timestamp.now(),
    //         img: downloadURL,
    //       }),
    //     });
    //   } catch (error) {
    //     console.error("Error handling image upload:", error);
    //   }
    // }
    try {
      // Wait for the upload to complete
      await uploadTask;

      // Get the download URL
      const downloadURL = await getDownloadURL(storageRef);

      // Update Firestore with the download URL
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
          img: downloadURL,
        }),
      });
    } catch (error) {
      console.error("Error handling image upload:", error);
    }
  } 
    else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"] : {
        text,
      }, 
      [data.chatId + ".date"] : serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"] : {
        text,
      }, 
      [data.chatId + ".date"] : serverTimestamp(),
    });

    setText('');
    setImg(null);
  };

  return (
    <div className="input">
      <input type='text' placeholder='Type something...' onChange={(e) => setText(e.target.value)} value={text}/>
      <div className="send">
        <input type="file" style={{display: 'none'}} id="file" onChange={(e) => setImg(e.target.files[0])}/>
        <label htmlFor="file">
          <img src={addfile} alt="add-file" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Input;