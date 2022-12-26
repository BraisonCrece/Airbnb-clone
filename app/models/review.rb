class Review < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true
  validates :rating, presence: true, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5, only_integer: true}

  belongs_to :reviewable, polymorphic: true, counter_cache: true
  belongs_to :user

  # Because each property could have a lot of reviews, we don't want to calculate the average_rating over
  # all records in a single query each time we need. So, to avoid this problem, we will update each avg 
  # rating after :create and :update each review
  after_commit :update_average_rating, on: [:create, :update]

  def update_average_rating
    reviewable.update!(average_rating: reviewable.reviews.average(:rating))
  end
end
