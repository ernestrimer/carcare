Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :services

    resources :users do
      resources :vehicles
    end

    #Through the vehicles show page
    resources :vehicles do
      resources :schedules
    end

    resources :services do
      resources :schedules
    end

  end
end