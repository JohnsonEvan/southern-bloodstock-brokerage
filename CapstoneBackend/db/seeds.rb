# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'cleaning old data'

Horse.destroy_all

puts '🌱 Seeding...'

# Seed your database here
puts 'seeding horses'
puts 'seeding users'

20.times do
  price = Faker::Number.between(from: 10_000, to: 100_000).ceil(-4)
  image = 
  Horse.create(
    name: Faker::Creature::Horse.unique.name,
    location: Faker::Address.street_address,
    longitude: Faker::Address.longitude,
    latitude: Faker::Address.latitude,
    broker: Faker::Name.name,
    price: price,
    image: Faker::LoremFlickr.image(size: "50x60")
  )
end

User.create(
    username: "evan",
    password: "random",
    password_confirmation: "random",
)