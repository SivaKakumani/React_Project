function Validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;


    if (values.name === "") {
        error.name = "Name should not be empty";
    }else {
        error.name = ""
    }

    if (values.email === "") {
        error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Invalid email format"
    }else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Password should not be empty"
    // } 
    // else if (!password_pattern.test(values.password)) {
    //     // error.password = "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit";
    //     error.password = "Password didn't match"
    } else {
        error.password = ""
    }

    return error;   
}

export default Validation;
