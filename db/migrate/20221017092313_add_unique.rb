class AddUnique < ActiveRecord::Migration[7.0]
  def change
    add_index :reservations, [:property_id, :user_id, :reservation_date], unique: true, name: 'idx_reservations_on_property_id_&&_user_id_&&_reservation_date'
  end
end
