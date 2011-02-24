class CreateSignups < ActiveRecord::Migration
  def self.up
    create_table :signups do |t|
      t.string :mail

      t.timestamps
    end
  end

  def self.down
    drop_table :signups
  end
end
