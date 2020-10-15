require 'rails_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  
  describe "presence" do 
    it {should validate_presence_of(:username)}
    it {should validate_presence_of(:session_token)}
    it {should validate_presence_of(:password_digest)}
  end

  describe "uniqueness" do
    before :each do 
      create :user 
    end
    it {should validate_uniqueness_of(:username)}
    it {should validate_uniqueness_of(:session_token)}
  end

  it {should validate_length_of(:password).is_at_least(6)}

  describe "::find_by_credentials" do 
    it "should return the user whose info matches" do
      user = User.create(username: "Eric", password: "Pokemon")
      found = User.find_by_credentials("Eric", 'Pokemon')
      expect(found).to eq(user)
    end
    it "should return nil, if no such user exists" do
      user = User.create(username: "Eric", password: "Pokemon")
      found = User.find_by_credentials("Eric", 'digimon')
      expect(found).to eq(nil)
    end
  end

end
