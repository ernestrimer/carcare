class CreateServices < ActiveRecord::Migration[6.0]
  def change
    create_table :services do |t|
      t.string :task
      t.string :description
      t.string :frequency
      t.belongs_to :vehicle, null: false, foreign_key: true

      t.timestamps
    end
  end
end
