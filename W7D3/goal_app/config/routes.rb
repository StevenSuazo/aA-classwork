# == Route Map
#
#                    Prefix Verb URI Pattern                                                                              Controller#Action
#                     users POST /users(.:format)                                                                         users#create
#                  new_user GET  /users/new(.:format)                                                                     users#new
#                      user GET  /users/:id(.:format)                                                                     users#show
#        rails_service_blob GET  /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET  /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET  /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT  /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  
  resources :users, only: [:new, :create, :show, :index]
  resource :session, only: [:new, :create, :destroy]
end
