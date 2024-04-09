export const checkValid=(email,password)=>{
const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
if(!isEmailValid && !isPasswordValid){
    return "Email Not Valid, Password Not Valid"
}
else if(!isEmailValid) return "Email Not Valid";
else if (!isPasswordValid) return "Password Not Valid";
return null;
}