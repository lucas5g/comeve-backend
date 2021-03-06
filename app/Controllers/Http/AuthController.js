'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')

class AuthController {

  async teste({ params }) {
    const { id } = params
    let password = await Hash.make('Sic7c8sic')

    const user = await User.query().where('id', id)
      .update({ password: password })



    return user
  }


  async authenticate({ request, auth }) {
    const { username, password } = request.all()

    const token = await auth.attempt(username, password)
 //   const user = await  User.findBy('username', username)

    token.username = username
    return token
  }


  async register({ request }) {
    const data = request.only(['username', 'password', 'email', 'profile'])

    const username = await User.findBy('username', data.username)

    if (username) {
      return { message: 'Usuário ja cadastrado' }
    }

    const email = await User.findBy('email', data.email)

    if (email) {
      return { message: 'Email ja cadastrado' }
    }

    const user = await User.create(data)
    return user;

  }
}

module.exports = AuthController
