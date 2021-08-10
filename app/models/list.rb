class List < ApplicationRecord

    validates :title, presence: true
    validates :user_id, presence: true, uniqueness: true
    
    belongs_to :user

end
