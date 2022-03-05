Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :trails, only: [:index, :create, :show]
    resources :lists, only: [:index, :create, :show, :update, :destroy]
    resources :lists_trails, only: [:index, :show, :create, :destroy]
    resources :reviews, only: [:index, :create, :destroy]
  end
  
  root "static_pages#root"
  
end
