class Trail < ApplicationRecord
    # validates :name, presence: true
    # validates :city, presence: true
    # validates :state, presence: true
    # validates :country, presence: true
    validates :difficulty, inclusion: { in: ["easy", "moderate", "hard"]}, allow_nil: true

    # -----------------------------------------------------------------------------

    def self.in_bounds(bounds)
        puts bounds
        # self.where("lat < ?", bounds[:northEast][:lat])
        #     .where("lng < ?", bounds[:northEast][:lng])
        #     .where("lat > ?", bounds[:southWest][:lat])
        #     .where("lng > ?", bounds[:southWest][:lng])
    end
    
end