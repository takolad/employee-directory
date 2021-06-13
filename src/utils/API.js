import axios from "axios";
const employeeCount = 10;
const BASEURL = `https://randomuser.me/api/?results=${employeeCount}`;
// exclude sensitive info
const exclude = "&exc=login,gender,dob,location&nat=us&noinfo";

export default {
  search: function () {
    return axios.get(BASEURL + exclude);
  },
};
