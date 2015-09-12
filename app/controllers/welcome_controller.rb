class WelcomeController < ApplicationController
  def index
    @reservations = Reservation.all
    @today = (DateTime.now + 1).midnight.change(:offset => "0000")
  end
end
