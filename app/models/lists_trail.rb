class ListsTrail < ApplicationRecord

    validates :list_id, presence: true
    validates :trail_id, presence: true
    
end
