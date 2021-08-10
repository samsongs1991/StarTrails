if @users
    @users.each do |user|
        json.set! user.id do 
            json.extract! user,        
                :id, :email, :first_name, :last_name, 
                :about_me, :city, :state, :gender, :bday, 
                :created_at
        end
    end
end