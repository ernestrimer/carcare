Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :users do
      resources :vehicles
    end

    resources :vehicles do
      resources :services
      resources :schedules
    end
  end
end