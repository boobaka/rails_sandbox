class WebsocketTestController < ApplicationController
  def index
    @all_information = Information.all

    ActionCable.server.broadcast 'informations', { mycontent: @all_information[0].information } #html: render_to_string('information', layout: false) #{ title: "New things!", body: "All that's fit for print" }

  end
end
