class WebsocketTestController < ApplicationController
  def index
    @all_information = Information.all
  end
end
