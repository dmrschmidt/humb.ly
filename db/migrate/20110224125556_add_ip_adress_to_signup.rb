class AddIpAdressToSignup < ActiveRecord::Migration
  def self.up
    add_column :signups, :ip_adress, :integer
  end

  def self.down
    remove_column :signups, :ip_adress
  end
end
