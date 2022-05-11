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

  
Horse.create(name: 'Bella', price: 35000, location: "Mississippi", broker: "Cameron vice",image: "image")
Horse.create(name: 'Alex', price: 56500, location: "Arkansas", broker: "Jeff Knight",image: "image")
Horse.create(name: 'Lilly', price: 22000, location: "Mississippi", broker: "Jeff Knight",image: "image")
Horse.create(name: 'Alexia', price: 112000, location: "Alabama", broker: "Carl Simms",image: "image")
Horse.create(name: 'Fancy', price: 40000, location: "Mississippi", broker: "Cameron vice",image: "image")
Horse.create(name: 'Sugar', price: 33000, location: "Mississippi", broker: "Cameron vice",image: "image")
Horse.create(name: 'Lady', price: 35000, location: "Mississippi", broker: "Jeff Knight",image: "image")
Horse.create(name: 'Tucker', price: 20000, location: "Kentucky", broker: "Leah Thomas",image: "image")
Horse.create(name: 'Dakota', price: 15000, location: "Mississippi", broker: "Cameron vice",image: "image")
Horse.create(name: 'Cash', price: 160000, location: "Mississippi", broker: "Jeff Knight",image: "image")
Horse.create(name: 'Daisy', price: 55000, location: "Mississippi", broker: "Cameron vice",image: "image")
Horse.create(name: 'Spirit', price: 23500, location: "Alabama", broker: "Leah Thomas",image: "image")
Horse.create(name: 'Cisco', price: 29000, location: "Mississippi", broker: "Cameron vice",image: "image")
User.create(
    username: "evan",
    password: "random",
    password_confirmation: "random",
)