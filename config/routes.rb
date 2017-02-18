Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :storis, only: [:create, :update, :index, :show]
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
  end
end
