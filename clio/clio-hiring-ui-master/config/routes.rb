ClioHiringUi::Application.routes.draw do
  root "instructions#show"
  
  devise_for :users

  resource :instructions, only: [:show]

  resources :simulations, except: [:edit]

end
