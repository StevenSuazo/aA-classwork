class Cat < ApplicationRecord

  COLORS = %w(black white gray orange brown)

  validates :birth_date, :color, :name, :sex, presence: true 
  validates :color, inclusion: { in: COLORS }
  validates :sex, inclusion: { in: ['M', 'F'] }
 


end 