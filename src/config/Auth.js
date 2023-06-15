export default function Auth(){
    const login = localStorage.getItem("isLogged")

    if(!login) return false;
    return true;
}