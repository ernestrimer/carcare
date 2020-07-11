# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
vehicle = Vehicle.create(
    make: 'Nissan'
    model: 'Titan',
    year: '2012',
    mileage: '100000'
)

user = User.create(
  name: 'John SMith',
  nickname: 'Johnny',
  email: 'johnny@test.com'
)

services = Services.create(
  task: 'Oil Change',
  frequency: 'Every 3000 miles'
)

schedules = Schedules.create(
    when: 'Aug. 10',
    vendor: 'Jiffy Lube'
)

puts "Data Seeded."