class CreateVehicles < ActiveRecord::Migration[6.0]
  def change
    create_table :vehicles do |t|
      t.string :make
      t.string :model
      t.integer :year
      t.integer :mileage
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
