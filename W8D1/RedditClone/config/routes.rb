# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#               new_session GET    /session/new(.:format)                                                                   sessions#new
#                   session DELETE /session(.:format)                                                                       sessions#destroy
#                           POST   /session(.:format)                                                                       sessions#create
#                     users GET    /users(.:format)                                                                         users#index
#                           POST   /users(.:format)                                                                         users#create
#                  new_user GET    /users/new(.:format)                                                                     users#new
#                 edit_user GET    /users/:id/edit(.:format)                                                                users#edit
#                      user GET    /users/:id(.:format)                                                                     users#show
#                           PATCH  /users/:id(.:format)                                                                     users#update
#                           PUT    /users/:id(.:format)                                                                     users#update
#                           DELETE /users/:id(.:format)                                                                     users#destroy
#                      subs GET    /subs(.:format)                                                                          subs#index
#                           POST   /subs(.:format)                                                                          subs#create
#                   new_sub GET    /subs/new(.:format)                                                                      subs#new
#                  edit_sub GET    /subs/:id/edit(.:format)                                                                 subs#edit
#                       sub GET    /subs/:id(.:format)                                                                      subs#show
#                           PATCH  /subs/:id(.:format)                                                                      subs#update
#                           PUT    /subs/:id(.:format)                                                                      subs#update


Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resource :session, only: [:new, :create, :destroy]

  resources :users

  resources :subs, only: [:new, :create, :edit, :update, :show, :index]
end
