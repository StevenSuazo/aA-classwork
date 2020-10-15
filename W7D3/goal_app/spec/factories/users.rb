FactoryBot.define do
  factory :user do
    username { Faker::Games::Pokemon.name }
    password { "Pokemon" }
  end
end
