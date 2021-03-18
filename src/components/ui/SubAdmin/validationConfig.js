const validateFields = {
        fname : {
            required: 'true',
            errorMessage: 'Enter First Name',
            validator : {
                regEx: /^[a-zA-Z]+$/,
                error: 'Invalid First name.',
            }
        },
        lname : {
            required: 'true',
            errorMessage: 'Enter Last Name',
            validator : {
                regEx: /^[a-zA-Z]+$/,
                error: 'Invalid Last name.',
            }
        },
        mobileNumber : {
            required: 'true',
            errorMessage: 'Enter Mobile Number',
            validator : {
                regEx: /^[0-9]{8}$/,
                error: 'Invalid Mobile Number.',
            }
        },
        emailId : {
            required: 'true',
            errorMessage: 'Enter Email ID',
            validator : {
                regEx: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                error: 'Enter a valid Email Id'
            }
        },
        password : {  
            required: 'true',
            errorMessage: 'Generate Password'
        },
        status : {
            required: 'true',
            errorMessage: 'Select Status'
        },
        accessModule : {
            errorMessage: 'Select Access Module',
            required: 'true'
        }
};

export default validateFields;