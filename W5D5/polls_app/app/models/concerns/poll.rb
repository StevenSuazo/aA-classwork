class Poll < ApplicationRecord

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    cla
end