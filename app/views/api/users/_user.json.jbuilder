# json.extract! user, :id, :email
# json.extract! user.detail, :first_name
# json.userDetail do
#     json.extract! user.detail, 
#         :id, :first_name, :last_name, 
#         :email, :about_me, :city, :state, 
#         :gender, :bday
# end