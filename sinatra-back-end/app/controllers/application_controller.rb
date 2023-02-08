class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get '/exercises' do
    exercises = Exercise.all
    exercises.to_json
  end

  get '/exercises_categories' do 
    categories = Category.all
    categories.to_json
  end

  post '/exercises' do
    exercise = Exercise.create(
                        name: params[:name],
                        note: params[:note],
                        category_id: params[:category_id]
                      )
    exercise.to_json
  end

  post '/exercises_categories' do
    category = Category.create(
                        category: params[:category]
                      )
    category.to_json
  end

  patch '/exercises/:id' do
    exercise = Exercise.find_by_id(params[:id])
    exercise.update(
      note: params[:note],
    )
    exercise.to_json
  end

  # patch '/exercises_categories/:id' do
  #   category = Category.find_by_id(params[:id])
  #   category.update(category: params[:category])
  #   category.to_json
  # end

  delete '/exercises/:id' do
    exercise = Exercise.find_by_id(params[:id])
    exercise.destroy
    exercise.to_json
  end

  delete '/exercises_categories/:id' do
    category = Category.find_by_id(params[:id])
    category.destroy
    category.to_json
  end

end


 
  
 