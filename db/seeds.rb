# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

for i in 0..15
	Reservation.create(name: Faker::Name.name, phone: Faker::PhoneNumber.phone_number, party_size: Faker::Number.between(1, 10), time_stamp: Faker::Time.between(DateTime.now, (DateTime.now + 1).midnight.change(:offset => "-0500")))
end