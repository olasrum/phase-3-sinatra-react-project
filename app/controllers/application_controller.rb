class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/weekly_workout" do
    exercises = Exercise.all
    exercises.to_json
  end

  get "/categories" do 
    categories = Category.all
    categories.to_json
  end

end
