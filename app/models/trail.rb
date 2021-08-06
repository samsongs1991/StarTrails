class Trail < ApplicationRecord
    # validates :name, presence: true
    # validates :city, presence: true
    # validates :state, presence: true
    # validates :country, presence: true
    validates :difficulty, inclusion: { in: ["easy", "moderate", "hard"]}, allow_nil: true

    # -----------------------------------------------------------------------------

    def self.in_bounds(bounds)
        self.where("latitude < ?", bounds[:northEast][:lat])
            .where("longitude < ?", bounds[:northEast][:lng])
            .where("latitude > ?", bounds[:southWest][:lat])
            .where("longitude > ?", bounds[:southWest][:lng])
    end

    def self.applyUserFilters(trails, params)
        # trails will contain fetched trails from the DB
        # based on the bounds of the current map
        # trails will be iterable
        filteredTrails = []
        trails.each do |trail|
            if trail.fitsFilters(params)
                filteredTrails << trail
            end
        end
        filteredTrails
    end
    
    def fitsFilters(params)
        if fitsDifficulty(self[:difficulty], params[:difficulty]) && 
            fitsLength(self[:length], params[:length]) &&
            fitsGain(self[:gain], params[:gain]) # && 
            # fitsTime(self[:length], params[:time]) &&
            # fitsCategory(self[:category], params[:category])
            # && fitsRating(self[:rating], params[:rating])
            return true
        else 
            return false
        end
    end
    
    # ---------------------------------------------------------------

    private

    def fitsDifficulty(trailDifficulty, filterDifficulty)
        return true if filterDifficulty.values.all? { |val| val === "false" }
        return true if filterDifficulty[trailDifficulty] === "true"
        false
    end

    def fitsLength(trailLength, filterLength)
        return true if filterLength.values.all? { |val| val.empty? }
        return false if trailLength.nil?
        min, max = filterLength[:min].to_f, filterLength[:max].to_f
        return true if trailLength > min && trailLength < max
        false
    end

    # def fitsGain(trailGain, filterGain)
    #     return true if filterGain.values.all? { |val| val.empty? }
    # end

    # def fitsTime(trailLength, filterTime)
    #     return true if filterTime.values.all? { |val| val[:hrs].empty? && val[:mins].empty? }
    # end

    # def fitsCategory(trailCategory, filterCategory)
    #     return true if filterCategory.values.all? { |val| val === false }
    # end

    # implement below method once the reviews has been built
    # def fitsRating(trailRating, filterRating)
    #     return true if filterRating === 0
    # end

    # ---------------------------------------------------------------

end