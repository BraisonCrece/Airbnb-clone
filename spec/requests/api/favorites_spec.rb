require "rails_helper"

RSpec.describe "Api::Favorites", type: :request do
  let(:headers) do
    { "ACCEPT" => "application/json" }
  end
  let(:user) { create(:user) }
  let(:property) { create(:property) }

  before { sign_in user }

  describe "POST create" do
    let(:params) do
      {
        user_id: user.id,
        property_id: property.id
      }
    end

    it "creates a new favorite" do
      expect {
        post api_favorites_path, params: params, headers: headers
      }.to change(Favorite, :count).by(1)
      expect(response.status).to eq 201
    end
  end

  describe "DELETE destroy" do
    it "deletes a favorite" do
      favorite = create(:favorite)
      expect {
        delete api_favorite_path(favorite), headers: headers
      }.to change(Favorite, :count).by(-1)
      expect(response.status).to eq 204
    end
  end
end
