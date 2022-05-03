json.extract! horse, :id, :name, :loacation, :price, :image, :broker, :created_at, :updated_at
json.url horse_url(horse, format: :json)
