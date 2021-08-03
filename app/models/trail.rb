class Trail < ApplicationRecord
    # validates :name, presence: true
    # validates :city, presence: true
    # validates :state, presence: true
    # validates :country, presence: true
    validates :difficulty, inclusion: { in: ["easy", "moderate", "hard"]}, allow_nil: true

    # -----------------------------------------------------------------------------

    def self.in_bounds(bounds)
        self.where("latitude < ?", bounds[:northEast][:latitude])
            .where("latitude > ?", bounds[:southWest][:latitude])
            .where("longitude > ?", bounds[:southWest][:longitude])
            .where("longitude < ?", bounds[:northEast][:longitude])
    end
    
end