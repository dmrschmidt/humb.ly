class Signup < ActiveRecord::Base
  
  validates :mail, :presence => true, :allow_nil => false, :allow_blank => false, :length => { :maximum => 200, :minimum => 5 }
  validates :ip_address, :presence => true, :allow_nil => false, :allow_blank => false
  
  def ip
    [24, 16, 8, 0].collect {|b| (ip_address >> b) & 255}.join('.')
  end
  
end
