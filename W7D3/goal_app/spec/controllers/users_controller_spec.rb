require 'rails_helper'

RSpec.describe UsersController, type: :controller do 

  describe 'GET#new' do 
    it 'should render the sign up page' do 
      get :new
      expect(response).to render_template(:new)
    end
  end

  describe 'GET#index' do 
    it 'should render the user index page' do 
      get :index
      expect(response).to render_template(:index)
    end
  end

  describe 'POST#create' do 
    context 'with valid params' do 
      it 'creates the user' do 
        post :create, params: {user: {username: 'Eric', password: 'Pokemon'}}
        expect(User.last.username).to eq('Eric')
      end
    end

    context 'with invalid params' do 
      it 'renders the new template' do 
        post :create, params: {user: {username: 'Eric', password: ''}}
        expect(response).to render_template(:new)
      end
    end
  end

  describe 'GET#show' do 
  # let (:user) {create :user}
    before :each do 
      create :user
    end
    it 'should render the show template' do
      # user = create :user
      get :show, params: { id: User.last.id }
      expect(response).to render_template(:show)
    end
  end

end