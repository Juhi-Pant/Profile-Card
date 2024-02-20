import Api from './api/api'
import ProfileCard from './components/profileCard'
import './App.css';
import { useEffect, useState } from 'react';

function App() {
   
  const [image, setImage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(()=>{
    const fetchProfile = async () => {
      const result = await Api();
      console.log(result.name.title);
      setImage(result.picture.medium);
      setFirstName(result.name.first)
      setLastName(result.name.last)
      setGender(result.gender)
      setPhone(result.phone)
    };
   
    fetchProfile()
  }, []);
  

  return (
    <>
    <div className="flex justify-center items-center h-screen bg-[#222]">
    <ProfileCard image={image} firstName={firstName} lastName={lastName} gender={gender} phone={phone}/>
    </div>
    </>
    
  );
}

export default App;
