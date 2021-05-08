import CrudData from "./CrudData"

const token = new CrudData('token');
const username = new CrudData('username');
const role = new CrudData('roles');

export default function UserData() { 
  return {
    tokenData: token,
    
    usernameData: username,

    roleData: role
  }
}