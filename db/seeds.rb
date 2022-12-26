user_pictures = []

6.times do
  user_pictures << URI.parse(Faker::LoremFlickr.image).open
end

me = User.create(email: "braisoncrece@gmail.com", first_name: "Brais", last_name: "Fernández", password: "password")
me.picture.attach(io: user_pictures[0], filename: "#{me.full_name}.jpg")

5.times do |i|
  user = User.create(email: Faker::Internet.email, first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, password: "password")
  user.picture.attach(io: user_pictures[i + 1], filename: "#{user.full_name}.jpg")
end

10.times do |i|
  property = Property.create!(
    name: Faker::Lorem.unique.word,
    headline: Faker::Lorem.unique.sentence,
    description: Faker::Lorem.paragraphs(number: 30).join(" "),
    address_1: Faker::Address.street_address,
    city: Faker::Address.city,
    state: Faker::Address.state,
    country: "United States",
    price: Money.from_amount((25..100).to_a.sample)

  )

  property.images.attach(io: File.open(Rails.root.join("db","sample","images","property_#{i + 1}.png")), filename: property.name)

  (1..5).to_a.sample.times do
    Review.create(reviewable: property, rating: (1..5).to_a.sample, title: Faker::Lorem.word, body: Faker::Lorem.paragraph, user: User.all.sample)
  end

end