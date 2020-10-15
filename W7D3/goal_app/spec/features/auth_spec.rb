require 'spec_helper'
require 'rails_helper'

feature 'the signup process' do
  scenario 'has a new user page' do 
    visit '/users'
    click_on 'Sign Up'
    expect(current_path).to eq('/users/new')
  end

  feature 'signing up a user' do
    
    before :each do
      user = create :user
      log_in(user)
    end
    
    scenario 'shows username on the homepage after signup' do
      visit '/users'
      expect(page).to have_content("Welcome #{user.username}")  
    end

  end
end

feature 'logging in' do
  scenario 'shows username on the homepage after login'

end

feature 'logging out' do
  scenario 'begins with a logged out state'

  scenario 'doesn\'t show username on the homepage after logout'

end