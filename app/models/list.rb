class List < ApplicationRecord

    validates :title, presence: true
    validates :user_id, presence: true
    
    belongs_to :user

    has_many :lists_trails, 
        primary_key: :id, 
        foreign_key: :list_id, 
        class_name: :ListsTrail
        
    has_many :trails,
        through: :lists_trails, 
        source: :trail,
        dependent: :destroy

    # -------------------------------------------------------

    def self.fromUser(userId)
        self.where("user_id = ?", userId)
    end

end
