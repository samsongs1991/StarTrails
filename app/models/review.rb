class Review < ApplicationRecord

    validates :trail_id, presence: true
    validates :user_id, presence: true
    validates :body, presence: true
    validates :rating, presence: true
    
    belongs_to :user
    belongs_to :trail

    # -------------------------------------------------------


end
