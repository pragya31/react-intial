var _ = require('lodash');


const onsubmitValidation = (value, validateFields, setErrorMsg, setError, error) => {
    console.log("-----------onSubmit k validation mai ya ah")
    if(_.isEmpty(value)){
            setErrorMsg('Please fill all the required fields.');
            setError({all : 'Please fill all the required fields.'});
        return false;
    }
    console.log("Value---------",value)
    if(!_.isEmpty(value)){
     for(let validate in validateFields){
         console.log("validate--------------",validateFields[validate].required)
     if(!value[validate] && validateFields[validate].required){
       let errorMessage = validateFields[validate].errorMessage;
       console.log("VALIDATE------------",validate)
               setError({...error, [validate] :  errorMessage})
               setErrorMsg(errorMessage)
        return false;
     }
    }
    if(Object.keys(error).length){
        for(let err in error){
            setErrorMsg(error[err])
            return false
        }
    }
    return true;
   } 
}


const onChangeValidation = (validateFields , name, value, ref, setErrorMsg, setError, error) =>{
    if(error.hasOwnProperty('all')){
        setErrorMsg('')
        setError({})
    }
    console.log("validation -----------------",ref)
    if ( validateFields[name] && !!validateFields[name].hasOwnProperty('validator') &&
     validateFields[name].validator !== null && typeof validateFields[name].validator === 'object'
   ) {
     if (ref && ref[name] && !validateFields[name].validator.regEx.test(ref[name])) {
              setErrorMsg(validateFields[name].validator.error)
              setError({...error, [name] : validateFields[name].validator.error})
              console.log("errror-----------",error)
        return false;
     }
   }
    return true;
  }

export {
    onsubmitValidation,
    onChangeValidation
}