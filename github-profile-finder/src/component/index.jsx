import { useState, useEffect } from "react";
import GithubImg from '../assets/Vector.svg'
import User from "./user";
import '../App.css'

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("RamLearn-1997");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubUserData(){
    setLoading(true)
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    console.log(data);
    if(data){
        setUserData(data)
        setLoading(false)
        setUserName('')
    }
  }

  function handleSubmit() {
    fetchGithubUserData()
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if(loading){
    return <h1>Loading Data ! please wait</h1>
  }

  return (
    
    <div className="github-profile-container">
      <div className="title">
         <img className="gitimg"src={GithubImg} alt="github" />
        <h3>Github Profile Finder</h3>
      </div>
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username ..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {
        userData !== null ? <User user={userData}/> :  null
      }
    </div>
  );
}
