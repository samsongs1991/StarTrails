if @lists
    @lists.each do |list|
        json.set! list.id do
            json.extract! list, 
                :id, :title, :user_id

            json.set! "trails" do 
                list.trails.each do |trail|
                    json.set! trail.id do 
                        json.extract! trail,
                            :id, :name, 
                            :latitude, :longitude, 
                            :location, :city, 
                            :state, :country, 
                            :difficulty, :description, 
                            :length, :gain, 
                            :category, :directions 
                    end
                end
            end

            json.set! "listTrailRelations" do
                list.lists_trails.each do |list_trail|
                    json.set! list_trail.id do
                        json.extract! list_trail, :id, :list_id, :trail_id
                    end
                end
            end
        end
    end
end