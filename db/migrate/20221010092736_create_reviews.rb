class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :title      
      t.text :body   
      t.integer :rating
      t.bigint :reviewable_id
      t.string :reviewable_type
      t.timestamps
    end
    add_index :reviews, [:reviewable_id, :reviewable_type]
  
  end
end
