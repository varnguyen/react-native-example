const emailValidator = (email: any) => {
    const re = /\S+@\S+\.\S+/

    if (!email || email.length <= 0) return 'Email cannot be empty.'
    if (!re.test(email)) return 'Ooops! We need a valid email address.'

    return ''
}

const passwordValidator = (password: any) => {
    if (!password || password.length <= 0) return 'Password cannot be empty.'

    return ''
}

const nameValidator = (name: any) => {
    if (!name || name.length <= 0) return 'Name cannot be empty.'

    return ''
}

export { emailValidator, passwordValidator, nameValidator }
