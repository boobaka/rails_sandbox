class MainController < ApplicationController
  def index
    @people = Person.all
  end
end
