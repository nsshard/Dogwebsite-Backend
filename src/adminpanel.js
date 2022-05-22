
import './App.css';
import React, {useRef, useState, useEffect } from "react";
import axios from './axios';
import useRefreshToken from "./hooks/useRefreshToken";
import useAxiosPrivate from './hooks/useAxiosPrivate';
const DOG_URL = '/dogs';

function Adminpanel() {
    const axiosPrivate = useAxiosPrivate();
  
    const userRef = useRef();
    const errRef = useRef();
    const [errMsg, setErrMsg] = useState('');
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [location, setLocation] = useState('');
    const [img, setImg] = useState('');
    const [success, setSuccess] = useState(false);

    const refresh = useRefreshToken();
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [name, breed, location, img])

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert('dog posted'+[name]);
       



        try {
            const response = await axios.post(DOG_URL,
                JSON.stringify({ name, breed, location, img}),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            
            setName('');
            setBreed('');
            setLocation('');
            setImg('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            }
            errRef.current.focus();
        }
    }

    return (
<>
{success ? (
                <section>
                  <br></br>
                    <h1>Dog successfully created!</h1>
                 
                </section>
            ) : (
                <section>
                     <div className='loginstuffv3'>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <div className='textthingy'>

                   
                    <h1>Add dogs</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='blacktext1'>
                        <label htmlFor="name">
                            Name:
                         
                        </label>
                        <input
                            type="text"
                            id="name"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                            aria-describedby="uidnote"
                        />
                    
                    </div>
                    <div className='blacktext2'>
                        <label htmlFor="breed">
                            Breed:
                           
                        </label>
                        <input
                            type="text"
                            id="breed"
                            onChange={(e) => setBreed(e.target.value)}
                            value={breed}
                            required
                    
                         
                        />
                    </div>
                    <div className='blacktext5'>
                  <label htmlFor="location">
                            Location:
                         
                        </label>
                        <input
                            type="text"
                            id="location"
                            autoComplete="off"
                            onChange={(e) => setLocation(e.target.value)}
                            value={location}
                            required
                            aria-describedby="uidnote"
                        />

</div>
<div className='imge'>
<label htmlFor="img">
  
                            Image:
                         
                        </label>
                        <input
                            type="text"
                            id="img"
                            autoComplete="off"
                            onChange={(e) => setImg(e.target.value)}
                            value={img}
                            required
                            aria-describedby="uidnote"
                        />

</div>
                       
                       
<div className='adddog'>

                        <button onClick={() => refresh()}>Sign Up</button>
                        </div>
                    </form>
                    <p>
                      
                        <span className="line">
                    
                        </span>
                    </p>
                    </div>
                </section>
            )}
        </>
    )
            }

            function Displaydogs() {

    
  const [data, getData] = useState([])
  const URL = 'http://localhost:3000/dogs';

  useEffect(() => {
      fetchData()
  }, [])


  const fetchData = () => {
      fetch(URL)
          .then((res) =>
              res.json())

          .then((response) => {
              console.log(response);
              getData(response);
          })

  }

  return (
      <>
       
          <tbody>
              <tr>
                  <th>Dog ID</th>
                  <th>Name</th>
                  <th>Breed</th>
                  <th>Location</th>
                  <th>img</th>
              </tr>
              {data.map((item, i) => (
                  <tr key={i}>
                      <td>{item._id}</td>
                      <td>{item.name}</td>
                      <td>{item.breed}</td>
                      <td>{item.location}</td>
                      <td>{item.img}</td>
               
                  </tr>
              ))}
          </tbody>

       

      </>
  );
              }

              


export default Adminpanel;