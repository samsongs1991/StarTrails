if @lists_trails
    @lists_trails.each do |list_trail|
        json.set! list_trail.id do
            json.extract! list_trail, :id, :list_id, :trail_id
        end
    end
end