class Signup < ActiveRecord::Base
  
  validates :mail, :presence => true, :allow_nil => false, :allow_blank => false, :length => { :maximum => 200, :minimum => 5 }
  validates :ip_address, :presence => true, :allow_nil => false, :allow_blank => false
  
end
