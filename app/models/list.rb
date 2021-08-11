class List < ApplicationRecord

    validates :title, presence: true
    validates :user_id, presence: true
    
    belongs_to :user
    has_many :trails,
        through: :lists_trails, 
        dependent: :destroy
    # has_many :lists_trails

    # -------------------------------------------------------

    def self.fromUser(userId)
        self.where("user_id = ?", userId)
    end

end
