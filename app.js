import axios from "axios"


const getUserr =async(_id) => {
    const {data : user} = await axios("https://jsonplaceholder.typicode.com/users/"+ _id);
    console.log(user);
};


const getPostt = async(_id) => {
    const {data : post} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${_id}`);
    console.log(post); 
};


function getData(_id) {

    try {
        const user = getUserr(_id);
        const post = getPostt(_id);
    }

    catch (e) {
        return e;
    }

}
export default getData;
