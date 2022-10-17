class Reservation < ApplicationRecord
  belongs_to :property
  belongs_to :user
  validates :reservation_date, presence: true
end
