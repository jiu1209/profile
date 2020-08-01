Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => "homes#top"
  get "homes/top" => "homes#top"
  get "homes/about" => "homes#about"
  get "homes/info" => "homes#info"
end
