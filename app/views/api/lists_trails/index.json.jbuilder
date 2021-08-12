if @trails_lists
    @trails_lists.each do |trail_list|
        json.set! trail_list.id do
            json.extract! trail_list, :id, :list_id, :trail_id
        end
    end
end