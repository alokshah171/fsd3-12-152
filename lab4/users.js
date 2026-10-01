let users = [
    {id:1,name:'Amit Sharma',mob:'98345xxxxx',email:'amit.example@exam.com'},
    {id:2,name:'Monika Verma',mob:'92345xxxxx',email:'moni.example@exam.com'},
]

let nextId = 3;
const getAllUsers = () => {
    return users;
}

const getUserById = (pid) => {
    return users.find((user) => user.id === pid);
    return found;
}



export const getUsers = () => users;
export const addUser =(user)=>{
    user.id = nextId++;
    users.push(user);
    return user;
}

const updateUser = (pid, updateData) => {
    const index = users.findIndex((user) => user.id === pid);

    if (index == -1) {
        return false;
    }
    updateData.id = pid;
    users[index] = updateData;
    return true;
}