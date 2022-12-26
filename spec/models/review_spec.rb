require 'rails_helper'

RSpec.describe Review, type: :model do
  it { should validate_presence_of(:title)}
  it { should validate_presence_of(:body)}
  it { should validate_presence_of(:rating)}
  it { should belong_to(:reviewable) }
  it { should belong_to(:user) }
  it { should validate_numericality_of(:rating).is_greater_than_or_equal_to(1) }
  it { should validate_numericality_of(:rating).is_less_than_or_equal_to(5) }
  it { should validate_numericality_of(:rating).only_integer }
end
