require 'rails_helper'

RSpec.describe Profile, type: :model do
  it { belong_to :user }
end
