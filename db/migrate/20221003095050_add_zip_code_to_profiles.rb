class AddZipCodeToProfiles < ActiveRecord::Migration[7.0]
  def change
    add_column :profiles, :zip_code, :string
  end
end
