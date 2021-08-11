class ListsTrail < ApplicationRecord

    validates :list_id, presence: true
    validates :trail_id, presence: true
    
    # write associations for lists <-> trails
    belongs_to :list
    belongs_to :trail
    
    

end
