class ChangeIpAdressName < ActiveRecord::Migration
  def self.up
    rename_column :signups, :ip_adress, :ip_address
  end

  def self.down
    rename_column :signups, :ip_address, :ip_adress
  end
end
