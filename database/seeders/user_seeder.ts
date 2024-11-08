import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { UserFactory } from '#factories/user_factory'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    const user = await UserFactory.createMany(10)
  }
}