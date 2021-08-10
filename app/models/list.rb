class List < ApplicationRecord

    validates :title, presence: true
    validates :user_id, presence: true
    
    belongs_to :user

    # -------------------------------------------------------

    def self.fromUser(userId)
        self.where("user_id = ?", userId)
    end

end
