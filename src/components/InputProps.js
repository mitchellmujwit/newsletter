import { Field } from 'formik'

const InputProps = ({ className, valid, error, ...props }) => {
  return <Field className={className} {...props} />
}

export default InputProps
