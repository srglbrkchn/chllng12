const inputInfo = [
    {
        type: "text",
        name:"fName",
        placeholder:"First Name", 
        errMsg: "First Name cannot be empty"
    },
    {
        type: "text",
        name:"lName",
        placeholder: "Last Name",
        errMsg: "Last Name cannot be empty"
    },
    {
        type: "email",
        name:"email",
        placeholder: "Email Address",
        errMsg: "Looks like this is not an email"
    },
    {
        type: "password",
        name: "password",
        placeholder: "Password", 
        errMsg: "Password cannot be empty"
    }
]

export default inputInfo;