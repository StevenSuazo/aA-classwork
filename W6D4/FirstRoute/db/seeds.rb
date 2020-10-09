# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Artwork.destroy_all
ArtworkShare.destroy_all

user1 = User.create(username: 'Maggie')
user2 = User.create(username: 'Steven')
user3 = User.create(username: 'Peter')

artwork1= Artwork.create(
  title: 'Nighthawks',
  artist_id: user1.id,
  image_url: 'https://en.wikipedia.org/wiki/Nighthawks_(painting)#/media/File:Nighthawks_by_Edward_Hopper_1942.jpg'
)

artwork2 = Artwork.create(
  title: 'Starry Night', 
  artist_id: user2.id, 
  image_url: 'https://artsandculture.google.com/asset/the-starry-night/bgEuwDxel93-Pg?hl=en&ms=%7B%22x%22%3A0.5%2C%22y%22%3A0.5%2C%22z%22%3A9.502542345072367%2C%22size%22%3A%7B%22width%22%3A1.8016134128154053%2C%22height%22%3A1.2375000000000012%7D%7D')

artwork3 = Artwork.create(
  title: 'Mona Lisa',
  artist_id: user3.id,
  image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/300px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
)

ArtworkShare.create(
    artwork_id: artwork1.id,
    viewer_id: user1.id
)

ArtworkShare.create(
    artwork_id: artwork2.id,
    viewer_id: user2.id
)

ArtworkShare.create(
    artwork_id: artwork3.id,
    viewer_id: user3.id
)