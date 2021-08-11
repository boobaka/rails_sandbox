Rails.application.routes.draw do
  root 'main#index'
  # get '/exam', to: 'main#exam'
  # post '/exam', to: 'main#create'
  get '/exam', to: 'main#exam'
  post '/exam', to: 'main#create'
end
