import {useFormik} from 'formik';
import * as yup from 'yup';
//import {CustomerDataService} from "../services/customer.service"


function AddCustomerComponent(props) {

    const validationSchema = yup.object({
        firstName: yup.string().required('This is a required Field.'),
        lastName: yup.string().required('This is a required Field.'),
        birthDate: yup.date('Please enter a valid date').required('This is a required Field.'),
        jobTitle: yup.string().required('This is a required Field.'),
        category: yup.string().required('This is a required Field.'),
        emailAddress : yup.string().required('This is a required Field').email('Invalid email format')
    })

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            birthDate: '',
            jobTitle: '',
            category: '',
            emailAddress : ''
        },

        onSubmit: (values) => {
            console.log(values);
            //CustomerDataService.addCustomer(values).then(res => {
            //    props.history.push("/customers");
            //})
        },

        validationSchema
    })


    const cancel = () => {
        props.history.push('/customers');
    }

    return (
        <div>
            <div className="container">
                   <div className="row">
                       <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Customer</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                        value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                        {formik.touched.firstName && formik.errors.firstName ? <div className='input__error'>{formik.errors.firstName}</div> : null}
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name: </label>
                                        <input onBlur={formik.handleBlur} placeholder="Last Name" name="lastName" className="form-control"
                                               value={formik.values.lastName} onChange={formik.handleChange}/>
                                               {formik.touched.lastName && formik.errors.lastName ? <div className='input__error'>{formik.errors.lastName}</div> : null}
                                    </div>
                                    <div className="form-group">
                                        <label>Birthdate: </label>
                                        <input onBlur={formik.handleBlur} placeholder="Birth Date" name="birthDate" className="form-control" type="Date"
                                               value={formik.values.birthDate} onChange={formik.handleChange}/>
                                               {formik.touched.birthDate && formik.errors.birthDate ? <div className='input__error'>{formik.errors.birthDate}</div> : null}
                                    </div>
                                    <div className="form-group">
                                        <label>Job Title: </label>
                                        <input onBlur={formik.handleBlur} placeholder="Job Title" name="jobTitle" className="form-control"
                                               value={formik.values.jobTitle} onChange={formik.handleChange}/>
                                               {formik.touched.jobTitle && formik.errors.jobTitle ? <div className='input__error'>{formik.errors.jobTitle}</div> : null}
                                    </div>
                                    <div className="form-group">
                                        <label>Category: </label>
                                        <input onBlur={formik.handleBlur} placeholder="Category" name="category" className="form-control"
                                               value={formik.values.category} onChange={formik.handleChange}/>
                                               {formik.touched.category && formik.errors.category ? <div className='input__error'>{formik.errors.category}</div> : null}
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address: </label>
                                        <input onBlur={formik.handleBlur} placeholder="Email Address" name="emailAddress" className="form-control"
                                               value={formik.values.emailAddress} onChange={formik.handleChange}/>
                                               {formik.touched.emailAddress && formik.errors.emailAddress ? <div className='input__error'>{formik.errors.emailAddress}</div> : null}
                                    </div>

                                    <button className="btn btn-success" type='submit' onClick={formik.handleSubmit}>Add</button>
                                    <button className="btn btn-danger" onClick={cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                       </div>
                   </div>
               </div>
        </div>
    )
}

export default AddCustomerComponent
