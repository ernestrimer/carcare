class CreateSchedules < ActiveRecord::Migration[6.0]
  def change
    create_table :schedules do |t|
      t.datetime :when
      t.belongs_to :service, null: false, foreign_key: true
      t.belongs_to :vehicle, null: false, foreign_key: true

      t.timestamps
    end
  end
end
