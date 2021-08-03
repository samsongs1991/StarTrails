class Trail < ApplicationRecord
    validates :name, presence: true
    validates :city, presence: true
    validates :state, presence: true
    validates :country, presence: true
    validates :difficulty, inclusion: { in: ["easy", "moderate", "hard"]}

    # -----------------------------------------------------------------------------


    
end