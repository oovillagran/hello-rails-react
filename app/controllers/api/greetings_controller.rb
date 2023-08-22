class Api::GreetingsController < ApplicationController
  def greetings
    @greeting = Greeting.order('RANDOM()').first
    render json: { greeting: @greeting.message }
  end
end
