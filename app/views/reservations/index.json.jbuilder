json.array!(@reservations) do |reservation|
  json.extract! reservation, :id, :name, :phone, :party_size, :time_stamp
  json.url reservation_url(reservation, format: :json)
end
