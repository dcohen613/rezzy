class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.string :name
      t.string :phone
      t.integer :party_size
      t.datetime :time_stamp

      t.timestamps null: false
    end
  end
end
