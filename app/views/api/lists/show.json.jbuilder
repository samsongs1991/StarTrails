if @list 
    json.extract! @list, :title
    # will eventually extract @list.items info as well
    # once list items is created
end