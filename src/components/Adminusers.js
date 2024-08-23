import React,{ useEffect, useState } from 'react'
import Axios from 'axios';
import Footer from './Footer'

function Adminusers() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState({name:'',email:'',mobile:''});
    const [tempBlog, settempBlog] = useState([]);
    const [loading, setloading] = useState(false);
    function splitDate(x)
    {
      if(x)
      {
        let y = x.split('T');
        return y[0];
      }
    }
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
            if(e.target.id=='mobile')
            {
                search[e.target.id] = e.target.value
            }
    }
    function searchfunc(e)
    {
        e.preventDefault();
        setloading(true)
        if(search.name=='' && search.email=='' && search.mobile=='')
        {
            setloading(false)
            return;
        }
        if(search.name!=='')
        {
            setUsers( tempBlog.filter((result)=>{
                setloading(false)
                return result.firstName.toLowerCase().includes(search.name.toLowerCase())
            }))
        }
        if(search.email!=='')
        {
            setUsers( tempBlog.filter((result)=>{
                setloading(false)
                return result.email.toLowerCase().includes(search.email.toLowerCase())
            }))
        }
        if(search.mobile!=='')
        {
            setUsers( tempBlog.filter((result)=>{
                setloading(false)
                return result.mobile.includes(search.mobile.toLowerCase())
            }))
        }
        if(search.email!=='' && search.name!=='')
        {
            setUsers( tempBlog.filter((result)=>{
                setloading(false)
                return (result.email.toLowerCase().includes(search.email.toLowerCase()) && result.firstName.toLowerCase().includes(search.name.toLowerCase()))
            }))
        }
        if(search.email!=='' && search.mobile!=='')
        {
            setUsers( tempBlog.filter((result)=>{
                setloading(false)
                return (result.email.toLowerCase().includes(search.email.toLowerCase()) && result.mobile.includes(search.mobile.toLowerCase()))
            }))
        }
        if(search.mobile!=='' && search.name!=='')
        {
            setUsers( tempBlog.filter((result)=>{
                setloading(false)
                return (result.mobile.includes(search.mobile) && result.firstName.toLowerCase().includes(search.name.toLowerCase()))
            }))
        }
        if(search.mobile!=='' && search.name!=='' && search.email!=='')
        {
            setUsers( tempBlog.filter((result)=>{
                setloading(false)
                return (result.mobile.includes(search.mobile) && result.firstName.toLowerCase().includes(search.name.toLowerCase()) && result.email.toLowerCase().includes(search.email.toLowerCase()))
            }))
        }
    }
    function sortByDesc(e)
    {
        setloading(true)
        e.preventDefault();
        if(e.target.value==1)
        {
            const sortByName = [...users];
            sortByName.sort((a, b) => a.name < b.name ? 1 : -1)
            setUsers(sortByName);
            setloading(false)   
        }
        else{
            const sortByName = [...users];
            sortByName.sort((a, b) => a.name > b.name ? 1 : -1);
            setUsers(sortByName);
            setloading(false)
        }
    }
    function clearSearch(e)
    {
        e.preventDefault()
        // window.location.reload();
        setUsers(tempBlog);
        setSearch({email:'',name:'',mobile:''});
        document.getElementById('email').value='';
        document.getElementById('name').value='';
        document.getElementById('mobile').value='';
       // document.getElementById('title').value='';
    }

    function markVerified(e,id)
    {
        setloading(true)
        e.preventDefault();
        Axios.get(`${process.env.React_App_Api_Url}/api/user/verifyAgentByAdmin?id=${id}`).then(res=>{
            getUsers();
        });
    }
    function markUnVerified(e,id)
    {
        setloading(true)
         e.preventDefault();
            Axios.get(`${process.env.React_App_Api_Url}/api/user/unverifyuser?id=${id}`).then(res=>{
                getUsers();
            });        
    }
    function getUsers()
    {
        Axios.get(`${process.env.React_App_Api_Url}/api/user/allusers`).then(res=>{
            console.log(res);
            setUsers(res.data.usersList)
            settempBlog(res.data.usersList)   
            setloading(false)
        });
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



        <h3>Customers</h3>

        <div className="edit-details">

            <div className="p-history-head">

                <form >

                   {/* <div>

                        <p className="d-inline">Showing 1-9</p>
                        <input type="number" value="" name="pagination" />

                   </div>*/}

                    <div>

                    <div>
                        <input type="text" placeholder="search by name" id="name" onChange={onChange} />
                            &nbsp;&nbsp;&nbsp;
                        <input type="text" placeholder="search by email" id="email" onChange={onChange} />
                            &nbsp;&nbsp;&nbsp;
                        <input type="text" placeholder="search by mobile" id="mobile" onChange={onChange} />
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

                    </div>

                </form>

            </div>


            <div className="table-responsive" style={{"marginTop":"5%"}}>

                <table className="order-table">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Role</th>
                    <th>Created At</th>
                    <th>Mark Verify/Unverify</th>
                </tr>                    

                    {users.length!==0?
                        users.map(user=>{
                            return(
                            user.user_role!=='admin'?
                                <tr>
                                    <td>{user.firstName+' '+user.lastName} </td>
                                    <td>{user.email}</td>
                                    <td>{user.mobile}</td>
                                    <td>{user.user_role=='manager'?'Agent':user.user_role}</td>
                                    <td>{splitDate(user.createdAt)}</td>
                                    {user.verifed?<td><a href="#" className="button-green" onClick={(e)=>{markUnVerified(e,user.id)}}>Mark UnVerified</a></td>:
                                    <td><a href="#" className="button-green" onClick={(e)=>{markVerified(e,user.id)}}>Mark Verified</a></td>}
                                </tr>    
                            :'')
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

export default Adminusers
