class AddGeolocationIndexToProperties < ActiveRecord::Migration[7.0]
  def change
    add_index :properties, [ :latitude, :longitude ]
  end
end
