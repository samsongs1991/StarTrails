# class ListsTrail < ApplicationRecord

#     validates :list_id, presence: true
#     validates :trail_id, presence: true
    
#     belongs_to :list, 
#         primary_key: :id, 
#         foreign_key: :list_id, 
#         class_name: "List"
        
#     belongs_to :trail, 
#         primary_key: :id, 
#         foreign_key: :trail_id, 
#         class_name: "Trail"
    
#     # ----------------------------------------------

#     def self.byList(list_id)
#         self.where("list_id === ?", list_id)
#     end

# end
