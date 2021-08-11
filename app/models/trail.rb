class Trail < ApplicationRecord
    # validates :name, presence: true
    # validates :city, presence: true
    # validates :state, presence: true
    # validates :country, presence: true
    validates :difficulty, inclusion: { in: ["easy", "moderate", "hard"]}, allow_nil: true

    has_many :lists, 
        through: :lists_trails
    
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

    # def fitsDifficulty(trailDifficulty, filterDifficulty)
    #     return true if filterDifficulty.values.all? { |val| val === "false" }
    #     return true if filterDifficulty[trailDifficulty] === "true"
    #     false
    # end

    # def fitsLength(trailLength, filterLength)
    #     return true if filterLength.values.all? { |val| val.empty? }
    #     return false if trailLength.nil?
    #     min, max = filterLength[:min].to_f, filterLength[:max].to_f
    #     return true if trailLength > min && trailLength < max
    #     false
    # end

    # def fitsGain(trailGain, filterGain)
    #     return true if filterGain.values.all? { |val| val.empty? }
    #     return false if trailGain.nil?
    #     min, max = filterGain[:min].to_i, filterGain[:max].to_i
    #     return true if trailGain > min && trailGain < max
    #     false
    # end

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

    # def fitsCategory(trailCategory, filterCategory)
    #     return true if filterCategory.values.all? { |val| val === "false" }
    #     return true if filterCategory[trailCategory] === "true"
    #     false
    # end

    # implement below method once the reviews has been built
    # def fitsRating(trailRating, filterRating)
    #     return true if filterRating === 0
    # end

    # ---------------------------------------------------------------

end