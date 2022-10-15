FactoryBot.define do
  factory :property do
    name { "MyString" }
    headline { "MyString" }
    description { "MyText" }
    address_1 { Faker::Address.street_address }
    city { Faker::Address.city }
    state { Faker::Address.state }
    country { Faker::Address.country }
  end
end
