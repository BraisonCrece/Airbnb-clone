FactoryBot.define do
  factory :profile do
    user { nil }
    address_1 { "MyString" }
    address_2 { "MyString" }
    city { "MyString" }
    state { "MyString" }
    country { "MyString" }
    latitude { 1.5 }
    longitude { 1.5 }
  end
end
