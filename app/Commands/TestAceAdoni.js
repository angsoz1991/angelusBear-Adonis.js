'use strict'

const { Command } = require('@adonisjs/ace')

class TestAceAdoni extends Command {
  static get signature () {
    return 'test:ace:adoni'
  }

  static get description () {
    return 'test:ace:adoni teste'
  }

  async handle (args, options) {
    this.info('vida')
  }
}

module.exports = TestAceAdoni
