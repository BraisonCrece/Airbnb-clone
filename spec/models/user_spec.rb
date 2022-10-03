require 'rails_helper'

RSpec.describe User, type: :model do
  it { have_one(:profile).dependent(:destroy) }
end