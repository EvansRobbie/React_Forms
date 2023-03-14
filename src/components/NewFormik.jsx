import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
const initialValues = {
  names: "",
  emails: "",
  message: "",
  passwords: "",
  social:{
    facebook: '',
    twitter:''
  }
};
const onSubmit = (values) => {
  console.log(values);
};
// const validate = values =>{
//     const error = {}
//     if(!values.names){
//         error.names = 'Required'
//     }
//     if(!values.emails){
//         error.emails = 'Required'
//     }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.emails)){
//         error.emails = 'Invalid Email'
//     }
//     if(!values.passwords){
//         error.passwords = 'Required'
//     }
// return error
// }
const validationSchema = Yup.object({
  names: Yup.string().required("Required"),
  emails: Yup.string().email("Invalid Email Address").required("Required"),
  passwords: Yup.string().required("Required"),
});

const NewFormik = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className=" bg-slate-900 h-screen w-full my-0 flex ">
        <div className=" w-11/12 md:w-[30%] mx-20 my-10 md:m-auto h-[85vh] rounded-xl flex justify-center  bg-slate-200">
          <Form className=" flex flex-col items-center w-full h-[80vh] my-6 overflow-y-auto ">
            <div className="flex flex-col items-start w-full px-5 py-2 gap-1 ">
              <label
                htmlFor="names"
                className="text-slate-900 text-lg font-medium"
              >
                Name
              </label>
              <Field
                type="text"
                id="names"
                name="names"
                placeholder="Username"
                className="w-full outline-none px-2 py-1 placeholder-slate-500 focus:bg-teal-500 rounded-full "
              />
              {/* {error && <span>{error}</span>} */}
              <ErrorMessage name="names" component={TextError}  />
            </div>
            <div className="flex flex-col items-start w-full px-5 py-2 gap-1">
              <label
                htmlFor="emails"
                className="text-slate-900 text-lg font-medium"
              >
                Email
              </label>
              <Field
                id="emails"
                name="emails"
                placeholder="Email"
                className="w-full outline-none rounded-full text-base px-2 py-1 placeholder-slate-500 focus:bg-teal-500"
              />
              <ErrorMessage name="emails" component={TextError } />
              {/* {formik.touched.emails && formik.errors.emails ?  <span className='text-red-500 text-center flex  justify-center w-full'>{formik.errors.emails}</span> : null} */}
            </div>
            <div className="flex flex-col items-start w-full px-5 py-2 gap-1">
              <label
                htmlFor="comments"
                className="text-slate-900 text-lg font-medium"
              >
                Comments
              </label>
              <Field
                as="textarea"
                id="comments"
                name="comments"
                placeholder="comments"
                className="w-full outline-none rounded-full text-base px-2 py-1 placeholder-slate-500 focus:bg-teal-500"
              />
              <ErrorMessage name="comments" component={TextError} />
              {/* {formik.touched.emails && formik.errors.emails ?  <span className='text-red-500 text-center flex  justify-center w-full'>{formik.errors.emails}</span> : null} */}
            </div>
            <div className="flex flex-col items-start w-full px-5 py-2 gap-1">
              <label
                htmlFor="facebook"
                className="text-slate-900 text-lg font-medium"
              >
            Facebook
              </label>
              <Field
                type="facebook"
                id="facebook"
                name="social.facebook"
                placeholder="facebook"
                className="w-full outline-none rounded-full text-base px-2 py-1 focus:bg-teal-500 placeholder-slate-500"
              />
              <ErrorMessage name="facebook" component={TextError}  />
            </div>
            <div className="flex flex-col items-start w-full px-5 py-2 gap-1">
              <label
                htmlFor="twitter"
                className="text-slate-900 text-lg font-medium"
              >
            Twitter
              </label>
              <Field
                type="twitter"
                id="twitter"
                name="social.twitter"
                placeholder="twitter"
                className="w-full outline-none rounded-full text-base px-2 py-1 focus:bg-teal-500 placeholder-slate-500"
              />
              <ErrorMessage name="twitter" component={TextError}  />
            </div>
            <div className="flex flex-col items-start w-full px-5 py-2 gap-1">
              <label
                htmlFor="passwords"
                className="text-slate-900 text-lg font-medium"
              >
                Password
              </label>
              <Field
                type="password"
                id="passwords"
                name="passwords"
                placeholder="Password"
                className="w-full outline-none rounded-full text-base px-2 py-1 focus:bg-teal-500 placeholder-slate-500"
              />
              <ErrorMessage name="passwords" component={TextError}  />
            </div>
            <button
              type="submit"
              className=" w-[20vw] text-slate-200 my-4 bg-slate-900 rounded-lg py-1  active:scale-105 shadow-lg hover:shadow-teal-500 duration-300  ease-in hover:translate-x-5"
            >
              Submit
            </button>
          </Form>
        </div>
      </div>
    </Formik>
  );
};

export default NewFormik;
