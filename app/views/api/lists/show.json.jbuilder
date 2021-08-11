if @list 
    json.extract! @list, :id, :title, :user_id
    # will eventually extract @list.items info as well
    # once list items is created
    
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