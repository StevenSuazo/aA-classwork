# == Schema Information
#
# Table name: artworks
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  image_url  :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Artwork < ApplicationRecord
    validates :title, :artist_id, :image_url, presence: true
    validates :artist_id, uniqueness: { scope: :title, message: "only one title for each artist." }

    belongs_to :artist,
        foreign_key: :artist_id,
        class_name: :User
        

    has_many :artworks,
        foreign_key: :artwork_id,
        class_name: :ArtworkShare

    has_many :shared_viewers,
        through: :artworks,
        source: :viewer
        
end
