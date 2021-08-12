if @list 
    json.extract! @list, :id, :title, :user_id
    
    json.set! "trails" do 
        @list.trails.each do |trail|
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
end