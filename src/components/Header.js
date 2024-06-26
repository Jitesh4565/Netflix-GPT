import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
   const navigate=useNavigate();
   const dispatch=useDispatch();
   const user=useSelector(store=>store.user);

   const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(
          addUser({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL})
        );
        navigate("/browse");
      } 
      else 
      {
        // User is signed out
        dispatch(removeUser()); 
        navigate("/");
      }
    });
    return ()=>unsubscribe();
  }, []);  
 
   const handleGptSearchClick=()=>{
      
    dispatch(toggleGptSearchView());
   }
   const handleLanguageChange=(e)=>{

   console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
   }
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      { user &&(
      <div className="flex p-2">
        {showGptSearch && (
        <select className="p-2 m-2 bg-gray-900 text-white rounded-lg"onChange={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map((lang)=>(
          <option key={lang.identifier} value={lang.identifier}>
            {lang.name}
          </option>
        ))}
        </select>
        )}
        <button  
        className="py-2 px-4 mx-4 my-2 bg-red-700 text-white rounded-lg"
        onClick={handleGptSearchClick}
        >{showGptSearch? "Homepage":"Search"}
        </button>
        <img
          className="w-12 h-12" 
          src={user?.photoURL}
          alt="usericon"
        />
        <button onClick={handleSignOut} className=" bg-red-700 rounded-lg m-2 p-2 text-white">
          Sign Out
        </button>
      </div>
     )}
    </div>
  );
};

export default Header;
