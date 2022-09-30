class Property < ApplicationRecord
  validates :name, presence: true
  validates :headline, presence: true
  validates :description, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :country, presence: true
  validates :address_1, presence: true
  validates :country, presence: true

  geocoded_by :address
  after_validation :geocode , if: -> { latitude.blank? && longitude.blank? }

  def address
    # the comment below is the option for be used with real data
    # [address_1, address_2, city, state, country].compact.join(', ')

    # I'll be using the once below becase I'm using Faker data
    [state, country].compact.join(', ')
  end
end
