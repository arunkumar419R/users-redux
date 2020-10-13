import React,{Component} from 'react'
import { fetchUsers,deleteUserReq } from '../redux/users/userActions'
import {connect} from 'react-redux'

export class UsersContainer extends Component{
    constructor(props){
        super(props);
       
    }
    componentDidMount (){
        this.props.fetchUsers(this.props.usersData.pageCount);
        
    }

    Nextpage = ()=>{
        this.props.fetchUsers(this.props.usersData.pageCount+1);
    }

    deleteUser = (userId)=>{
        console.log(userId);
        this.props.deleteUserReq(userId);
    }

    render(){
        const table ={
            borderCollapse: 'collapse',
            border: '1px solid black',
            margin:'auto '
          }

          const imgStyle = {
              height:'20px',
              width:'20px'
          }
          

        const {usersData} = this.props;
        return usersData.loading ?(<p>Loading.................</p> )
        : usersData.error?(<p>{usersData.error}</p>)
        :(
            <div>
            <div >
            <table style = {table}>
                <tr style = {table}>
                    <th>S.NO</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
                {
               usersData.users.map((user)=>
               <tbody>
                    <tr key = {user.id} style = {table}>
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                        <td>
                            <img src={user.thumbnailUrl } alt="img" style={imgStyle}></img>
                        </td>
                        <td>
                            <button onClick = {()=>{this.deleteUser(user.id)}}>Delete</button>
                        </td>
                    </tr>
               </tbody>
               )
            }
 
        </table>
        </div>
            <div>
                <button onClick = {this.Nextpage}>Next page {usersData.pageCount+1}</button>
                <p>You are in {usersData.pageCount} page.</p>
            </div>
        </div>

       
                )
    }
}

const mapStateToProps  = (state)=>{
    return {
        usersData : state.users
    }
}

const mapDispatchToProps = (dispatch,count)=>{
    return {
        fetchUsers : (count)=> dispatch(fetchUsers(count)),
        deleteUserReq : (id)=> dispatch(deleteUserReq(id)) 
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(UsersContainer);