class CreateHorses < ActiveRecord::Migration[7.0]
  def change
    create_table :horses do |t|
      t.string :name
      t.string :location
      t.integer :longitude
      t.integer :latitude
      t.integer :price
      t.string :image
      t.string :broker

      t.timestamps
    end
  end
end
