Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :storis, only: [:create, :update, :index, :show, :destroy] do
      resources :annotations, only: :create
      member do
        post "upvote"
      end
    end

    resources :comments, only: [:create, :destroy, :update] do
      member do
        post "upvote"
        post "downvote"
      end
    end

    resources :annotations, only: [:update, :show, :destroy] do
      member do
        post "upvote"
        post "downvote"
      end
    end

    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :searches, only: :index
  end
end
