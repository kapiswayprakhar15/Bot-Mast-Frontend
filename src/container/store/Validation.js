export default function Validation({values}) {
    const errors ={};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if ( values.email === "")
    {
        errors.email = "Email is Required!";
    }
    return errors

}