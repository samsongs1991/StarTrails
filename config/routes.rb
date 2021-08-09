Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :trails, only: [:index, :create, :show]
    resources :user_details, only: [:create, :show, :update]
  end
  
  root "static_pages#root"
  
end
