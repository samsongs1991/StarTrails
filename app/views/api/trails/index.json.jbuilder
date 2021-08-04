if @trails
    @trails.each do |trail|
        json.set! trail.id do
            json.partial! "trail", trail: trail
        end
    end
end