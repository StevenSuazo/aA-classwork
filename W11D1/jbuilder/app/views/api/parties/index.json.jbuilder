json.array! @parties.each do |party|
  json.extract! party, :name
end