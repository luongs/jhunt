class Simulation < ActiveRecord::Base
  # Add some validation
  validates :name, presence: true, length: {minimum: 2}
  validates :width, presence:true
  validates :height, presence:true

end
