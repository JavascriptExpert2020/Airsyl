import React,{ useEffect, useState } from 'react'
import Axios from 'axios';
import Footer from './Footer'

function AdminContactUs() {
    const [contactus, setContactUs] = useState([]);
    const [search, setSearch] = useState({name:'',email:''});
    const [tempBlog, settempBlog] = useState([]);
    const [loading, setloading] = useState(false);
    function onChange(e)
    {
            if(e.target.id=='name')
            {
                search[e.target.id] = e.target.value
            }
            if(e.target.id=='email')
            {
                search[e.target.id] = e.target.value
            }
    }
    function searchfunc(e)
    {
        e.preventDefault();
        setloading(true)
        if(search.name!=='')
        {
            setContactUs( tempBlog.filter((result)=>{
                setloading(false)
                return result.name.toLowerCase().includes(search.name.toLowerCase())
            }))
        }
        if(search.email!=='')
        {
            setContactUs( tempBlog.filter((result)=>{
                setloading(false)
                return result.email.toLowerCase().includes(search.email.toLowerCase())
            }))
        }
        if(search.email!=='' && search.name!=='')
        {
            setContactUs( tempBlog.filter((result)=>{
                setloading(false)
                return (result.email.toLowerCase().includes(search.email.toLowerCase()) && result.name.toLowerCase().includes(search.name.toLowerCase()))
            }))
        }
    }
    function getUsers()
    {
        Axios.get(`${process.env.React_App_Api_Url}/api/contactus/getAll`).then(res=>{
            setContactUs(res.data.contactUs)
            settempBlog(res.data.contactUs)   
            setloading(false)
        });
    }
    function sortByDesc(e)
    {
        e.preventDefault();
        if(e.target.value==1)
        {
            const sortByName = [...contactus];
            sortByName.sort((a, b) => a.name < b.name ? 1 : -1)
            setContactUs(sortByName);
    
        }
        else{
            const sortByName = [...contactus];
            sortByName.sort((a, b) => a.name > b.name ? 1 : -1);
            setContactUs(sortByName);
        }
    }
    function clearSearch(e)
    {
        e.preventDefault()
        // window.location.reload();
        setContactUs(tempBlog);
        setSearch({email:'',name:''});
        document.getElementById('email').value='';
        document.getElementById('name').value='';
       // document.getElementById('title').value='';
    }
    useEffect(() => {
        setloading(true)
        getUsers();
      }, [])

    return (
        <>
        {loading?<div className="loading"></div>:''} 
        <section className="section">

        <div className="container">

            <div className="edit-profile" style={{"width": "100%"}}>



        <h3>Contact Us Requests</h3>

        <div className="edit-details">

            <div className="p-history-head" style={{"width": "100%"}}>

                <form>

                    <div>
                        <input type="text" placeholder="search by name" id="name" onChange={onChange} autoComplete="off"/>
                            &nbsp;&nbsp;&nbsp;
                        <input type="text" placeholder="search by email" id="email" onChange={onChange} autoComplete="off"/>
                            &nbsp;&nbsp;&nbsp;
                        <select onChange={(e)=>{sortByDesc(e)}}>

                            <option value="1" >Decending</option>
                            <option value="2" >Accending</option>

                        </select>
                        &nbsp;&nbsp;&nbsp;
                        <a href="#" className="button-green" onClick={e=>{searchfunc(e)}}>Search</a>
                        &nbsp;&nbsp;&nbsp;                        
                        <a href="#" className="button-green" onClick={e=>{clearSearch(e)}}>Clear</a>

                    </div>

                </form>

            </div>


            <div className="table-responsive" style={{"marginTop":"5%"}}>

                <table className="order-table">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                </tr>                    

                    {contactus.length!==0?
                        contactus.map(user=>{
                            return(
                                <tr>
                                    <td>{user.name} </td>
                                    <td>{user.email}</td>
                                    <td>{user.message}</td>
                                </tr>    
                            )
                        })
                    :'No User Found.'}


                </table>

            </div>

        </div>  
        </div>
        </div>
        </section>         
        <Footer></Footer> 
        </>
    )
}

export default AdminContactUs
