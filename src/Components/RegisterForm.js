import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

function RegisterForm() {
    const formSchema = Yup.object().shape({
        username: Yup.string()
            .required('USERNAME is required'),
        password: Yup.string()
            .required('PASSWORD is required')
            .min(8, 'password length should be at least 8 characters'),
        passwordConfirm: Yup.string()
            .required('CONFIRM PASSWORD is required')
            .oneOf([Yup.ref('password')], 'PASSWORDS must and should match'),
        firstName: Yup.string()
            .required('FIRSTNAME is required'),
        title: Yup.string()
            .required('PLEASE SELECT'),
        selectTc: Yup.bool().oneOf([true], 'PLEASE SELECT')
    })
    const validationOpt = { resolver: yupResolver(formSchema) }

    const { register, handleSubmit, formState } = useForm(validationOpt)

    const { errors } = formState

    function onFormSubmit(data) {
        console.log(JSON.stringify(data, null, 8))
        return false
    }
    return (
        <div container="true" style={{ paddingTop:"100px", paddingBottom: "50px", marginBottom: "100px"}}>
            <h1 className="text-center" style={{ backgroundColor: "white", color: "green", marginLeft: "440px", marginRight: "440px" }}>R E G I S T E R</h1>
            <div className="row" style={{ marginTop: "50px"}}>
                <div className="col-8 mx-auto">
                    <img src="images/register.png" className="mx-auto d-block img-fluid rounded-circle" alt="" />
                </div>
            </div>
            <div className="form" style={{paddingLeft: "420px"}}>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="row form-group m-3">
                        <div className="col-6">
                            <input
                                name="username"
                                type="text"
                                placeholder="username*"
                                {...register('username')}
                                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.username?.message}</div>
                        </div>
                    </div>
                    <div className="row form-group m-3">
                        <div className="col-6">
                            <input
                                name="password"
                                type="password"
                                placeholder="password*"
                                {...register('password')}
                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                    </div>
                    <div className="row form-group m-3">
                        <div className="col-6">
                            <input
                                name="passwordConfirm"
                                type="password"
                                placeholder="confirm password*"
                                {...register('passwordConfirm')}
                                className={`form-control ${errors.passwordConfirm ? 'is-invalid' : ''
                                    }`}
                            />
                            <div className="invalid-feedback">
                                {errors.passwordConfirm?.message}
                            </div>
                        </div>
                    </div>
                    <div className="row form-group m-3">
                        <div className="col-6">
                            <input
                                name="firstName"
                                type="text"
                                placeholder="first name*"
                                {...register('firstName')}
                                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.firstName?.message}</div>
                        </div>
                    </div>
                    <div className="row form-group m-3">
                        <div className="col-6">
                            <input
                                name="lastName"
                                type="text"
                                placeholder="last name"
                                {...register('lastname')}
                                className={`form-control`}
                            />
                        </div>
                    </div>
                    <div className="row form-group m-3">
                        <div className="col-3">
                            <select
                                name="title"
                                type="title"
                                placeholder="country*"
                                {...register('title')}
                                className={`form-select ${errors.title ? 'is-invalid' : ''}`}>
                                <option value="">-</option>
                                <option value="W">Wonderland</option>
                                <option value="W">Dasmaland</option>
                                <option value="D">Dreams</option>
                                <option value="D">Disneyland</option>
                            </select>
                            <div className="invalid-feedback">{errors.title?.message}</div>
                        </div>
                    </div>
                    <div className="row form-group m-2">
                        <div className="col-6 m-2">
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    name="selectTc"
                                    {...register('selectTc')}
                                    id="selectTc"
                                    className={`form-check-input ${errors.selectTc ? 'is-invalid' : ''
                                        }`}
                                />
                                <div className="invalid-feedback">{errors.selectTc?.message}</div>
                                <label htmlFor="selectTc" className="form-check-label small">
                                    AGREE that EARTH without A R T is just “eh”
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 d-flex justify-content-center">
                            <button type="submit" className="btn-lg btn-info" style={{ color: "white"}}>
                            <Link className="text-decoration-none" style={{ color: "white"}} to="/thanks"> register</Link>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm