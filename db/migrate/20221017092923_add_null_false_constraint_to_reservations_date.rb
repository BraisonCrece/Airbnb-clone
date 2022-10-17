class AddNullFalseConstraintToReservationsDate < ActiveRecord::Migration[7.0]
  def change
    change_column :reservations, :reservation_date, :date, null: false
  end
end
