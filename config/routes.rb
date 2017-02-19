Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :storis, only: [:create, :update, :index, :show] do
      resources :annotations, only: :create
    end
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :annotations, only: [:update, :show]
  end
end
