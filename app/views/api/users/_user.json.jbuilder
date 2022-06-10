json.extract! user, 
    :id, :email, :first_name, :last_name, 
    :about_me, :city, :state, :gender, :bday, 
    :created_at

json.set! :profile_pic_url, url_for(user.photo)