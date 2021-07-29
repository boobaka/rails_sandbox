class InformationsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "informations"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
