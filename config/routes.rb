Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  root "greetings#index"

  namespace :api do
    get :greetings, to: 'greetings#greetings'
  end
end
