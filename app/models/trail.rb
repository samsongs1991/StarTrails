class Trail < ApplicationRecord
    validates :difficulty, inclusion: { in: ["easy", "moderate", "hard"]}, allow_nil: true

    has_many :lists_trails,
        primary_key: :id, 
        foreign_key: :trail_id, 
        class_name: :ListsTrail
        
    has_many :lists, 
        through: :lists_trails, 
        source: :list,
        dependent: :destroy

    has_many :reviews
    
    # -----------------------------------------------------------------------------

    def self.in_bounds(bounds)
        self.where("latitude < ?", bounds[:northEast][:lat])
            .where("longitude < ?", bounds[:northEast][:lng])
            .where("latitude > ?", bounds[:southWest][:lat])
            .where("longitude > ?", bounds[:southWest][:lng])
    end

    def self.applyUserFilters(trails, params)
        filteredTrails = []
        trails.each do |trail|
            if trail.fitsFilters(params)
                filteredTrails << trail
            end
        end
        filteredTrails
    end
    
    def fitsFilters(params)
        if fitsCheckbox(self[:difficulty], params[:difficulty]) && 
            fitsInput(self[:length], params[:length]) &&
            fitsInput(self[:gain], params[:gain]) && 
            fitsTime(self[:length], params[:time]) &&
            fitsCheckbox(self[:category], params[:category]) # &&
            # fitsRating(self[:rating], params[:rating])
            return true
        else 
            return false
        end
    end
    
    # ---------------------------------------------------------------

    private

    def fitsCheckbox(trailData, filterData)
        return true if filterData.values.all? { |val| val === "false" }
        return true if filterData[trailData] === "true"
        false
    end

    def fitsInput(trailData, filterData)
        return true if filterData.values.all? { |val| val.empty? }
        return false if trailData.nil?
        filterMin, filterMax = filterData[:min].to_f, filterData[:max].to_f
        filterMax = 999999999999 if filterMax === 0
        return true if trailData >= filterMin && trailData <= filterMax
        false
    end

    def fitsTime(trailLength, filterTime)
        return true if filterTime.values.all? { |val| val[:hrs].empty? && val[:mins].empty? }
        return false if trailLength.nil?
        trailMins = trailLength * 30
        filterMin = (filterTime[:min][:hrs].to_f * 60) + filterTime[:min][:mins].to_f
        filterMax = (filterTime[:max][:hrs].to_f * 60) + filterTime[:max][:mins].to_f
        filterMax = 999999999 if filterMax === 0.0
        return true if trailMins >= filterMin && trailMins <= filterMax
        false
    end

    # implement below method once the reviews has been built
    # def fitsRating(trailRating, filterRating)
    #     return true if filterRating === 0
    # end

    # ---------------------------------------------------------------

end