if @list 
    json.extract! @list, :id, :title, :user_id
    # will eventually extract @list.items info as well
    # once list items is created
end