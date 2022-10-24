class Reservation < ApplicationRecord
  belongs_to :property
  belongs_to :user

  validates :reservation_date, presence: true

  scope :future_reservations, -> { where("reservation_date > ?", Date.today).order(:reservation_date) }
end
